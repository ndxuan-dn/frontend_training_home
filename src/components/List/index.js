import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllStudentsSync } from "../../modules/redux/reducers";

import Item from "../User"



const List = () => {

    const dataStudents = useSelector((state) => state.students.students);

    const dispath = useDispatch();

    const getAllStudentsFormAPI = async () => {
        dispath(getAllStudentsSync())
    };

    useEffect(() => {
        getAllStudentsFormAPI();
    }, [])

    const render = dataStudents && dataStudents.map(item => <Item key={item.id} name={item.name} id={item.id}/>)
    return (
        <div>
            <ul>
            {render}
            </ul>
        </div>
    )
}

export default List;