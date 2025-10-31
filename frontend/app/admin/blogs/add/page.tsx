"use client";

import { useState } from "react";
import styles from "./addBlog.module.css";
import api from "@/customHooks/useAxios";
import { useRouter } from "next/navigation";

export default function AddBlog() {
  const [formData, setFormData] = useState({
    blog_title: "",
    blog_author: "",
    blog_description: "",
    image: null as File | null,
  });

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    setFormData({ ...formData, image: file });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const data = new FormData();
    data.append("blog_title", formData.blog_title);
    data.append("blog_author", formData.blog_author);
    data.append("blog_description", formData.blog_description);
    if (formData.image) data.append("image", formData.image);

    await api.post("/api/addblog", data, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    router.push("/admin/blogs");
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Add New Blog</h2>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label>Blog Title</label>
          <input
            type="text"
            name="blog_title"
            value={formData.blog_title}
            onChange={handleChange}
          />
        </div>

        <div className={styles.formGroup}>
          <label>Author</label>
          <input
            type="text"
            name="blog_author"
            value={formData.blog_author}
            onChange={handleChange}
          />
        </div>

        <div className={styles.formGroup}>
          <label>Description</label>
          <textarea
            name="blog_description"
            value={formData.blog_description}
            onChange={handleChange}
          />
        </div>

        <div className={styles.formGroup}>
          <label>Image</label>
          <input type="file" name="image" onChange={handleFileChange} />
        </div>

        <button type="submit" className={styles.btn}>
          Add Blog
        </button>
      </form>
    </div>
  );
}
