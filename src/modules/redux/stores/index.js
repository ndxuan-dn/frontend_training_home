import { configureStore } from "@reduxjs/toolkit";
// import { students } from "../reducers";

import studentReducer from "../../../reducers/studentReducer";


export const store = configureStore({
    reducer: {
        student: studentReducer,
    },
    
})
