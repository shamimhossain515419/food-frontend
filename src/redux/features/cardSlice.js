import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  selectedItems: 0,
  totalPrice: 0,
  grandTotal: 0,
};

const calculateTotalPrice = (products) => {
  return products.reduce((total, product) => {
    return total + parseInt(product?.stock) * parseFloat(product.price);
  }, 0);
};

const updateCartState = (state) => {
  // Defensive check
  if (!Array.isArray(state.products)) {
    state.products = [];
  }

  state.selectedItems = state.products.reduce(
    (total, product) => total + product?.stock,
    0
  );
  state.totalPrice = calculateTotalPrice(state.products);
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // Defensive check
      if (!Array.isArray(state.products)) {
        state.products = [];
      }

      const existingProduct = state.products.find(
        (product) => product.id === action.payload.id
      );

      if (existingProduct) {
        existingProduct.stock += action.payload.stock || 1;
      } else {
        state.products.push({
          ...action.payload,
          stock: action.payload.stock || 1,
        });
      }
      updateCartState(state);
    },

    updatedQuantity: (state, action) => {
      if (!Array.isArray(state.products)) {
        state.products = [];
      }

      const product = state.products.find((p) => p.id === action.payload.id);
      if (product) {
        if (action.payload.type === "set") {
          product.stock = parseInt(action.payload.stock);
        } else if (action.payload.type === "increment") {
          product.stock += 1;
        } else if (action.payload.type === "decrement" && product.stock > 1) {
          product.stock -= 1;
        }
        updateCartState(state);
      }
    },

    removeFromCart: (state, action) => {
      if (!Array.isArray(state.products)) {
        state.products = [];
      }

      state.products = state.products.filter(
        (product) => product.id !== action.payload.id
      );
      updateCartState(state);
    },

    clearCart: (state) => {
      state.products = [];
      updateCartState(state);
    },
  },
});

export const { addToCart, updatedQuantity, removeFromCart, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
