// src/routes/blogRoutes.ts
import { Router } from "express";
import {
  createBlog,
  deleteBlog,
  getAllBlog,
  getSingleBlog,
  updateBlog,
} from "../controllers/blogController";
import upload from "../utils/multer";

const router = Router();

router.get("/blog", getAllBlog);
router.get("/blog/:id", getSingleBlog);
router.post("/addblog", upload.single("image"), createBlog); 
router.put("/updateblog/:id", updateBlog);
router.delete("/deleteblog/:id", deleteBlog);

export default router;
