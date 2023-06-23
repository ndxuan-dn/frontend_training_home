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
                    <Modal role="Delete" handlerAgree={handlerAgree}>
                        <div>
                            <h3>Custom contents</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a typ</p>
                        </div>
                    </Modal>
                </div>
            </td>
        </tr>
    )
}

export default StudenItem;


// disabled = { isEdit && (renderName.trim() === name.trim() || !renderName.length) }