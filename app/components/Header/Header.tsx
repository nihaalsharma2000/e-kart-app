"use client";

import React, { useContext } from "react";
import "./Header.css";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import Image from "next/image";
import ThemeContext from "../../context/ThemeContext";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { ToggleButton } from "@mui/material";
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";
import { CartItem } from "../../types/cart";


const Header = () => {
  const router = useRouter();
  const { theme, toggleTheme } = useContext(ThemeContext)!;
  const cartItems = useSelector((state:CartItem) => state.cart.items)
  const cartCount = cartItems.reduce((total: number, item: { quantity: number; }) => total + item.quantity, 0)

  return (
    <header>
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
            <a onClick={()=>router.push('/')}>
              HOMEPAGE
            </a>
            <a onClick={()=>router.push('/shop')}>SHOP</a>
            <a onClick={()=>router.push('/blog')} >BLOG</a>
            <a onClick={()=>router.push('/contact')}>CONTACT</a>
            <a onClick={()=>router.push('/account')}>MY ACCOUNT</a>

            <ToggleButton sx={{borderRadius:"50px"}} value="check" selected={theme === "dark"} onClick={toggleTheme}>
              {theme === "dark" ? <LightModeOutlined style={{color:'white'}} />:<DarkModeOutlined style={{color:"black"}} /> }
            </ToggleButton>
          </nav>

          <div className="cart-icon" onClick={() => { router.push('/cart') }}>
            <ShoppingBagOutlinedIcon />
            <span className="cart-count">{cartCount}</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
