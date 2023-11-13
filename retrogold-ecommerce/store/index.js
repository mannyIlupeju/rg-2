import { configureStore, createSlice } from '@reduxjs/toolkit'


const initialState = {
    cart: [],
    totalPrice: 0,
    totalQuantity: 1
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
       addToCart: (state, action) => {
        const existingItem = state.cart.find(item => item._id === action.payload._id);
        if(existingItem){
            existingItem.quantity++
        } else {
            state.cart.push({...action.payload, quantity: action.payload.quantity || 1})
        }
        state.totalQuantity = state.cart.reduce((total, item) => total + item.quantity, 0)
        state.totalPrice = state.cart.reduce((total, item)=> total + (item.price * item.quantity), 0)
       },
       onRemove: (state, action) => {
        const existingItem = state.cart.find(item => item._id === action.payload._id);
        if(existingItem) {
            state.totalPrice -= (existingItem.price * existingItem.quantity);
            state.cart = state.cart.filter(item => item._id !== action.payload._id)
        }
        state.totalQuantity = state.cart.reduce((total, item) => total + item.quantity, 0)
       },
       toggleCartItemQuantity: (state, action) => {
        const existingItem = state.cart.find((item)=> item._id === action.payload._id);
        if(existingItem && action.payload.value === 'inc'){
            state.totalQuantity++
            existingItem.quantity++
        }
    
       }
       
    },
});

const store = configureStore({ reducer: cartSlice.reducer });

export const { addToCart, onRemove, toggleCartItemQuantity } = cartSlice.actions;

export default store; 