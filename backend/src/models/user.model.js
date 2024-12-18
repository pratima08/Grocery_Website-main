import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    trim: true,
    minlength: [2, "Name must be at least 2 characters"],
    maxlength: [50, "Name cannot exceed 50 characters"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    lowercase: true,
    trim: true,
    validate: {
      validator: function (email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      },
      message: "Please provide a valid email address",
    },
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: [8, "Password must be at least 8 characters long"],
    validate: {
      validator: function (password) {
        // At least one uppercase, one lowercase, one number
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(password);
      },
      message:
        "Password must contain at least one uppercase letter, one lowercase letter, and one number",
    },
    select: false, // Exclude password by default in queries
  },
  role: {
    type: String,
    enum: {
      values: ["user", "admin"],
      message: "{VALUE} is not a valid role",
    },
    default: "user",
  },
  refreshToken: {
    type: String,
  },
});

// Index for performance
userSchema.index({ email: 1 });

// Hash password before saving
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  try {
    // Use a higher salt round for better security
    const salt = await bcrypt.genSalt(12);
    this.password = await bcrypt.hash(this.password, salt);
    this.refreshToken = null;
    next();
  } catch (error) {
    next(new Error(`Password hashing failed: ${error.message}`));
  }
});

// Compare password with hashed password
userSchema.methods.isPasswordCorrect = async function (password) {
  try {
    if (!password) {
      throw new Error("Password is required");
    }
    return await bcrypt.compare(password, this.password);
  } catch (error) {
    throw new Error(`Password comparison failed: ${error.message}`);
  }
};
userSchema.methods.generateAccessandRefreshToken = async function () {
  try {
    const accessToken = this.generateAccessToken();
    const refreshToken = this.generateRefreshToken();

    return {
      accessToken,
      refreshToken,
    };
  } catch (error) {
    throw new Error("Error while generating tokens");
  }
};

// Generate access token with enhanced security
userSchema.methods.generateAccessToken = function () {
  if (!process.env.ACCESS_TOKEN_SECRET) {
    throw new Error("ACCESS_TOKEN_SECRET is not defined");
  }

  return jwt.sign(
    {
      _id: this._id,
      email: this.email,
      name: this.name,
      role: this.role,
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRY || "15m",
      algorithm: "HS512", // Using a stronger algorithm
    }
  );
};

// Generate refresh token with enhanced security
userSchema.methods.generateRefreshToken = function () {
  if (!process.env.REFRESH_TOKEN_SECRET) {
    throw new Error("REFRESH_TOKEN_SECRET is not defined");
  }

  return jwt.sign({ _id: this._id }, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: process.env.REFRESH_TOKEN_EXPIRY || "7d",
    algorithm: "HS512",
  });
};

// Method to safely return user data
userSchema.methods.toSafeObject = function () {
  return {
    id: this._id,
    name: this.name,
    email: this.email,
    role: this.role,
  };
};

// Handle unique constraint errors
userSchema.post("save", function (error, doc, next) {
  if (error.name === "MongoServerError" && error.code === 11000) {
    next(new Error("Email already exists. Please use a different email."));
  } else {
    next(error);
  }
});

const User = mongoose.model("User", userSchema);

export { User };
