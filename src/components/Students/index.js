import Student from "./student";
import React, { useState, useEffect } from 'react';

import { useSelector, useDispatch } from "react-redux";
import { getAllStudentsSync, editStudentsSync } from "../../reducers/studentReducer";

import EditStudentFrom from "./modalEdit";

import { useForm } from 'react-hook-form';
import axios from 'axios';

// const urlAPI = 'http://localhost:7000/sinhvien';

const Students = () => {
    const [showModalUpdateStudent, setShowModalUpdateStudent] = useState(false);
    const [dataEditTemp, setdataEditTemp] = useState({})

    const {register, handleSubmit, formState} = useForm();

    const DataStudents = useSelector(state => state.student.students);
    const dispatch = useDispatch();

    const getAllStudentsFromAPI = async () => {
        dispatch(getAllStudentsSync());
    }
    
    const handleShowEditStudentForm = (item) => {
        console.log(item);
        // dispatch(editStudentsSync(item));
        setdataEditTemp({name: item.name});
        setShowModalUpdateStudent(true);
    }

    const handleEditStudent = (item) => {
        console.log(item);
    }

    const handleStudentChange = (item) => {
        console.log(item);
    }

    useEffect(() => {
        getAllStudentsFromAPI()
    }, [])

    return (
        <div className="studentsManagement">
            {DataStudents.map(item => <Student objStudent={item} handleEditStudent={handleShowEditStudentForm}/> )}
            {showModalUpdateStudent && 
                <EditStudentFrom
                    register={register}
                    handleSubmit={handleSubmit(handleEditStudent)}
                    formState={formState}
                    intialValue={dataEditTemp}
                    onChange={handleStudentChange}
                />
            }
        </div>
    )
}

export default Students;