"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import "./ProductGrid.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cartSlice";
import { Product } from "../../types/type";
import { useRouter } from "next/navigation";
import useFetch from "../../customHooks/useFetch";

function ProductGrid() {
  const [products, setProducts] = useState<Product[]>([]);
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
            key={product.id}
            onClick={() => handleCardClick(product.id)}
          >
            <div className="product-image">
              <Image
                src={product.image || ""}
                height={250}
                width={250}
                alt={product.name}
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
              <p className="product-category">{product.category}</p>
              <h6 className="product-name">{product.name}</h6>
              <h5 className="price">${product.price}</h5>
              <p className="rating">{product.rating}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductGrid;
