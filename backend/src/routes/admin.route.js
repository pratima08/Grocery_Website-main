import express from "express";
import { upload } from "../middlewares/multer.js";
import { isAdmin } from "../middlewares/isadmin.js";
import {
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
} from "../controllers/admin.controller.js";

const router = express.Router();

//Get all products
router.get("/products", getAllProducts);
// GET all blog posts
router.get("/blogs", getAllBlogs);

router.route("/create-blog").post(
  upload.fields([
    {
      name: "avatar",
      maxCount: 5,
    },
  ]),
  createBlog
);

router.post("/update-blog", isAdmin, updateBlog);
router.post("/delete-blog", isAdmin, deleteBlog);

//Products Route
router.post(
  "/create-product",
  upload.fields([
    {
      name: "avatar",
      maxCount: 5,
    },
  ]),
  createProduct
);
router.post("/update-product", isAdmin, updateProduct);
router.post("/delete-product", isAdmin, deleteProduct);
router.get("/getallcontacts", getAllcontacts);
router.post("/add-slide", addSlide);
router.get("/getslides", getAllSlides);

export default router;
