"use client";
import Image from "next/image";
import Header from "./components/Header/Header";
import Hero from "./components/HeroSection/HeroSection";
import Features from "./components/Features/Features";
import ProductGrid from "./components/ProductGrid/ProductGrid";
import Promotion from "./components/PromotionSection/Promotion";
import NewItems from "./components/NewItems/NewItems";
import Testimonial from "./components/Testimonial/Testimonial";
import Blog from "./components/BlogSection/Blog";

export default function Home() {
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
}
