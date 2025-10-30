"use client";

import React from "react";
import styles from "./layout.module.css";
import AdminSidebar from "./components/AdminSidebar/AdminSidebar";
import AdminNavbar from "./components/AdminNavbar/AdminNavbar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.adminContainer}>
      <aside className={styles.sidebar}>
        <AdminSidebar />
      </aside>

      <div className={styles.mainArea}>
        <header className={styles.navbar}>
          <AdminNavbar />
        </header>

        <main className={styles.content}>{children}</main>
      </div>
    </div>
  );
}
