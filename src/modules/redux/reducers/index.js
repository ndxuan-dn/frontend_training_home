import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const urlAPI = 'http://localhost:3004/students';

export const createStudentsSync = createAsyncThunk(
    "students/createStudents",

    async (data) => {
        console.log("data", data);
        const response = await axios.post(urlAPI, data);
        return response.data
    }
)

export const getAllStudentsSync = createAsyncThunk(
    "students/getAllStudents",

    async (data) => {
        console.log("data", data);
        const response = await axios.get(urlAPI);
        return response.data
    }
)

export const deleteStudentsSync = createAsyncThunk(
    "students/deleteStudents",

    async (data) => {
        const deleteAddress = urlAPI + "/" + data.id
        const response = await axios.delete(deleteAddress)
        return data
    }
)

export const editStudentsSync = createAsyncThunk(
    "students/editStudents",

    async (data) => {
        console.log("data", data)
        const editAddress = urlAPI + "/" + data.id
        const response = await axios.put(editAddress, data)
        return data;
    }
)



export const studentsSlice = createSlice({
    name: "students",
    initialState: {
        students: [],
        status: "check",
    },

    reducers : {},

    extraReducers: (builder) => {
        builder
            .addCase(createStudentsSync.pending, (state, action) => {
                state.status = "loading...";
            })
            .addCase(createStudentsSync.fulfilled, (state, action) => {
                state.students = [ ...state.students, action.payload ]
            })
            .addCase(getAllStudentsSync.pending, (state, action) => {
                state.status = "loading...";
            })
            .addCase(getAllStudentsSync.fulfilled, (state, action) => {
                state.status = "checking...";
                state.students = action.payload;
            })
            .addCase(deleteStudentsSync.pending, (state, action) => {
                state.status = "loading...";
            })
            .addCase(deleteStudentsSync.fulfilled, (state, action) => {
                state.status = "checking...";
                state.students = state.students.filter(item => item.id !== action.payload.id)
            })
            .addCase(editStudentsSync.pending, (state, action) => {
                state.students = "loading...";
            })
            .addCase(editStudentsSync, (state, action) => {
                state.students = state.students.filter(item => { if (item.id === action.payload.id) item.name = action.payload.name })
            })
    }
})

// export const { getAllStudents, createStudents } = studentsSlice.actions;



export default studentsSlice.reducer;