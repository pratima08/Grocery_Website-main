import mongoose, { Schema } from "mongoose";

const productSchema = new Schema(
  {
    name: String,
    price: Number,
    discount: {
      type: Number,
      default: 0,
    },
    avatar: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);
export { Product };
