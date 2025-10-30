"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cartSlice";
import "./singleProduct.css";
import { Product } from "../../types/type";
import Link from "next/link";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Pagebar from "../../components/Pagebar/Pagebar";

export default function SingleProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [related, setRelated] = useState<Product[]>([]);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("/data/product.json")
      .then((res) => res.json())
      .then((data: Product[]) => {
        const found = data.find((p) => p.id.toString() === id);
        setProduct(found || null);
        if (found) {
          const rel = data.filter(
            (p) => p.category === found.category && p.id !== found.id
          );
          setRelated(rel.slice(0, 4)); // limit to 4
        }
      })
      .catch((err) => console.error(err));
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      dispatch(addToCart({ ...product, quantity }));
    }
  };

  if (!product) return <p className="loading">Loading product...</p>;

  return (
    <div className="single-product container">
      <Pagebar />
      <div className="product-wrapper">
        <div className="product-left">
          <Image
            src={product.image || ""}
            alt={product.name}
            width={400}
            height={400}
            unoptimized
            className="main-image"
          />
        </div>

        <div className="product-right">
          <h2 className="product-name">{product.name}</h2>
          <h3 className="product-price">${product.price}</h3>
          <p className="product-shortdesc">
            {product.description || "No short description available."}
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
            Category: <span>{product.category}</span>
          </p>
        </div>
      </div>

      <div className="product-description">
        <h4>Description</h4>
        <p>{product.description}</p>
      </div>

      {related.length > 0 && (
        <div className="related-section">
          <h4>Related Products</h4>
          <div className="related-grid">
            {related.map((rel) => (
              <Link href={`/shop/${rel.id}`} key={rel.id}>
                <div className="related-card">
                  <Image
                    src={rel.image || ""}
                    alt={rel.name}
                    width={200}
                    height={200}
                    unoptimized
                  />
                  <h6>{rel.name}</h6>
                  <p>${rel.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
