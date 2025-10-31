"use client";
import React, { useEffect, useState } from "react";
import "./blog.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import api from "@/customHooks/useAxios";

function BlogPage() {
  const router = useRouter();
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await api.get("/api/blogs");
      setBlogs(res.data || []);
    };
    fetchBlogs();
  }, []);
  console.log(blogs)
  return (
    <div className="blogpage-wrapper container">
      {blogs.map((blog) => (
        <div className="blogpage-card" key={blog._id}>
          <div className="blogpageimage">
            <Link href={`/blog/${blog._id}`}>
              <Image
                src={`http://localhost:5000${blog.blog_image}`}
                height={300}
                width={480}
                alt={blog.blog_title}
                unoptimized
                className="blogimage"
              />
            </Link>
          </div>
          <div className="blogpage-content">
            <a>{blog.blog_category}</a>
            <h4 onClick={() => router.push(`/blog/${blog._id}`)}>
              {blog.blog_title}
            </h4>
            <p>{blog.blog_description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BlogPage;
