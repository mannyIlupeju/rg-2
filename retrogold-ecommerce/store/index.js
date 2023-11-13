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
        const removingItem = state.cart.find(item => item._id === action.payload._id);
        if(removingItem){
           state.cart = state.cart.filter(item => item._id !== removingItem._id)
           state.totalPrice = state.cart.reduce((total, item) => total + (item.price * item.quantity), 0)
        } 
       },
      toggleCartItemQuantity: (state, action) => {
       const existingItemIndex = state.cart.findIndex((item) => item._id === action.payload._id);
       if (existingItemIndex !== -1) {
        const existingItem = state.cart[existingItemIndex];

        // Increase or decrease quantity
        if (action.payload.value === 'inc') {
            existingItem.quantity++;
        } else if (action.payload.value === 'dec') {
            if (existingItem.quantity > 1) {
                existingItem.quantity--;
            } else {
                // Remove item from cart if quantity is 1 and 'dec' is requested
                state.cart.splice(existingItemIndex, 1);
            }
        }

        // Update totalQuantity and totalPrice
        state.totalQuantity = state.cart.reduce((total, item) => total + item.quantity, 0);
        state.totalPrice = state.cart.reduce((total, item) => total + item.price * item.quantity, 0);
       }
      }

       
    },
});

const store = configureStore({ reducer: cartSlice.reducer });

export const { addToCart, onRemove, toggleCartItemQuantity } = cartSlice.actions;

export default store; 