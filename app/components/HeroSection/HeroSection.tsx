"use client";

import React from "react";
import "./HeroSection.css";
import Image from "next/image";
import { DriveFileMove } from "@mui/icons-material";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-bg">
        <Image
          src="/bg-hero.png"
          alt="Essential oils background"
          fill
          priority
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
      </div>

      <div className="hero-content container">
        <div className="left-side-content">
          <p className="hero-subtitle">OILS STORE</p>
          <h1 className="hero-title">WELL-BEING AT YOUR DOORSTEP</h1>
          <p className="hero-text">
            Nam congue ut leo non tincidunt quisque non tortor eros duis sed ex
            lacus aliquam nec venenatis arcu. Nulla nec lacinia quam vivamus a
            justo mi porta sem sit amet ornare.
          </p>
          <button className="hero-btn">DISCOVER OUR OILS</button>
        </div>
        <div className="right-side-content">

        </div>
      </div>
    </section>
  );
};

export default Hero;
