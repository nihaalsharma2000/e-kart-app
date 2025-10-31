"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity, clearCart } from "../store/cartSlice";
import "./Cart.css";
import Pagebar from "../components/Pagebar/Pagebar";

const CartPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const cartItems = useSelector((state: any) => state.cart.items);

  const handleQuantityChange = (id: string | number, increment: boolean) => {
    dispatch(
      updateQuantity({
        id,
        quantity: increment
          ? cartItems.find((item) => item.id === id)!.quantity + 1
          : Math.max(1, cartItems.find((item) => item.id === id)!.quantity - 1),
      })
    );
  };

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (!cartItems.length) {
    return (
      <div className="cart-page container">
        <h2>Your Cart</h2>
        <p className="empty-cart">Your cart is empty...</p>
        <button onClick={() => router.push("/")}>Go Shopping</button>
      </div>
    );
  }

  return (
    <div className="cart-page container">
      <div className="cart-header">
        <h2>Your Cart</h2>
        <button onClick={() => router.push("/")}>Back to Home</button>
      </div>

      {cartItems.map((item) => (
        <div className="cart-item" key={item.id}>
          <Image src={item.image} alt={item.name} width={80} height={80} unoptimized />

          <div className="cart-item-info">
            <h4>{item.name}</h4>
            <p>${item.price}</p>

            <div className="quantity-controls">
              <button onClick={() => handleQuantityChange(item.id, false)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => handleQuantityChange(item.id, true)}>+</button>
            </div>
          </div>

          <button className="remove-btn" onClick={() => dispatch(removeFromCart(item.id))}>
            Remove
          </button>
        </div>
      ))}

      <div className="cart-summary">
        <h3>Total: ${totalPrice.toFixed(2)}</h3>
        <button className="clear-btn" onClick={() => dispatch(clearCart())}>Clear Cart</button>
        <button className="checkout-btn">Checkout</button>
      </div>
    </div>
  );
};

export default CartPage;
