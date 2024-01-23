import { configureStore, createSlice } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


//Set the state
const initialState = {
    cart: [],
    totalPrice: 0,
    totalQuantity: 0
};

//Create Slice and align it with the cart so it's specific to working on the Cart
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        initializeCart: (state, action) => {
            state.cart = action.payload.map(item => ({
                ...item,
               price: item.price,
               quantity: item.quantity,
               
            }));
            state.totalQuantity = state.cart.reduce((total, item) => total + item.quantity, 0);
            state.totalPrice = state.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
        },

       addToCart: (state, action) => {
        const existingItemIndex = state.cart.findIndex(item => item.id === action.payload.id);
        if(existingItemIndex !== -1){
            state.cart[existingItemIndex].quantity += action.payload.quantity;
        } else {
            state.cart.push(action.payload)
        }
        state.totalQuantity = state.cart.reduce((total, item) => total + item.quantity, 0)
        state.totalPrice = state.cart.reduce((total, item)=> total + (item.price * item.quantity), 0)
       },
       
      onRemove: (state, action) => {
      const removingItemId = action.payload.id;
      state.cart = state.cart.filter(item => item.id !== removingItemId);
      state.totalQuantity = state.cart.reduce((total, item) => total + item.quantity, 0)
      state.totalPrice = state.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
      },

      toggleCartItemQuantity: (state, action) => {
       const existingItemIndex = state.cart.findIndex((item) => item.id === action.payload.id);
       if (existingItemIndex !== -1) {
        const updatedCart = [...state.cart]
        const existingItem = updatedCart[existingItemIndex];

        // Increase or decrease quantity
        if (action.payload.value === 'inc') {
            existingItem.quantity++;
        } else if (action.payload.value === 'dec') {
            if (existingItem.quantity > 1) {
                existingItem.quantity--;
            } else {
                // Remove item from cart if quantity is 1 and 'dec' is requested
                updatedCart.splice(existingItemIndex, 1);
            }
        }

        state.cart = updatedCart;

        // Update totalQuantity and totalPrice
        state.totalQuantity = updatedCart.reduce((total, item) => total + item.quantity, 0);
        state.totalPrice = updatedCart.reduce((total, item) => total + item.price * item.quantity, 0);
       }
      }

       
    },
});

const persistConfig = {
    key: 'root',
    storage,
    // Add more configurations like whitelist or blacklist if needed
};

const persistedReducer = persistReducer(persistConfig, cartSlice.reducer);


//Create the store
// const store = configureStore({ reducer: cartSlice.reducer });
const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'], // Ignore serialization check for persist/PERSIST action
      },
    }),
});

export const persistor = persistStore(store);
                  
export const { addToCart, onRemove, toggleCartItemQuantity, initializeCart } = cartSlice.actions;

export default store; 