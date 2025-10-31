"use client";
import styles from "./AdminSidebar.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

type AdminSidebarProps = {
  isOpen: boolean;
};

export default function AdminSidebar({ isOpen }: AdminSidebarProps) {
  const pathname = usePathname();

  return (
    <aside
      className={`${styles.sidebar} ${isOpen ? styles.open : styles.closed}`}
    >
      <div className={styles.logo}>🧩 Admin</div>
      <nav className={styles.nav}>
        <Link
          href="/admin"
          className={`${styles.link} ${
            pathname === "/admin" ? styles.active : ""
          }`}
        >
          Dashboard
        </Link>
        <Link
          href="/admin/products"
          className={`${styles.link} ${
            pathname.startsWith("/admin/products") ? styles.active : ""
          }`}
        >
          Products
        </Link>
        <Link
          href="/admin/blogs"
          className={`${styles.link} ${
            pathname.startsWith("/admin/blogs") ? styles.active : ""
          }`}
        >
          Blogs
        </Link>
        <Link
          href="/admin/users"
          className={`${styles.link} ${
            pathname.startsWith("/admin/users") ? styles.active : ""
          }`}
        >
          Users
        </Link>
      </nav>
    </aside>
  );
}
