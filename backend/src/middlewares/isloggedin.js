import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";

export default async function (req, res, next) {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ message: "You need to login first" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_KEY);
    const user = await User.findOne({ email: decoded.email }).select(
      "-password"
    );
    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Something went wrong" });
  }
}
