import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    visible: false,
    totalPrice: 0,
    items: [1, 2]
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
        },
        removeItem(state, action) {
            state.items = state.items.filter(obj => obj.id !== action.payload)
        },
        clearItems(state) {
          state.items = []
        },
        setTotalPrice(state) {
        }
    }
})

export const {addItem, removeItem, clearItems, setTotalPrice, closeCart, openCart} = cartSlice.actions

export default cartSlice.reducer