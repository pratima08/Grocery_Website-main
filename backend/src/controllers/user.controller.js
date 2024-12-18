import { User } from "../models/user.model.js";
import { Contact } from "../models/contact.model.js";
import { asyncHandler } from "../utils/asynchandler.js";
import { APIError } from "../utils/apierror.js";
import { APIResponse } from "../utils/apiresponse.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

//main page
const mainPage = (req, res) => {
  let error = req.flash("error");
  res.render("index", { error, isloggedin: false });
};
const registerUser = asyncHandler(async (req, res) => {
  try {
    // Check if body is empty
    if (!req.body || Object.keys(req.body).length === 0) {
      throw new APIError(400, "Request body is empty");
    }

    const { name, email, password, role } = req.body;

    // Debug values
    console.log("Extracted values:", {
      name: name || "missing",
      email: email || "missing",
      password: password ? "provided" : "missing",
      role: role || "missing",
    });

    // Enhanced validation with detailed feedback
    const missingFields = [];
    if (!name?.trim()) missingFields.push("name");
    if (!email?.trim()) missingFields.push("email");
    if (!password?.trim()) missingFields.push("password");

    if (missingFields.length > 0) {
      throw new APIError(
        400,
        `Required fields missing: ${missingFields.join(", ")}`
      );
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      throw new APIError(400, "Please provide a valid email address");
    }

    // Password strength validation
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!passwordRegex.test(password)) {
      throw new APIError(
        400,
        "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number"
      );
    }

    // Check name length
    if (name.length < 2 || name.length > 50) {
      throw new APIError(400, "Name must be between 2 and 50 characters long");
    }

    // Check for existing user
    const existingUser = await User.findOne({
      email: { $regex: new RegExp(`^${email}$`, "i") },
    });

    if (existingUser) {
      throw new APIError(409, "User with this email already exists");
    }

    // Create user with sanitized data
    const userData = {
      name: name.trim(),
      email: email.toLowerCase().trim(),
      password,
      ...(role && { role }),
    };

    console.log("Creating user with data:", {
      ...userData,
      password: "[HIDDEN]",
    });

    const user = await User.create(userData);

    const createdUser = await User.findById(user._id)
      .select("-password -refreshToken")
      .lean();

    if (!createdUser) {
      throw new APIError(500, "Error occurred while registering user");
    }

    console.log("User created successfully:", createdUser._id);

    return res
      .status(201)
      .json(
        new APIResponse(
          201,
          { user: createdUser },
          "User registered successfully"
        )
      );
  } catch (error) {
    console.error("Registration Error Details:", {
      message: error.message,
      stack: error.stack,
      type: error.constructor.name,
      body: req.body,
      headers: req.headers["content-type"],
    });

    if (error instanceof APIError) {
      return res.status(error.statusCode).json({
        success: false,
        message: error.message,
      });
    }

    // Handle mongoose validation errors
    if (error.name === "ValidationError") {
      return res.status(400).json({
        success: false,
        message: Object.values(error.errors)
          .map((err) => err.message)
          .join(", "),
      });
    }

    return res.status(500).json({
      success: false,
      message: "Internal server error during registration",
      debug: process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
});

const loginUser = asyncHandler(async (req, res) => {
  try {
    // Get credentials from request body
    const { email, password } = req.body;

    // Enhanced input validation
    if (!email?.trim()) {
      throw new APIError(400, "Email is required");
    }

    if (!password?.trim()) {
      throw new APIError(400, "Password is required");
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      throw new APIError(400, "Please provide a valid email address");
    }

    // Find user and select required fields
    const user = await User.findOne({
      email: email.toLowerCase().trim(),
    }).select("+password +refreshToken");

    if (!user) {
      // Use consistent error message for security
      throw new APIError(401, "Invalid credentials");
    }

    // Verify password
    const isPasswordValid = await user.isPasswordCorrect(password);
    if (!isPasswordValid) {
      throw new APIError(401, "Invalid credentials");
    }

    // Generate tokens
    const { accessToken, refreshToken } =
      await user.generateAccessandRefreshToken();

    // Update user with new refresh token
    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });

    // Get user data without sensitive fields
    const loggedInUser = await User.findById(user._id).select(
      "-password -refreshToken"
    );

    // Set cookie options
    const cookieOptions = {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
      path: "/",
    };

    // Set cookies for both tokens
    res
      .cookie("accessToken", accessToken, cookieOptions)
      .cookie("refreshToken", refreshToken, {
        ...cookieOptions,
        maxAge: 10 * 24 * 60 * 60 * 1000, // 10 days
      });

    // Return success response
    return res.status(200).json(
      new APIResponse(
        200,
        {
          user: loggedInUser,
          accessToken,
          refreshToken,
        },
        "Login successful"
      )
    );
  } catch (error) {
    // Log error for debugging
    console.error("Login Error:", {
      message: error.message,
      stack: process.env.NODE_ENV === "development" ? error.stack : undefined,
      email: req.body.email, // Log email for debugging
    });

    // Handle specific error types
    if (error instanceof APIError) {
      return res.status(error.statusCode).json({
        success: false,
        message: error.message,
      });
    }

    // Handle unexpected errors
    return res.status(500).json({
      success: false,
      message: "Internal server error during login",
      ...(process.env.NODE_ENV === "development" && { error: error.message }),
    });
  }
});

