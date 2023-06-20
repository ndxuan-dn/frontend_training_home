import { useEffect, useState } from "react"


const Delete = ({handlerDisagree, handlerAgree}) => {


    useEffect(() => {
       
        function keyactions(e) {
            if (e.keyCode == 27) handlerDisagree()
        } 
        
        window.addEventListener("keydown", keyactions)

        return () => { window.removeEventListener("keydown", keyactions) }
    }, [])

    return (
        <div className="modal">
             <div className="delete">
                <div className="header">Header</div>
                <div className="body">Body</div>
                <div className="controls">
                    <button onClick={handlerDisagree}>Disagree</button>
                    <button onClick={handlerAgree} autoFocus>Agree</button>
                </div>
             </div>
        </div>
    )
}




const DeleteModal = () => {
    const [open, setOpen] = useState(false)

    function closeModal() {
        setOpen(false)
    }

    function openModal() {
        setOpen(true)
    }

    return (
        <div>
            <button onClick={openModal}>
                Delete
            </button>
            {open && <Delete handlerDisagree={closeModal}/>}
        </div>
    )
}

export default DeleteModal;