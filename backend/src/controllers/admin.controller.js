import { asyncHandler } from "../utils/asynchandler.js";
import { APIError } from "../utils/apierror.js";
import { Blog } from "../models/blog.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { APIResponse } from "../utils/apiresponse.js";
import { Product } from "../models/product.model.js";
import { Contact } from "../models/contact.model.js";
import { Slide } from "../models/addslide.model.js";
//admin page

//Create Product
const createProduct = asyncHandler(async function (req, res) {
  console.log("req.body:", req.body);
  console.log("req.files:", req.files);

  try {
    const { name, price, discount } = req.body;
    const avatarlocalpath = req.files?.avatar?.[0]?.path;

    if (!avatarlocalpath) {
      throw new APIError(400, "Avatar file is required.");
    }

    const avatar = await uploadOnCloudinary(avatarlocalpath);
    if (!avatar || !avatar.url) {
      throw new APIError(400, "Failed to upload avatar.");
    }

    const product = await Product.create({
      avatar: avatar.url,
      name,
      price,
      discount,
    });
    return res
      .status(201)
      .json(new APIResponse(200, product, "Product created successfully."));
  } catch (error) {
    console.error("Error creating product:", error);
    res.status(500).json({ error: error.message });
  }
});

//Delete Blog
const deleteBlog = asyncHandler(async (req, res) => {
  try {
    const { blogId } = req.params;
    console.log(blogId);
    const user = await Blog.findOneAndDelete({
      _id: blogId,
    });

    // If no blog found
    if (!user) {
      throw new APIError(
        404,
        "Blog not found or you are not authorized to delete it"
      );
    }

    return res
      .status(200)
      .json(new APIResponse(200, null, "Blog deleted successfully"));
  } catch (error) {
    console.error("Error deleting blog:", error);
    throw new APIError(500, `Failed to delete the blog: ${error.message}`);
  }
});
// Update blog post
const updateBlog = asyncHandler(async (req, res) => {
  const { title, description, date } = req.body;

  if (!title || !description || !date) {
    throw new APIError(400, "All fields are required");
  }

  const { blogId } = req.params;
  console.log("Blog ID:", blogId); // Logging the blogId for debugging purposes

  // Check if the blog exists
  const blogExists = await Blog.findById(blogId);
  if (!blogExists) {
    throw new APIError(404, "Blog not found");
  }

  // Update the blog
  const updatedBlog = await Blog.findByIdAndUpdate(
    blogId,
    {
      $set: {
        title,
        description,
        date,
      },
    },
    { new: true } // This returns the updated document
  );

  if (!updatedBlog) {
    throw new APIError(404, "Failed to update: Blog not found");
  }

  // Send response with the updated blog
  return res
    .status(200)
    .json(new APIResponse(200, updatedBlog, "Blog updated successfully"));
});

//create new blog
const createBlog = asyncHandler(async (req, res) => {
  const { title, date, description } = req.body;
  if ([title, date, description].some((field) => field?.trim() === "")) {
    throw new APIError(400, "all fields are required");
  }

  const avatarlocalpath = req.files?.avatar?.[0]?.path;

  if (!avatarlocalpath) {
    throw new APIError(400, "avatar files is required");
  }

  const avatar = await uploadOnCloudinary(avatarlocalpath);
  // console.log(avatar)

  if (!avatar) {
    throw new APIError(400, "avatar is required");
  }

  const blog = await Blog.create({
    avatar: avatar.url,
    title,
    description,
    date,
  });

  //return response
  return res
    .status(201)
    .json(new APIResponse(200, blog, "blog created successfully"));
});

//delete product
const deleteProduct = asyncHandler(async (req, res) => {
  try {
    const productId = req.params.id;
    await productModel.findByIdAndDelete(productId);
    res.redirect("/shop?success=Product deleted successfully");
  } catch (error) {
    console.error("Error deleting product:", error);
    res.redirect("/shop?error=Failed to delete product");
  }
});
//update product
const updateProduct = asyncHandler(async (req, res) => {
  const { name, price, discount } = req.body;

  if (!name || !price || !discount) {
    throw new APIError(400, "All fields are required");
  }

  const { productId } = req.params;
  console.log("Product ID:", productId); // Logging the blogId for debugging purposes

  // Check if the blog exists
  const productExists = await Product.findById(productId);
  if (!productExists) {
    throw new APIError(404, "Product not found");
  }

  // Update the blog
  const updatedProduct = await Product.findByIdAndUpdate(
    productId,
    {
      $set: {
        name,
        price,
        discount,
      },
    },
    { new: true } // This returns the updated document
  );

  if (!updatedProduct) {
    throw new APIError(404, "Failed to update: Product not found");
  }

  // Send response with the updated blog
  return res
    .status(200)
    .json(new APIResponse(200, updatedProduct, "Product updated successfully"));
});
const getAllBlogs = asyncHandler(async (req, res) => {
  try {
    // Fetch all blog posts from the database
    const blogs = await Blog.find({}).sort({ createdAt: -1 }); // Sorting by creation date, newest first
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ message: "Error fetching blog posts" });
  }
});
const getAllProducts = asyncHandler(async (req, res) => {
  try {
    // Fetch all blog posts from the database
    const products = await Product.find({}).sort({ createdAt: -1 }); // Sorting by creation date, newest first
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Error fetching products posts" });
  }
});
const getAllcontacts = asyncHandler(async (req, res) => {
  try {
    const getcontact = await Contact.find({}).sort({ createdAt: -1 }); // Sorting by creation date, newest first
    res.status(200).json(getcontact);
  } catch (error) {
    res.status(500).json({ message: "Error fetching posts" });
  }
});
const addSlide = asyncHandler(async (req, res) => {
  console.log("Request Body:", req.body);
  console.log("Files:", req.files);

  const { title, description } = req.body;
  if ([title, description].some((field) => field?.trim() === "")) {
    throw new APIError(400, "All fields are required");
  }

  const avatarlocalpath = req.files?.avatar?.[0]?.path;
  console.log("Avatar Local Path:", avatarlocalpath);

  if (!avatarlocalpath) {
    throw new APIError(400, "Avatar file is required");
  }

  const avatar = await uploadOnCloudinary(avatarlocalpath);
  console.log("Avatar Upload Result:", avatar);

  if (!avatar) {
    throw new APIError(400, "Failed to upload avatar");
  }

  const slideData = { avatar: avatar.url, title, description };
  console.log("Slide Input Data:", slideData);

  const slide = await Slide.create(slideData);
  console.log("Slide Creation Result:", slide);

  return res
    .status(201)
    .json(new APIResponse(200, slide, "Slide added successfully"));
});

const getAllSlides = asyncHandler(async (req, res) => {
  try {
    // Fetch all blog posts from the database
    const slide = await Slide.find({}).sort({ createdAt: -1 }); // Sorting by creation date, newest first
    res.status(200).json(slide);
  } catch (error) {
    res.status(500).json({ message: "Error fetching blog posts" });
  }
});
export {
  deleteBlog,
  updateBlog,
  createBlog,
  createProduct,
  deleteProduct,
  updateProduct,
  getAllBlogs,
  getAllProducts,
  getAllcontacts,
  addSlide,
  getAllSlides,
};
