import Item from "../Item"

export default function List({ data, handlerDelete }) {

    const listRender = data && data.map(item => <Item key={item.id} id={item.id} name={item.name} handlerDelete={handlerDelete}/>)
    return (
        <div id="list">
                <table id="list-table">
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td colSpan={2}>Information</td>
                        </tr>
                    </thead>
                    <tbody>
                        {listRender}
                    </tbody>
                </table>
            </div>
    )
}