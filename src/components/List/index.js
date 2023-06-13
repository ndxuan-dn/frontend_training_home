import StudenItem from "../StudenItem"

export default function List({ list, editCompleted, deleteCompleted }) {


    const listRender = list && list.map(item => <StudenItem key={item.id} id={item.id} name={item.name} editCompleted={editCompleted} deleteCompleted={deleteCompleted}/>)
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