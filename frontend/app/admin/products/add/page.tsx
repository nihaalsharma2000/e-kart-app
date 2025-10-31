"use client";

import { useState } from "react";
import styles from "./addProduct.module.css";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function AddProduct() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    product_name: "",
    product_price: "",
    product_category: "",
    product_rating: "",
    product_description: "",
  });

  const [image, setImage] = useState<File | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const data = new FormData();
    data.append("product_name", formData.product_name);
    data.append("product_category", formData.product_category);
    data.append("product_price", formData.product_price);
    data.append("product_rating", formData.product_rating);
    data.append("product_description", formData.product_description);
    if (image) data.append("image", image);

    try {
      await axios.post("http://localhost:5001/api/addproduct", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("✅ Product added successfully!");
      router.push("/admin/products");
    } catch (error) {
      console.error("Error uploading product:", error);
      alert("❌ Failed to add product");
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Add New Product</h2>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label>Product Name</label>
          <input
            type="text"
            name="product_name"
            value={formData.product_name}
            onChange={handleChange}
            placeholder="Enter product name"
          />
        </div>

        <div className={styles.formGroup}>
          <label>Price ($)</label>
          <input
            type="number"
            name="product_price"
            value={formData.product_price}
            onChange={handleChange}
            placeholder="Enter price"
          />
        </div>

        <div className={styles.formGroup}>
          <label>Category</label>
          <input
            type="text"
            name="product_category"
            value={formData.product_category}
            onChange={handleChange}
            placeholder="Enter category"
          />
        </div>

        <div className={styles.formGroup}>
          <label>Rating</label>
          <input
            type="number"
            name="product_rating"
            value={formData.product_rating}
            onChange={handleChange}
            placeholder="Enter rating"
          />
        </div>

        <div className={styles.formGroup}>
          <label>Image</label>
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </div>

        <div className={styles.formGroup}>
          <label>Description</label>
          <textarea
            name="product_description"
            value={formData.product_description}
            onChange={handleChange}
            placeholder="Enter product description"
          />
        </div>

        <button type="submit" className={styles.btn}>
          Add Product
        </button>
      </form>
    </div>
  );
}
