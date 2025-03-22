// redux/slices/cardSlice.js
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  products: {},
};

const cardSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addProduct(state, action) {
      state.products = action.payload;
    },
  },
});

export const { addProduct } = cardSlice.actions;
export default cardSlice.reducer;
