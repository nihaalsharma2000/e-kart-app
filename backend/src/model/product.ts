import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    product_name: {
      type: String,
      required: true,
    },
    product_category: {
      type: String,
      required: true,
    },
    product_price: {
      type: Number,
      required: true,
    },
    product_rating: {
      type: Number,
      required: true,
    },
    product_image: {
      type: String,
      required: true,
    },
    product_description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const Product = mongoose.model("product", productSchema);
export default Product;
