
const Student = ({objStudent, handleEditStudent}) => {
    const editS = () => {
        handleEditStudent({id: objStudent.id, name: objStudent.name})
    }
    return (
        <li className="item-student">
            Ten Sinh Vien: <a id={objStudent.id}>{objStudent.name}</a> <a onClick={editS}>Edit</a> <a>Delete</a>
        </li>
    )
}

export default Student;