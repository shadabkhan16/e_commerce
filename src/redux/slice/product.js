import { createSlice } from '@reduxjs/toolkit';
import {productItems}  from "../../constants/fake_products"

const initialState = {
  items: productItems
};

const products = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.items = action.payload;
    },
    
  },
});

export const { setProducts } = products.actions;

export default products.reducer;
