import { configureStore } from "@reduxjs/toolkit";
import cartSlice, { cartMiddleware } from "./feature/cart/cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cartMiddleware),
});