import { configureStore } from "@reduxjs/toolkit";
// import { students } from "../reducers";

import studentReducer from "../../../reducers/studentReducer";
import productReducer from "../../../reducers/productReducer";


export const store = configureStore({
    reducer: {
        student: studentReducer,
        product: productReducer
    },
    
})
