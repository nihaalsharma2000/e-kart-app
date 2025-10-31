"use client";
import Link from "next/link";
import styles from "./page.module.css";
import { useState } from "react";

export default function ProductsPage() {
  const [products, setProducts] = useState([
    { id: 1, name: "Wireless Mouse", price: 29.99, category: "oil", rating: 4.5 },
    { id: 2, name: "Mechanical Keyboard", price: 89.99, category: "oil", rating: 4.5 },
    { id: 3, name: "Gaming Headset", price: 49.99, category: "oil", rating: 4.5 },
  ]);

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
              <th>Product Name</th>
              <th>Price ($)</th>
              <th>Stock</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p, i) => (
              <tr key={p.id}>
                <td>{i + 1}</td>
                <td>{p.name}</td>
                <td>{p.price}</td>
                <td>{p.category}</td>
                <td>{p.rating}</td>
                <td>
                  <Link href={`/admin/products/${p.id}/edit`} className={styles.editBtn}>
                    Edit
                  </Link>
                  <button
                    className={styles.deleteBtn}
                    onClick={() => setProducts(products.filter((x) => x.id !== p.id))}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
