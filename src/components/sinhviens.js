import People from "./item_people";
import React, {useState, useEffect} from "react"
import Axios from "axios";
const data = [
    {
        name: "xuan",
        sex: "nam",
        age: 33
    },{
        name: "xuan",
        sex: "nam",
        age: 33
    },{
        name: "xuan",
        sex: "nam",
        age: 33
    },{
        name: "xuan",
        sex: "nam",
        age: 33
    },{
        name: "xuan",
        sex: "nam",
        age: 33
    },
]

const Sinhvien = (props) => {
    return (
        <li>
            Ma SV: {props.id} <br/>
            Ten SV: {props.ten}
        </li>
    )
}

const Sinhviens = () => {
    const [sinhviens, setSinhviens] = useState([]);
    useEffect(() => {
        Axios.get('http://localhost:7000/sinhvien').then((e) => {
            setSinhviens(e.data)
        })
    })
    return (
        <div>
            <ul>
                { sinhviens && sinhviens.map(
                    (item) => <Sinhvien key={item.id} id={item.id} ten={item.ten}  />)
                }
            </ul>
        </div>
        
    )
}

export default Sinhviens;