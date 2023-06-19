import { useState } from "react"

const Change = ({ name, handlerDisagree, sendData }) => {
    const [value, setValue] = useState(name)

    function onChange(e) {
        setValue(e.target.value)
    }

    function sendDataForParent() {
        sendData({name: value})
    }


    return (
        <div className="modal-comfirm">
                    <div className="header">
                        <h4>Change Confirmation</h4>
                    </div>
                    <div className="content">
                        <p>{ name }</p>
                        <input value={value} onChange={ e => onChange(e) }/>
                    </div>
                    <div className="">
                        <button className="btn" onClick={handlerDisagree}>Disagree</button>
                        <button className="btn" onClick={sendDataForParent}>Agree</button>
                    </div>
        </div>
    )
}

export default Change;