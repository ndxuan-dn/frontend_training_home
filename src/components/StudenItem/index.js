import { useState } from "react";


function StudenItem({id, name, editCompleted, deleteCompleted}) {
    const [isEdit, setEdit] = useState(false)
    const [renderName, setRenderName] = useState(name)

    function cancelEdit() {
        setRenderName(name)

        setEdit(false)
    }

    function openEdit() {
        setEdit(true)
    }

    function onChange(event) {
        setRenderName(event.target.value)   
    }

    function handlerCompleted() {

        const data = { name : renderName}
        
        editCompleted(id, data)

        setRenderName(data.name)

        setEdit(false)

    }

    function handlerDelete() {

        deleteCompleted(id)
        
    }



    return (
        <tr>
            <td>{id}</td>
            <td>{isEdit ? <input value={renderName} onChange={event => onChange(event)}/> : renderName}</td>
            <td>
                <button onClick={isEdit ? cancelEdit : openEdit}>{isEdit ? "Cancel" : "Edit" }</button>
                <button onClick={isEdit ? handlerCompleted : handlerDelete} disabled = { isEdit && (renderName.trim() === name.trim() || !renderName.length) } >{isEdit ? "Comfirm": "Delete"}</button>
            </td>
        </tr>
    )
}

export default StudenItem;