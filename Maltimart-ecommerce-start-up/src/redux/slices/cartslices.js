import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItem: [],
    totalAmount: 0,
    toalQuality: 0
}
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {}
     addItem: (state, action) => {
        const newItem = action.payload;
        const existingUtem = state.cartItem.find(item => item.id === newItem.id);

        state.toalQuality++

        if(!existingUtem){
            state.cartItem.push
        }

    }

});

export const { } = cartSlice.actions
export default cartSlice.reducer