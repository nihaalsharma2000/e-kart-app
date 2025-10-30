import React from "react";
import Hero from "../HeroSection/HeroSection";
import Features from "../Features/Features";
import ProductGrid from "../ProductGrid/ProductGrid";
import Promotion from "../PromotionSection/Promotion";
import NewItems from "../NewItems/NewItems";
import Testimonial from "../Testimonial/Testimonial";
import Blog from "@/components/BlogSection/Blog"

const HomePage = () => {
  
  return (
    <>
      <Hero />
      <Features />
      <ProductGrid />
      <Promotion />
      <NewItems />
      <Testimonial />
      <Blog />
    </>
  );
};

export default HomePage;
