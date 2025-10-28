"use client";

import React, { useContext } from "react";
import "./Header.css";
import TopBar from "./Topbar";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import Image from "next/image";
import ThemeContext from "../../context/ThemeContext";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

interface HeaderProps {
  cartCount?: number;
}

const Header: React.FC<HeaderProps> = () => {
  const Router = useRouter();
  const { theme, toggleTheme } = useContext(ThemeContext)!;
  const cartItems = useSelector((state)=>state.cart.items)
  const cartCount = cartItems.reduce((total,item)=> total + item.quantity,0)

  return (
    <header>
      <TopBar />

      <div className="navbar container">
        <div className="logo">
          <Image
            src="/elogo.png"
            alt="Essential Logo"
            width={160}
            height={40}
            priority
          />
        </div>

        <div className="nav-right">
          <nav className="nav-links">
            <a href="#" className="active">
              HOMEPAGE
            </a>
            <a href="#">SHOP</a>
            <a href="#">BLOG</a>
            <a href="#">CONTACT</a>
            <a href="#">MY ACCOUNT</a>

            <button onClick={toggleTheme} className="themebtn">
              Switch to {theme === "light" ? "dark" : "light"}
            </button>
          </nav>

          <div className="cart-icon" onClick={ ()=> { Router.push('/cart')}}>
            <ShoppingBagOutlinedIcon />
            <span className="cart-count">{cartCount}</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
