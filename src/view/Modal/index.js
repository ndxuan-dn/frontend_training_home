import  { useState } from "react"
import Comfirm from "./Comfirm"

const Modal = ({ role, handlerAgree }) => {
    const [isOpen, setOpen] = useState(false)

    function closeModal() {
        setOpen(false)
    }

    function openModal() {
        setOpen(true)
    }

    return (
        <div>
            <button className="btn" onClick={openModal}>
                {role}
            </button>
            {isOpen && <div className="modal">
                
                <Comfirm handlerDisagree={closeModal} handlerAgree={handlerAgree}/>
            </div>}
            
        </div>
    )
}


export default Modal;