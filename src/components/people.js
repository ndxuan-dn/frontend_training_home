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

const Peoples = () => {
    const [dataPeople, setDataPeople] = useState([]);
    useEffect(() => {
        
    })
    const changeData = () => {
        setDataPeople(data)
    }
    return (
        <div>
            <button onClick={changeData}>Change Data</button>
            <ul>
                { dataPeople && dataPeople.map(
                    (item, index) => <People key={index} name={item.name} sex={item.sex} age={item.age} />)
                }
            </ul>
        </div>
        
    )
}

export default Peoples;