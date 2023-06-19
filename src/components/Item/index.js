import { useState } from "react";

import Modal from "../../view/Modal";

function StudenItem({ id, name, handlerDelete }) {

    function handlerAgree() {
        handlerDelete(id)
    }


    return (
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>
                <div>
                    <Modal role="Edit"/>
                    <Modal role="Delete" handlerAgree={handlerAgree}/>
                </div>
            </td>
        </tr>
    )
}

export default StudenItem;


// disabled = { isEdit && (renderName.trim() === name.trim() || !renderName.length) }