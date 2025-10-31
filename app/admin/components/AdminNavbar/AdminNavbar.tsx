"use client";
import styles from "./AdminNavbar.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

type AdminNavbarProps = {
  toggleSidebar: () => void;
  isSidebarOpen: boolean;
};

export default function AdminNavbar({
  toggleSidebar,
  isSidebarOpen,
}: AdminNavbarProps) {
  return (
    <header className={styles.navbar}>
      <button onClick={toggleSidebar} className={styles.menuButton}>
        {isSidebarOpen ? <CloseIcon /> : <MenuIcon />}
      </button>
      <h1 className={styles.title}>Admin Panel</h1>
    </header>
  );
}
