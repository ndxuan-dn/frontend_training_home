
import StudenItem from "../StudenItem";

export default function List({ list }) {


    const renderList = list && list.map(item => <StudenItem key={item.id} id={item.id} name={item.name}/>)
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
                        {renderList}
                    </tbody>
                </table>
            </div>
    )
}