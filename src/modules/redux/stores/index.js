import { configureStore } from "@reduxjs/toolkit";
// import { students } from "../reducers";
import studentsReducer from "../reducers/index";



export const store = configureStore({
    reducer: {
        students: studentsReducer,
    }
})
