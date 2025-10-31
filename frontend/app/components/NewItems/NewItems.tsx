"use client";
import React, { useEffect, useState } from "react";
import "./NewItems.css";
import { useDispatch } from "react-redux";
import { Product } from "../../types/type";
import { addToCart } from "../../store/cartSlice";
import { useRouter } from "next/navigation";
import Image from "next/image";
import api from "@/customHooks/useAxios";
function NewItems() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    const resdata = async () => {
      const productData = await api.get("/api/product");
      console.log(productData.data);
      setProducts(productData.data);
    };
    resdata();
  }, []);

  const handleAddCart = (product: Product) => {
    dispatch(addToCart(product));
  };
  const handleCardClick = (id: string | number) => {
    router.push(`/shop/${id}`);
  };

  const limitedItem = products.slice(0, 4);
  return (
    <div className="newitem-wrapper container">
      <div className="newitem-heading">New Items</div>
      <div className="products">
        {limitedItem.map((product: Product) => (
          <div
            className="product-card"
            key={product._id}
            onClick={() => handleCardClick(product._id)}
          >
            <div className="product-image">
              <Image
                src = {product.product_image || "product-image"}
                height={250}
                width={250}
                alt="image"
                unoptimized
              />
              <button className="addbtn" onClick={() => handleAddCart(product)}>
                Add to Cart
              </button>
            </div>
            <div className="product-text">
              <p className="product-category">{product.product_category}</p>
              <h6 className="product-name">{product.product_name}</h6>
              <h5 className="price">{product.product_price}</h5>
              <p className="rating">{product.product_rating}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewItems;
