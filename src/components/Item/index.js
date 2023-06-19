import { useState } from "react";

import Modal from "../../view/Modal";

function StudenItem({ id, name, handlerDelete, handlerEdit }) {

    function handlerAgree() {
        handlerDelete(id)
    }

    function sendData(data) {
        handlerEdit(id, data)
    }




    return (
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>
                <div className="controls">
                    <Modal name={name} role="Edit" sendData={sendData}/>
                    <Modal role="Delete" handlerAgree={handlerAgree}/>
                </div>
            </td>
        </tr>
    )
}

export default StudenItem;


// disabled = { isEdit && (renderName.trim() === name.trim() || !renderName.length) }