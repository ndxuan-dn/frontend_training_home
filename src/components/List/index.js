import { useSelector } from "react-redux"
import Item from "../Item"

const List = () => {
    const list = useSelector(state => state)
    const render = list && list.map(item => <Item name={item.name} />)
    return (
        <div>
            <ul>
            {render}
            </ul>
            
        </div>
    )
}

export default List;