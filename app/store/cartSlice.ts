"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { Product, CartItem } from "../types/cart";

const loadItems = (): CartItem[] => {
  if (typeof window !== "undefined") {
    const saved = localStorage.getItem("cartItems");
    return saved ? JSON.parse(saved) : [];
  }
  return [];
};

const initialState: { items: CartItem[] } = {
  items: loadItems(),
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const item = action.payload;
      const existing = state.items.find((cartItem) => cartItem.id === item.id);

      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...item, quantity: 1 });
      }

      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },

    removeFromCart: (state, action: PayloadAction<string | number>) => {
      state.items = state.items.filter((cartItem) => cartItem.id !== action.payload);
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },

    updateQuantity: (
      state,
      action: PayloadAction<{ id: string | number; quantity: number }>
    ) => {
      const { id, quantity } = action.payload;
      const item = state.items.find((cartItem) => cartItem.id === id);

      if (item) {
        item.quantity = quantity;
        localStorage.setItem("cartItems", JSON.stringify(state.items));
      }
    },

    clearCart: (state) => {
      state.items = [];
      localStorage.removeItem("cartItems");
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
