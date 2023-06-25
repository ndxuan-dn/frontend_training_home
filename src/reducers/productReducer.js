import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const urlAPIProduct = 'http://localhost:7000/products';
const urlAPICart = 'http://localhost:7000/carts';


export const getAllProductsSync = createAsyncThunk(
    'products/getAllProducts',

    async (data) => {
        console.log('data', data);
        // Goi API backend
        const res = await axios.get(urlAPIProduct);
        return res.data;
    }
)

export const productsSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        carts: [],
        status: 'check'
    },
    reducers: {
        addProductToCart: (state, action) => {
            const itemInCart = state.carts.find((item) => item.id === action.payload.id);
            if(itemInCart) {
                itemInCart.quantity++;
            }else {
                state.carts.push({...action.payload, quantity: 1})
            }
        },
        incrementQuantity: (state, action) => {
            const item = state.carts.find((item) => item.id === action.payload);
            item.quantity++;
        },
        decrementQuantity: (state, action) => {
            const item = state.carts.find((item) => item.id === action.payload);
            if (item.quantity === 1) {
                item.quantity = 1;
            }else {
                item.quantity--;
            }
        },
        removeItem: (state, action) => {
            const keepItem = state.carts.filter((item) => item.id !== action.payload);
            state.carts = keepItem;
        }
    },
    extraReducers:  (builder) => {
        builder
            .addCase(getAllProductsSync.pending, (state, action) => {
                state.status = "loading....";
            })
            .addCase(getAllProductsSync.fulfilled, (state, action) => {
                state.status = "checking....";
                state.products = action.payload;
            })
            
    }
})

export const { addProductToCart, incrementQuantity, decrementQuantity, removeItem } = productsSlice.actions;
export const selectProducts = (state) => state.products;
export default productsSlice.reducer;