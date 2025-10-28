"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartItem {
  id: string | number;
  name: string;
  price: number;
  image?: string;
  quantity: number;
  [key: string]: any;
}

const initialState:{items:CartItem[]} = {items:[]};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Omit<CartItem, "quantity">>) => {
      const item = action.payload;
      const existingItem = state.items.find((cartItem) => cartItem.id === item.id);

      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({
          ...item, quantity: 1,
          id: "",
          name: "",
          price: 0
        });
      }
    },

    removeFromCart: (state, action: PayloadAction<string | number>) => {
      return state.items.filter((cartItem) => cartItem.id !== action.payload);
    },

    updateQuantity: (
      state,
      action: PayloadAction<{ id: string | number; quantity: number }>
    ) => {
      const { id, quantity } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        existingItem.quantity = quantity;
      }
    },

    clearCart: () => {
      return [];
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
