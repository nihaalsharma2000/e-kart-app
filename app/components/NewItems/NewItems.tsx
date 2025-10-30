"use client";
import React, { useEffect, useState } from "react";
import "./NewItems.css";
import { useDispatch } from "react-redux";
import { Product } from "../../types/type";
import { addToCart } from "../../store/cartSlice";
import { useRouter } from "next/navigation";
import Image from "next/image";
import useFetch from "../../customHooks/useFetch";
function NewItems() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const router = useRouter();

  const { fetchData } = useFetch();
  useEffect(() => {
    const resdata = async () => {
      const data = await fetchData("/data/product.json");
      setProducts(data);
    };
    resdata();
  }, [fetchData]);

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
            key={product.id}
            onClick={() => handleCardClick(product.id)}
          >
            <div className="product-image">
              <Image
                src={product.image || ""}
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

export default NewItems;
