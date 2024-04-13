import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    active: null,
    resultSum: null,
    resultPhone: null,
};

const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        createOrder(state, action) {
            state.active = action.payload.active;
            state.resultSum = action.payload.resultSum;
            state.resultPhone = action.payload.resultPhone;
        },
        deleteOrder(state) {
            state.active = null;
            state.resultSum = null;
            state.resultPhone = null;
        },
    },
});

export const {createOrder, deleteOrder} = orderSlice.actions;
export default orderSlice.reducer;