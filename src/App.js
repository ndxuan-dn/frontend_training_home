import axios from "axios";
import "./App.scss"
import Form from "./components/Form";
import List from "./components/List";

import { URL } from "./contans/contans";
import { useEffect, useState } from "react";

export default function App() {
  const path = "studens"
  const address = URL + "/" + path
  const [list, setList] = useState([])

// init list
useEffect(() => {
  axios.get(address).then(res => setList(res.data)).catch(error => console.log(error))
}, [])



// Handler submit
  function handlerSubmit(data) {
    setList(prev => [ ...prev, { id: list.length == 0 ? 1 : list[list.length -1].id + 1, name: data.name }])
  }

// Handler Delete 
  function handlerDelete(id) {
    const newData = list.filter(item =>  item.id !== id)
    setList(newData)

    const deleteAddress = address + "/" + id 

    axios.delete(deleteAddress)
  }


  return (
    <div className="App">
      <div className="container">
        <Form handlerSubmit={handlerSubmit}/>
        <List data={list} handlerDelete={handlerDelete}/>
      </div> 
    </div>
  );
}
