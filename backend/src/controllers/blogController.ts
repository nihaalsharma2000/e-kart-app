import { Request, Response } from "express";
import Blog from "../model/blog";

export const getAllBlog = async (req: Request, res: Response) => {
  try {
    const blog = await Blog.find();
    res.status(200).json(Blog);
  } catch (error) {
    console.error("Error getting Blog:", error);
    res
      .status(500)
      .json({ success: false, message: "Failed to create Blog." });
    process.exit(1);
  }
};
export const getSingleBlog = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findById(id);
    res.status(200).json(Blog);
  } catch (error) {
    console.error("Error getting single Blog Blog:", error);
    res
      .status(500)
      .json({ success: false, message: "Failed to create Blog." });
    process.exit(1);
  }
};
export const createBlog = async (req: Request, res: Response) => {
  try {
    const {
      blog_title,
      blog_author,
      blog_description,
    } = req.body;
    const blog = await Blog.create({
      blog_title,
      blog_author,
      blog_description,
    });
    blog.save();
    res.status(201).json({ msg: "Blog created successfully" });
  } catch (error) {
    console.error("Error creating Blog:", error);
    res
      .status(500)
      .json({ success: false, message: "Failed to create Blog." });
    process.exit(1);
  }
};
export const updateBlog = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const blog = await Blog.findByIdAndUpdate(id, body, { new: true });
    return res.json({ msg: "Blog updated sucessfully" });
  } catch (error) {
    console.error("Error updating Blog:", error);
    res
      .status(500)
      .json({ success: false, message: "Failed to update Blog." });
    process.exit(1);
  }
};
export const deleteBlog = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const blog = await Blog.findByIdAndDelete(id);
    return res.json({ msg: "Blog deleted sucessfully" });
  } catch (error) {
    console.error("Error deleting Blog:", error);
    res
      .status(500)
      .json({ success: false, message: "Failed to delete Blog." });
    process.exit(1);
  }
};
