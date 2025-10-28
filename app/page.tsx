"use client"
import Image from "next/image";
import Header from "./components/Header/Header";
import Hero from "./components/HeroSection/HeroSection";
import Features from "./components/Features/Features";
import ProductGrid from "./components/ProductGrid/ProductGrid";
import Promotion from "./components/PromotionSection/Promotion";
import { Provider } from "react-redux";
import store from './store/store'
export default function Home() {
  return (
    <div>
      <Provider store={store}>
        <Header />
        <Hero />
        <Features />
        <ProductGrid />
        <Promotion />
      </Provider>
    </div>
  );
}
