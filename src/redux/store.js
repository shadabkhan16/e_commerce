import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './slice/product';
// import cartReducer from './reducers/cartSlice';
// import userReducer from './reducers/userSlice';

const store = configureStore({
  reducer: {
    products: productsReducer,
    // cart: cartReducer,
    // user: userReducer,
  },
});

export default store;
