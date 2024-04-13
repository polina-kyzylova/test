import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setCart(state, action) {
            return [...state, action.payload];
        },
        updateCart(state, action) {
            state.map(item => {
                if (item.id === action.payload.id) {
                    item.cartAmount = action.payload.cartAmount
                    item.cartPrice = action.payload.cartPrice;
                }
            });
        },
        removeCart(state, action) {
            state.splice(state.id === action.payload.id, 1);
        },
        clearCart(state) {
            return [];
        }
    },
});


export const {setCart, updateCart, removeCart, clearCart} = cartSlice.actions;
export default cartSlice.reducer;