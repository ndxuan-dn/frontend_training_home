import axios from "axios";
import { useState, useEffect } from "react";

import { URL } from "../../contans/contans";
import List from "../List";
import StudenItem from "../StudenItem";

export default function Form() {  
    const [name, setName] = useState("")
    const [status, setStatus] = useState("typing")
    const [list, setList] = useState([])

    // Init Data List
    useEffect(() => {
        axios.get(URL).then(response => setList(response.data)).catch(error => console.log(error))
    }, [])

    function onSubmit(event) {
        event.preventDefault();     
        setStatus("submitting")

        const data = {name}

        // post API
        axios.post(URL, data)
            .then(response => {
                if (response.status === 201) {
                    
                    setStatus("success")
                    // clear input value
                    setName("")
                }
                console.log(response)
            })
            .catch(error => console.log(error))

        setList(prev => [...prev, {id: list.length + 1, name}])
    }

    function onChange(event) {
        setName(event.target.value)
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
            <List list={list}/>
        </div>
    )
}