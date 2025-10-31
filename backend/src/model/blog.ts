import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    blog_title: {
      type: String,
      required: true,
    },
    blog_author: {
      type: String,
      required: true,
    },
    blog_image: {
      type: String,
      // required: true,
    },
    blog_description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const Blog = mongoose.model("blog", blogSchema);
export default Blog;
