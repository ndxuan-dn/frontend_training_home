import { useState } from "react";

export default function Modal() {
    const [open, setOpen] = useState(false);

    function closeModal() {
        setOpen(false)
    }

    function openModal() {
        setOpen(true)
    }

    return (
        <div>
            <button onClick={openModal}>Open Modal</button>
            {open && <div className="modal">
                    <div className="delete-comfirm">
                        <div className="header"><h4 className="text">Comfirm to delete item</h4></div>
                        <div className="body"><p className="text">Are you sure delete item with information: item information</p></div>
                        <div className="footer">
                            <div className="controls">
                                <button className="btn">disagree</button>
                                <button className="btn">agree</button>
                            </div>
                        </div> 
                    </div>
                </div>}
        </div>
    )
}