"use client";

import React, { useContext } from "react";
import "./Header.css";
import TopBar from "./Topbar";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import Image from "next/image";
import ThemeContext from "../../context/ThemeContext";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { ToggleButton } from "@mui/material";
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";


const Header = () => {
  const Router = useRouter();
  const { theme, toggleTheme } = useContext(ThemeContext)!;
  const cartItems = useSelector((state) => state.cart.items)
  const cartCount = cartItems.reduce((total: any, item: { quantity: any; }) => total + item.quantity, 0)

  return (
    <header>
      <TopBar />

      <div className="navbar container">
        <div className="logo">
          <Image
            src="/elogo.png"
            alt="Essential Logo"
            width={250}
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

            <ToggleButton sx={{borderRadius:"50px"}} value="check" selected={theme === "dark"} onClick={toggleTheme}>
              {theme === "dark" ? <LightModeOutlined style={{color:'white'}} />:<DarkModeOutlined style={{color:"black"}} /> }
            </ToggleButton>
          </nav>

          <div className="cart-icon" onClick={() => { Router.push('/cart') }}>
            <ShoppingBagOutlinedIcon />
            <span className="cart-count">{cartCount}</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
