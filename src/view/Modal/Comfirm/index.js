import { useEffect } from "react"


const Comfirm = ({ handlerDisagree, handlerAgree }) => {


    // when keydown ESC
    useEffect(()=> {
        function keyactions(e) {
            if (e.keyCode === 27) {
                handlerDisagree()
            }
        }

        window.addEventListener("keydown", keyactions)

        return () => {
            window.removeEventListener("keydown", keyactions)
        }
    }, [])

    return (
        <div className="modal-comfirm">
                    <div className="header">
                        <h4>Delete Confirmation</h4>
                    </div>
                    <div className="content"><p>Are you sure remove this item from the list?</p></div>
                    <div>
                        <button className="btn" onClick={handlerDisagree}>Disagree</button>
                        <button className="btn" autoFocus onClick={handlerAgree}>Agree</button>
                    </div>
                </div>
    )
}

export default Comfirm;