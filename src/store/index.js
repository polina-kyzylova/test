import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './slices/cartReducer';
import orderReducer from "./slices/orderReducer";


export const store = configureStore({
    reducer: {
        cart: cartReducer,
        order: orderReducer,
    }
});