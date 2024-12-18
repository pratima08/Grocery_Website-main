import dotenv from "dotenv";
import connectDB from "./db/user.db.js";
import { app } from "./app.js"; // Assuming app.js exports app

dotenv.config({ path: "./.env" }); // Load environment variables from .env

const startServer = async () => {
  try {
    // Connect to MongoDB
    await connectDB();

    const PORT = process.env.PORT || 2024; // Set default port if not in .env
    app.listen(PORT, () => {
      console.log(`Server is running at port: ${PORT}`);
    });
  } catch (err) {
    console.error("MongoDB connection failed!!!", err);
    process.exit(1); // Exit the process with failure code
  }
};

startServer();
