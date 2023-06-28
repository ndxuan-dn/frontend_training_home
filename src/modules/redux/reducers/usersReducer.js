import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const urlAPI = "http://localhost:3004/users";

export const getAllUsersSync = createAsyncThunk(
    "users/getAllUsers",

    async () => {
        const response = await axios.get(urlAPI);
        console.log("response", response)
        return response.data
    }
)

export const usersSlice = createSlice({
    name: "users",
    initialState: {
        value: [],
        status: "check it"
    }, 

    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllUsersSync.pending, (state, action) => {
                state.status = "loading..."
            })
            .addCase(getAllUsersSync.fulfilled, (state, action) => {
                state.status = "loaded..."
                state.users = action.payload
            })
    }
})

export default usersSlice.reducer;

