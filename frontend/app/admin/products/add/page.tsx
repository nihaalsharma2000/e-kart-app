"use client";

import { useState } from "react";
import styles from "./addProduct.module.css";

export default function AddProduct() {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: "",
    rating: "",
    description: "",
    image: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("New Product Data:", formData);
    // later -> send to backend API (POST /api/products)
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Add New Product</h2>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label>Product Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter product name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className={styles.formGroup}>
          <label>Price ($)</label>
          <input
            type="number"
            name="price"
            placeholder="Enter price"
            value={formData.price}
            onChange={handleChange}
          />
        </div>

        <div className={styles.formGroup}>
          <label>Category</label>
          <input
            type="text"
            name="category"
            placeholder="Enter category"
            value={formData.category}
            onChange={handleChange}
          />
        </div>

        <div className={styles.formGroup}>
          <label>Rating</label>
          <input
            type="number"
            name="stock"
            placeholder="Enter stock quantity"
            value={formData.rating}
            onChange={handleChange}
          />
        </div>

        <div className={styles.formGroup}>
          <label>Image URL</label>
          <input
            type="text"
            name="image"
            placeholder="Enter image URL"
            value={formData.image}
            onChange={handleChange}
          />
        </div>

        <div className={styles.formGroup}>
          <label>Description</label>
          <textarea
            id="text-area"
            name="description"
            placeholder="Enter product description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className={styles.btn}>
          Add Product
        </button>
      </form>
    </div>
  );
}
