import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './slice/product';


const store = configureStore({
  reducer: {
    products: productsReducer,
    
  },
});

export default store;
