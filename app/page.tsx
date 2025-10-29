"use client"
import Image from "next/image";
import Header from "./components/Header/Header";
import Hero from "./components/HeroSection/HeroSection";
import Features from "./components/Features/Features";
import ProductGrid from "./components/ProductGrid/ProductGrid";
import Promotion from "./components/PromotionSection/Promotion";

export default function Home() {
  return (
    <>
        <Hero />
        <Features />
        <ProductGrid />
        <Promotion />
    </>
  );
}
