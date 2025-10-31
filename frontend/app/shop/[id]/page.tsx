"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cartSlice";
import "./singleProduct.css";
import { Product } from "../../types/type";
import Link from "next/link";
import Pagebar from "../../components/Pagebar/Pagebar";
import useFetch from "../../customHooks/useFetch";
import api from "@/customHooks/useAxios";

export default function SingleProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [related, setRelated] = useState<Product[]>([]);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

 useEffect(() => {
    const resdata = async () => {
      const productData = await api.get(`/api/product/${id}`);
      console.log(productData.data)
      setProduct(productData.data);
    };
    resdata();
  }, []);

  
    // const { fetchData } = useFetch();
    // useEffect(() => {
    //   const resdata = async () => {
    //     const data = await fetchData("/data/blogs.json");
    //     const current = data.find((item: BlogPost) => String(item.id) === id);
    //     setBlog(current);
    //     const related = data
    //       .filter((item: BlogPost) => String(item.id) !== id)
    //       .slice(0, 3);
    //     setRelatedBlogs(related);
    //   };
    //   resdata();
    // }, [id, fetchData]);
  

  const handleAddToCart = () => {
    if (product) {
      dispatch(addToCart({ ...product, quantity }));
    }
  };

  if (!product) return <p className="loading">Loading product...</p>;

  return (
    <div className="single-product container">
      
      <div className="product-wrapper">
        <div className="product-left">
          <Image
            src={product.product_image || ""}
            alt={product.product_name}
            width={400}
            height={400}
            unoptimized
            className="main-image"
          />
        </div>

        <div className="product-right">
          <h2 className="product-name">{product.product_name}</h2>
          <h3 className="product-price">${product.product_price}</h3>
          <p className="product-shortdesc">
            {product.product_description || "No short description available."}
          </p>

          <div className="quantity-box">
            <button onClick={() => setQuantity((q) => Math.max(1, q - 1))}>
              -
            </button>
            <span>{quantity}</span>
            <button onClick={() => setQuantity((q) => q + 1)}>+</button>
            <div></div>
          </div>

          <button className="add-cart-btn" onClick={handleAddToCart}>
            ADD TO CART
          </button>

          <p className="product-category">
            Category: <span>{product.product_category}</span>
          </p>
        </div>
      </div>

      <div className="product-description">
        <h4>Description</h4>
        <p>{product.product_description}</p>
      </div>

      {related.length > 0 && (
        <div className="related-section">
          <h4>Related Products</h4>
          <div className="related-grid">
            {related.map((rel) => (
              <Link href={`/shop/${rel._id}`} key={rel._id}>
                <div className="related-card">
                  <Image
                    src={rel.product_image || ""}
                    alt={rel.product_name}
                    width={200}
                    height={200}
                    unoptimized
                  />
                  <h6>{rel.product_name}</h6>
                  <p>${rel.product_price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
