import { Request, Response } from "express";
import Product from "../model/product";

export const getAllProduct = async (req: Request, res: Response) => {
  try {
    const product = await Product.find();
    res.status(200).json(product);
  } catch (error) {
    console.error("Error getting product:", error);
    res
      .status(500)
      .json({ success: false, message: "Failed to create product." });
    process.exit(1);
  }
};
export const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    console.error("Error getting single product product:", error);
    res
      .status(500)
      .json({ success: false, message: "Failed to create product." });
    process.exit(1);
  }
};
export const createProduct = async (req: Request, res: Response) => {
  try {
    const {
      product_name,
      product_category,
      product_price,
      product_rating,
      product_description,
    } = req.body;

    const imagePath = req.file ? `/uploads/${req.file.filename}` : null;

    const product = await Product.create({
      product_name,
      product_category,
      product_price,
      product_rating,
      product_description,
      product_image: imagePath,
    });

    res.status(201).json({
      success: true,
      message: "Product created successfully",
      product,
    });
  } catch (error) {
    console.error("Error creating product:", error);
    res.status(500).json({ success: false, message: "Failed to create product." });
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const product = await Product.findByIdAndUpdate(id, body, { new: true });
    return res.json({ msg: "product updated sucessfully" });
  } catch (error) {
    console.error("Error updating product:", error);
    res
      .status(500)
      .json({ success: false, message: "Failed to update product." });
    process.exit(1);
  }
};
export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const product = await Product.findByIdAndDelete(id);
    return res.json({ msg: "product deleted sucessfully" });
  } catch (error) {
    console.error("Error deleting product:", error);
    res
      .status(500)
      .json({ success: false, message: "Failed to delete product." });
    process.exit(1);
  }
};
