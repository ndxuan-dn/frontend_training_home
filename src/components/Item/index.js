import { useDispatch } from "react-redux";
import { deleteItem } from "../../modules/redux/actions";
import Modal from "../../pages/Modal";

const Item = ({ name }) => {
    const dispatch = useDispatch();

    return (
        <li>
            <div>
                <p>{name}</p>
                <button onClick={() => dispatch(deleteItem(name))}>Delete</button>
                <Modal />
            </div>
        </li>
    )
}

export default Item;