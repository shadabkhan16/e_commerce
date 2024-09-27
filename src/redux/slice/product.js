import { createSlice } from "@reduxjs/toolkit";
import { productItems } from "../../constants/fake_products"; // Adjust the import path

const initialState = {
  items: productItems.map((product) => ({ ...product, quantity: 1 })),
  cart: [], // Initialize cart
};

const products = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.items = action.payload;
    },
    addToCart: (state, action) => {
      const product = state.items.find((item) => item.id === action.payload);
      if (product) {
        const cartItem = state.cart.find((item) => item.id === product.id);
        if (cartItem) {
          cartItem.quantity += product.quantity; // Increment quantity in cart
        } else {
          state.cart.push({ ...product }); // Push a new product to cart
        }
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    incrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item) {
        item.quantity++;
      }
    },
    decrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity--;
      }
    },
  },
});

// Export actions and reducer
export const {
  setProducts,
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} = products.actions;
export default products.reducer;
