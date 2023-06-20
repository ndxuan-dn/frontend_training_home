import { useState } from "react";
import DeleteModal from "../../view/Modal/Delete";



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
                    <DeleteModal />
                </div>
            </td>
        </tr>
    )
}

export default StudenItem;