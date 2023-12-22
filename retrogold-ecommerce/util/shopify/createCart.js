import { createAsyncThunk } from "@reduxjs/toolkit";

export const initializeCart = createAsyncThunk(
    'cart/initializeCart',
    async (_, { rejectWithValue }) => {
        try {
            const cartData = await createCart();
            return cartData; // This will be the payload for the fulfilled action
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);