const People = (props) => {
    return (
        <li>
            Ten: {props.name} <br/>
            Gioi Tinh: {props.sex} <br/>
            Tuoi: {props.age}
        </li>
    )
}

// const People = ({name, sex, age}) => {
//     return (
//         <li>
//             Ten: {name} <br/>
//             Gioi Tinh: {sex} <br/>
//             Tuoi: {age}
//         </li>
//     )
// }

export default People;