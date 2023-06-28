import { configureStore } from "@reduxjs/toolkit";

import studentsReducer from "../reducers/index";
import usersReducer from "../reducers/usersReducer";



export const store = configureStore({
    reducer: {
        users: usersReducer
    }
})
