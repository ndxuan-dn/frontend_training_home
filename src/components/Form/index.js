import axios from "axios";
import { useState, useEffect } from "react";

import { URL } from "../../contans/contans";
import List from "../List";

export default function Form() {  
    const [name, setName] = useState("")
    const [status, setStatus] = useState("typing")
    const [list, setList] = useState([])

    

    // Init Data List
    useEffect(() => {
        axios.get(URL).then(response => setList(response.data)).catch(error => console.log(error))
    }, [])

    console.log()

    // Sumbmit
    function onSubmit(event) {
        event.preventDefault();

        setStatus("submitting")

        const data = { name }

        // post API
        axios.post(URL, data)
            .then(response => {

                    setStatus("success")
                    // clear value input when submited
                    setName("")
                  
                    setList(prev => [...prev, {id: list.length === 0 ? 1 : list[list.length -1].id + 1 , name}])
            
                    console.log(response)
            })
            .catch(error => console.log(error))
    }



    // input change value
    function onChange(event) {
        setName(event.target.value)
    }
    // handler Edit 

    function editCompleted(id, data) {
        const newData = list.filter(item => {
            if (item.id === id) item.name = data.name; 
            return true;   
        })


        const editAdress = URL + "/" + id
        axios.put(editAdress, data)
            .then(response => {

                    setList(newData)

                    console.log(response)

                })
            .catch(error => console.log(error)) 
    }

    function deleteCompleted(id) {

        const newData = list.filter(item => {
            if(item.id !== id) return true; 
        })

        const deleteAdress = URL + "/" + id
        axios.delete(deleteAdress)
            .then(response => {
               
                    console.log(response)

                    setList(newData)
                
                })
            .catch(error => console.log(error))
        
    }


    return (
        <div className="form">
            <form id="user-input-form" onSubmit={event => onSubmit(event)}>
                <label>Name</label>
                <input 
                    className="user-input"
                    placeholder="Enter Name ..."
                    value={name}
                    onChange={event => onChange(event)}
                    disabled = {status === "submitting"}
                    />
                <button className="btn" id="btn-add" disabled={ name.length === 0 || status === "submitting" }>add</button>
            </form>
            <List list={list} editCompleted={editCompleted} deleteCompleted={deleteCompleted}/>
        </div>
    )
}