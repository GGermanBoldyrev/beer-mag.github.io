import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    visible: false,
    totalPrice: 0,
    items: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        openCart(state) {
            state.visible = true
        },
        closeCart(state) {
            state.visible = false
        },
        addItem(state, action) {
            state.items.push(action.payload)
            state.totalPrice = state.items.reduce((sum, a) => sum + a.price, 0)
        },
        removeItem(state, action) {
            state.items = state.items.filter(obj => obj.title !== action.payload)
        },
        clearItems(state) {
          state.items = []
          state.totalPrice = state.items.reduce((sum, a) => sum + a.price, 0)
        },
    }
})

export const {addItem, removeItem, clearItems, closeCart, openCart} = cartSlice.actions

export default cartSlice.reducer