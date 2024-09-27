import { createSlice } from '@reduxjs/toolkit';
import {productItems}  from "../../constants/fake_products"

const initialState = {
  items: productItems.map(product => ({ ...product, quantity: 1 }))
};

const products = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.items = action.payload;
    },
    incrementQuantity: (state, action) => {
      const product = state.items.find(item => item.id === action.payload);
      if (product) {
        product.quantity += 1;
      }
    },
    decrementQuantity: (state, action) => {
      const product = state.items.find(item => item.id === action.payload);
      if (product && product.quantity > 1) {
        product.quantity -= 1;
      }
    }
    
  },
});

export const { setProducts , incrementQuantity , decrementQuantity } = products.actions;

export default products.reducer;
