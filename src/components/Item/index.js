import { useDispatch } from "react-redux";
import Modal from "../../pages/Modal";
import { deleteStudentsSync } from "../../modules/redux/reducers";

const Item = ({ id, name }) => {

    const dispath = useDispatch();
    
    const handleDelete = () => {
        dispath(deleteStudentsSync({id}))
    }

    return (
        <li>
            <div>
                <p>{name}</p>
                <button onClick={handleDelete}>Delete</button>
                <Modal />
            </div>
        </li>
    )
}

export default Item;