const logoutUser = asyncHandler(async (req, res) => {
  try {
    // Find and update user
    const user = await User.findByIdAndUpdate(
      req.user?._id,
      {
        $set: {
          refreshToken: null,
        },
      },
      {
        new: true,
      }
    );

    // Clear cookies
    const cookieOptions = {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
    };

    res
      .clearCookie("accessToken", cookieOptions)
      .clearCookie("refreshToken", cookieOptions);

    return res
      .status(200)
      .json(new APIResponse(200, {}, "Logged out successfully"));
  } catch (error) {
    throw new APIError(500, "Error during logout");
  }
});

const updateAccount = asyncHandler(async (req, res) => {
  // Destructuring the necessary data from the req object
  const { name, email } = req.body;
  const id = req.user.id;

  const user = await User.findById(id);

  if (!user) {
    return next(new APIError("Invalid user id or user does not exist"));
  }

  user.name = name;
  user.email = email;
  // Run only if user sends a file
  if (req.file) {
    // Deletes the old image uploaded by the user
    await cloudinary.v2.uploader.destroy(user.avatar.public_id);

    try {
      const result = await cloudinary.v2.uploader.upload(req.file.path, {
        folder: "lms", // Save files in a folder named lms
        width: 250,
        height: 250,
        gravity: "faces", // This option tells cloudinary to center the image around detected faces (if any) after cropping or resizing the original image
        crop: "fill",
      });

      // If success
      if (result) {
        // Set the public_id and secure_url in DB
        user.avatar.public_id = result.public_id;
        user.avatar.secure_url = result.secure_url;

        // After successful upload remove the file from local storage
        fs.rm(`uploads/${req.file.filename}`);
      }
    } catch (error) {
      return next(
        new APIError(error || "File not uploaded, please try again", 400)
      );
    }
  }

  // Save the user object
  await user.save();

  res
    .status(201)
    .json(new APIResponse(200, user, "account update successfully "));
});
const deletAccount = asyncHandler(async (req, res) => {
  // Assuming the user is authenticated and their ID is available in req.user
  const userId = req.user.id;

  // Check if user ID is provided (or comes from authentication token)
  if (!userId) {
    return res
      .status(400)
      .json({ message: "User not authenticated or invalid" });
  }

  try {
    // Find the user by their ID in the database and delete
    const user = await User.findByIdAndDelete(userId);

    // If the user does not exist
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Return success response
    res.status(200).json({
      success: true,
      message: "User account deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting account:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});
//Contact us
const contactUs = asyncHandler(async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    if (!name || !email || !message || !subject) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newContact = new Contact({
      name,
      email,
      subject,
      message,
    });

    await newContact.save();
    res.status(201).json({ message: "Contact saved successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
//add cart
const addCart = asyncHandler(async (req, res) => {
  let user = await User.findOne({ email: req.user.email });
  user.cart.push(req.params.productid);
  await user.save();
  req.flash("success", "addded to cart");
  res.redirect("/shop");
});
//delete cart
const deleteCart = asyncHandler(async (req, res) => {
  try {
    const itemId = req.params.id;
    console.log(itemId);
    req.user.cart = req.user.cart.filter((item) => item.id !== itemId); // Remove item by ID
    await req.user.save(); // Save updated cart
    res.redirect("/cart");
  } catch (error) {
    console.error("Error deleting item from cart:", error);
    res.status(500).send("Server error");
  }
});

export {
  registerUser,
  loginUser,
  logoutUser,
  updateAccount,
  deletAccount,
  contactUs,
  mainPage,
  addCart,
  deleteCart,
};
