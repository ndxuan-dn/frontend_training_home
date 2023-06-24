import { configureStore } from "@reduxjs/toolkit";
import { students } from "../reducers";




export const store = configureStore({
    reducer: students
})
