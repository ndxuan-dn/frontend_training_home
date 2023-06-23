import  { useState, useEffect } from "react"




const Modal = ({ role, handlerAgree, sendData, children}) => {
    const [isOpen, setOpen] = useState(false)

    function closeModal() {
        setOpen(false)
    }

    function openModal() {
        setOpen(true)
    }

    useEffect(()=> {
        function keyactions(e) {
            if (e.keyCode === 27) closeModal()
    
        }

        window.addEventListener("keydown", keyactions)

        return () => {
            window.removeEventListener("keydown", keyactions)
        }
    }, [])

    return (
        <div>
            <button className="btn" onClick={openModal}>
                {role}
            </button>
            {isOpen && 
            <div className="modal">
                {children}
            </div>}
            
        </div>
    )
}


export default Modal;