import axios from "axios";
import { useState } from "react";

import { URL } from "../../contans/contans";

function StudenItem({id, name}) {
    const [isEdit, setEdit] = useState(false);
    const [newName, setNewName] = useState(name)

    function onChange(event) {
        setNewName(event.target.value)
    }


    function onEdit() {
        console.log("editting...")

        setEdit(true)
    }

    function onDelete() {
        console.log("delete button on clicked")
    }

    
        

    function cancel() {
        setEdit(false)
    }

    function completed() {
        const address = URL + "/" + id
        const name = newName
        axios.put(address, {name}).then(response => console.log(response)).catch(error => console.log(error))
        setEdit(false)

    }


    return (
        <tr>
            <td>{id}</td>
            <td>{isEdit ? <input placeholder={name} onChange={event => onChange(event)}/> : name}</td>
            <td>
                <button onClick={isEdit ? cancel : onEdit }>{isEdit ? <i className="fa-solid fa-x"></i> : <i className="fa-solid fa-pen"></i>}</button>
                <button onClick={isEdit ? completed : onDelete}>{isEdit ? <i className="fa-solid fa-check"></i> : <i className="fa-solid fa-trash"></i>}</button>
            </td>
        </tr>
    )
}

export default StudenItem;