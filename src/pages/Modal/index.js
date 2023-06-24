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
                <div className="">
                
                
                    </div>
                </div>}
        </div>
    )
}