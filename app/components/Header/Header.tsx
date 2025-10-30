"use client";

import React, { useContext, useState } from "react";
import "./Header.css";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import Image from "next/image";
import ThemeContext from "../../context/ThemeContext";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { ToggleButton } from "@mui/material";
import { DarkModeOutlined, LightModeOutlined, Menu, Close } from "@mui/icons-material";
import { RootState } from "../../store/store";

const Header = () => {
  const router = useRouter();
  const { theme, toggleTheme } = useContext(ThemeContext)!;
  const [menuOpen, setMenuOpen] = useState(false);
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const cartCount = cartItems.reduce(
    (total: number, item: { quantity: number }) => total + item.quantity,
    0
  );

  const handleNavClick = (path: string) => {
    router.push(path);
    setMenuOpen(false); 
  };

  return (
    <header>
      <div className="navbar container">
        <div className="logo">
          <Image
            onClick={() => router.push("/")}
            src={theme === "dark" ? "/elogo-white.png" : "/elogo.png"}
            alt="Essential Logo"
            width={250}
            height={40}
            priority
          />
        </div>

        <div className="nav-right">
          <nav className="nav-links">
            <a onClick={() => handleNavClick("/")}>HOMEPAGE</a>
            <a onClick={() => handleNavClick("/shop")}>SHOP</a>
            <a onClick={() => handleNavClick("/blog")}>BLOG</a>
            <a onClick={() => handleNavClick("/contact")}>CONTACT</a>
            <a onClick={() => handleNavClick("/account")}>MY ACCOUNT</a>
          </nav>

          <ToggleButton
            sx={{ borderRadius: "50px" }}
            value="check"
            selected={theme === "dark"}
            onClick={toggleTheme}
          >
            {theme === "dark" ? (
              <LightModeOutlined style={{ color: "white" }} />
            ) : (
              <DarkModeOutlined style={{ color: "black" }} />
            )}
          </ToggleButton>

          <div
            className="cart-icon"
            onClick={() => router.push("/cart")}
          >
            <ShoppingBagOutlinedIcon />
            <span className="cart-count">{cartCount}</span>
          </div>
          <button className="menu-toggle" onClick={() => setMenuOpen(true)}>
            <Menu />
          </button>
        </div>
      </div>

      <div className={`mobile-sidebar ${menuOpen ? "active" : ""}`}>
        <button className="close-btn" onClick={() => setMenuOpen(false)}>
          <Close />
        </button>
        <nav className="mobile-links">
          <a onClick={() => handleNavClick("/")}>HOMEPAGE</a>
          <a onClick={() => handleNavClick("/shop")}>SHOP</a>
          <a onClick={() => handleNavClick("/blog")}>BLOG</a>
          <a onClick={() => handleNavClick("/contact")}>CONTACT</a>
          <a onClick={() => handleNavClick("/account")}>MY ACCOUNT</a>
        </nav>
        <div className="mobile-actions">
          <ToggleButton
            sx={{ borderRadius: "50px" }}
            value="check"
            selected={theme === "dark"}
            onClick={toggleTheme}
          >
            {theme === "dark" ? (
              <LightModeOutlined style={{ color: "white" }} />
            ) : (
              <DarkModeOutlined style={{ color: "black" }} />
            )}
          </ToggleButton>

          <div
            className="cart-icon"
            onClick={() => handleNavClick("/cart")}
          >
            <ShoppingBagOutlinedIcon />
            <span className="cart-count">{cartCount}</span>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {menuOpen && <div className="overlay" onClick={() => setMenuOpen(false)}></div>}
    </header>
  );
};

export default Header;
