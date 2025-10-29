"use client";

import React from "react";
import "./Promotion.css";
import Image from "next/image";

const Promotion = () => {
  return (
    <section className="hero">
      <div className="hero-bg">
        <Image
          src="/bg-hero-2.png"
          alt="Essential oils background"
          fill
          priority
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
      </div>

      <div className="hero-content-promotion container">
        <div className="left-side-content"></div>
        <div className="right-side-content">
          <p className="hero-subtitle">Big summer promotion</p>
          <h1 className="hero-title">Best Oils you can find</h1>
          <p className="hero-text">
          Etiam nisi neque, cursus in augue molestie, auctor iaculis ligula. Duis vitae volutpat nibh, ac vestibulum dolor. Ut sodales fringilla neque at mollis. Quisque vitae enim velit. Integer non consectetur dui. Etiam eget turpis et erat malesuada venenatis. Nam augue lorem, aliquet ut tellus vitae.
          </p>
          <button className="hero-btn">SHOP NOW</button>
          <button className="hero-btn-2">Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default Promotion;
