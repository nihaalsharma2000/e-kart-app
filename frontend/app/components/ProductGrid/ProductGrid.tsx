"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import "./ProductGrid.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cartSlice";
import { Product } from "../../types/type";
import { useRouter } from "next/navigation";
import api from "@/customHooks/useAxios";

function ProductGrid() {
  const [products, setProducts] = useState<Product[]>([]);
  const dispatch = useDispatch();
  const router = useRouter();

useEffect(() => {
    const resdata = async () => {
      const productData = await api.get("/api/product");
      console.log(productData.data)
      setProducts(productData.data);
    };
    resdata();
  }, []);

  const handleAddCart = (e: React.MouseEvent, product: Product) => {
    e.stopPropagation();
    dispatch(addToCart(product));
  };

  const handleCardClick = (id: string | number) => {
    router.push(`/shop/${id}`);
  };

  return (
    <div className="product-grid container">
      <h4 className="product-title">Our Products</h4>
      <div className="products">
        {products.map((product) => (
          <div
            className="product-card"
            key={product._id}
            onClick={() => handleCardClick(product._id)}
          >
            <div className="product-image">
              <Image
                 src={`http://localhost:5001${product.product_image}`}
                height={250}
                width={250}
                alt={product.product_name}
                unoptimized
              />
              <button
                className="addbtn"
                onClick={(e) => handleAddCart(e, product)}
              >
                Add to Cart
              </button>
            </div>

            <div className="product-text">
              <p className="product-category">{product.product_category}</p>
              <h6 className="product-name">{product.product_name}</h6>
              <h5 className="price">${product.product_price}</h5>
              <p className="rating">{product.product_rating} / 5</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductGrid;
