/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./page.module.css";
import api from "@/customHooks/useAxios";

export default function BlogsPage() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await api.get("/api/blog");
      setBlogs(Array.isArray(res.data) ? res.data : []);
    };
    fetchBlogs();
  }, []);

  const handleDelete = async (id: string) => {
    await api.delete(`/api/deleteblog/${id}`);
    setBlogs((prev) => prev.filter((b: any) => b._id !== id));
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Blogs</h2>
        <Link href="/admin/blogs/add" className={styles.addBtn}>
          + Add Blog
        </Link>
      </div>

      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Title</th>
              <th>Author</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(blogs) && blogs.length > 0 ? (
              blogs.map((blog: any, i: number) => (
                <tr key={blog._id}>
                  <td>{i + 1}</td>
                  <td>
                    {blog.blog_image && (
                      <img
                        src={`http://localhost:5001${blog.blog_image}`}
                        alt="Blog"
                        className={styles.thumb}
                        width={60}
                        height={60}
                      />
                    )}
                  </td>
                  <td>{blog.blog_title}</td>
                  <td>{blog.blog_author}</td>
                  <td>{blog.blog_description.slice(0, 60)}...</td>
                  <td>
                    <button
                      className={styles.deleteBtn}
                      onClick={() => handleDelete(blog._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} style={{ textAlign: "center" }}>
                  No blogs found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
