import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const urlAPI = 'http://localhost:7000/sinhvien';


export const getAllStudentsSync = createAsyncThunk(
    'students/getAllStudents',

    async (data) => {
        console.log('data', data);
        // Goi API backend
        const res = await axios.get(urlAPI);
        return res.data;
    }
)

export const editStudentsSync = createAsyncThunk(
    'students/editStudents',

    async (data) => {
        console.log('data', data);
        // Goi API backend
        const res = await axios.put(urlAPI+`/${data.id}`, {name: data.name});
        return res.data;
    }
)

export const studentsSlice = createSlice({
    name: 'students',
    initialState: {
        students: [],
        status: 'check'
    },
    reducers: {},
    extraReducers:  (builder) => {
        builder
            .addCase(getAllStudentsSync.pending, (state, action) => {
                state.status = "loading....";
            })
            .addCase(getAllStudentsSync.fulfilled, (state, action) => {
                state.status = "checking....";
                state.students = action.payload;
            })
            .addCase(editStudentsSync.pending, (state, action) => {
                state.status = "loading....";
            })
            .addCase(editStudentsSync.fulfilled, (state, action) => {
                state.status = "checking....";
                const existingStudent = state.students.find(s => s.id === action.payload.id);

                if(existingStudent) {
                    existingStudent.name = action.payload.name
                }
            })
    }
})

export const { getAllStudents, editStudents } = studentsSlice.actions;
export const selectStudents = (state) => state.students;
export default studentsSlice.reducer;