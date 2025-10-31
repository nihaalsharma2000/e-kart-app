"use client";

import React, { useEffect, useState } from "react";
import "./ScrollToTop.css";
import { ArrowUpward } from "@mui/icons-material";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <button className="scroll-to-top" onClick={scrollToTop} aria-label="Scroll to top">
      <ArrowUpward  />
    </button>
  );
};

export default ScrollToTop;
