/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./page.module.css";
import axios from "axios";

interface Product {
  _id: string;
  product_name: string;
  product_price: number;
  product_category: string;
  product_rating: number;
  product_image: string;
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    axios.get("http://localhost:5001/api/product")
      .then(res => setProducts(res.data))
      .catch(err => console.error("Error fetching products:", err));
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Products</h2>
        <Link href="/admin/products/add" className={styles.addBtn}>
          + Add Product
        </Link>
      </div>

      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Product Name</th>
              <th>Category</th>
              <th>Price ($)</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p, i) => (
              <tr key={p._id}>
                <td>{i + 1}</td>
                <td>
                  <img
                    src={`http://localhost:5001${p.product_image}`}
                    alt={p.product_name}
                    width={60}
                    height={60}
                    style={{ borderRadius: "6px", objectFit: "cover" }}
                  />
                </td>
                <td>{p.product_name}</td>
                <td>{p.product_category}</td>
                <td>{p.product_price}</td>
                <td>{p.product_rating}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
