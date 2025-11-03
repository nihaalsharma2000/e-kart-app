// src/controllers/blogController.ts
import { Request, Response } from "express";
import Blog from "../models/blog";

export const getAllBlog = async (_req: Request, res: Response) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  } catch (error) {
    console.error("Error getting blogs:", error);
    res.status(500).json({ success: false, message: "Failed to fetch blogs." });
  }
};

export const getSingleBlog = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findById(id);
    res.status(200).json(blog);
  } catch (error) {
    console.error("Error getting single blog:", error);
    res.status(500).json({ success: false, message: "Failed to fetch blog." });
  }
};

export const createBlog = async (req: Request, res: Response) => {
  try {
    const { blog_title, blog_author, blog_description } = req.body;
    const imagePath = req.file ? `/uploads/${req.file.filename}` : null;

    const blog = await Blog.create({
      blog_title,
      blog_author,
      blog_description,
      blog_image: imagePath,
    });

    res.status(201).json({ msg: "Blog created successfully", blog });
  } catch (error) {
    console.error("Error creating blog:", error);
    res.status(500).json({ success: false, message: "Failed to create blog." });
  }
};

export const updateBlog = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const body = req.body;

    const updatedBlog = await Blog.findByIdAndUpdate(id, body, { new: true });
    res.json({ msg: "Blog updated successfully", updatedBlog });
  } catch (error) {
    console.error("Error updating blog:", error);
    res.status(500).json({ success: false, message: "Failed to update blog." });
  }
};

export const deleteBlog = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await Blog.findByIdAndDelete(id);
    res.json({ msg: "Blog deleted successfully" });
  } catch (error) {
    console.error("Error deleting blog:", error);
    res.status(500).json({ success: false, message: "Failed to delete blog." });
  }
};
