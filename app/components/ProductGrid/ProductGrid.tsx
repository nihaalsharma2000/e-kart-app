"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import "./ProductGrid.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cartSlice";
import { Product } from "../../types/cart";


function ProductGrid() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch()
  useEffect(() => {
    fetch("/data/product.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);

  const handleAddCart = (product:Product)=>{
    dispatch(addToCart(product))
  }

  return (
    <div className="product-grid container">
      <h4 className="product-title">Our Products</h4>
      <div className="products">
        {products.map((product:Product) => (
          <div className="product-card" key={product.id}>
            <Image
              src={product.image || ""}
              height={250}
              width={250}
              alt="image"
              unoptimized
            />
            <button onClick={()=>handleAddCart(product)} >Add to Cart</button>
            <div className="product-text">
              <p className="product-category">{product.category}</p>
              <h6 className="product-name">{product.name}</h6>
              <h5 className="price">{product.price}</h5>
              <p className="rating">{product.rating}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductGrid;
