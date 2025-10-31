import { Router } from "express";
import {
  createBlog,
  deleteBlog,
  getAllBlog,
  getSingleBlog,
  updateBlog,
} from "../controllers/blogController";

const router = Router();

router.get("/blog", getAllBlog);
router.get("/blog/:id", getSingleBlog);
router.post("/addblog", createBlog);
router.put("/updateblog/:id", updateBlog);
router.delete("/deleteblog/:id", deleteBlog);

export default router;
