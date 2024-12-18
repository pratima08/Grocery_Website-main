import express from "express";
import { upload } from "../middlewares/multer.js";
import isLoggedin from "../middlewares/isloggedin.js";
import {
  registerUser,
  loginUser,
  logoutUser,
  updateAccount,
  deletAccount,
  contactUs,
  mainPage,
  addCart,
  deleteCart,
} from "../controllers/user.controller.js";

const router = express.Router();

// Route for user registration, using `upload` middleware to handle avatar upload
router.post("/register", registerUser);

// Login and logout routes
router.post("/login", isLoggedin, loginUser);
router.post("/logout", isLoggedin, logoutUser);

// Optional: Add routes for other features (uncomment if needed)
router.put("/account", isLoggedin, updateAccount);
router.delete("/account", isLoggedin, deletAccount);
router.post("/contact", isLoggedin, contactUs);
router.get("/", mainPage);
router.post("/cart", isLoggedin, addCart);
router.delete("/cart", isLoggedin, deleteCart);

export default router;
