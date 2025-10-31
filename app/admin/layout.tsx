"use client";

import React, { useState } from "react";
import AdminSidebar from "./components/AdminSidebar/AdminSidebar";
import AdminNavbar from "./components/AdminNavbar/AdminNavbar";
import styles from "./layout.module.css";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  return (
    <div className={styles.adminLayout}>
      <AdminSidebar isOpen={isSidebarOpen} />
      <div className={styles.mainContent}>
        <AdminNavbar
          toggleSidebar={toggleSidebar}
          isSidebarOpen={isSidebarOpen}
        />
        <main className={styles.pageContent}>{children}</main>
      </div>
      {/* Backdrop when sidebar open (for mobile) */}
      {isSidebarOpen && (
        <div
          className={styles.backdrop}
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
}
