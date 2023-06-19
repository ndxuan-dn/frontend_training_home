import axios from "axios";
import { useState} from "react";

import { PATH } from "../../contans/contans";
export default function Form({ handlerSubmit }) {  
    const [name, setName] = useState("")
    const [status, setStatus] = useState("")

    
    // onChange input
    function onChange(event) {
        setName(event.target.value)
        setStatus("typing")

    } 
    // form on submit
    function onSubmit(event) {
        event.preventDefault();
        setStatus("submitting")

        const data = {
            name
        }

        axios.post(PATH, data)
            .then(res => {
                if(res.status === 201) {
                    handlerSubmit(data)
                    setStatus("success")
                    setName("")     
                }
            })
            .catch(error => console.log(error))
            .finally(() => {
            setStatus("ready for typing")   
        })              
    }

    return (
        <div className="form">
            <form id="user-input-form" onSubmit={onSubmit}>
                <label>Name</label>
                <input 
                    className="user-input"
                    placeholder="Enter Name ..."
                    value={name}
                    onChange={event => onChange(event)}
                    disabled={status === "submitting"}
                    />
                <button className="btn" id="btn-add" onClick={onSubmit} disabled={!name || status === "submitting"}>Submit</button>
            </form>
        </div>
    )
}