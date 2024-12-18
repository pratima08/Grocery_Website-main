import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import path from "path";
import corsMiddleware from "./middlewares/cors.middleware.js";
import { fileURLToPath } from "url"; // Needed for ES modules
import helmet from "helmet"; // Adds security headers to your app

dotenv.config({ path: "./.env" });

const app = express();

// Function to get __dirname equivalent in ES module
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// CORS configuration
app.use(corsMiddleware);

// Middleware for handling JSON requests and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Adding Helmet for added security
app.use(helmet());

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, "public")));

// Middleware for parsing cookies
app.use(cookieParser());

// Example user routes (make sure to import your actual routes)
import userRouter from "./routes/user.route.js";
import adminRouter from "./routes/admin.route.js";

app.use("/api/users", userRouter);
app.use("/api/admin", adminRouter);

// Generic error handling middleware (added at the end of all routes)
app.use((err, req, res, next) => {
  console.error(err.stack); // Log errors for debugging
  res.status(500).json({
    message: "Something went wrong on the server!",
    error: err.message,
  });
});

export { app };
