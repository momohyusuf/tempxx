import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addItemToCart: (state, action) => {
      console.log("item added to cart");
    },
  },
});

export const { addItemToCart } = cartSlice.actions;

export default cartSlice.reducer;
