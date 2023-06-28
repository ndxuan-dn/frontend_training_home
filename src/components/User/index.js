


const User = ({ id, name, company, role, verified = false, active = false  }) => {

    return (
      <tr>
        <th className="name">
          <div className="name-wrapper">
            <div className="avatar">
              <div className="wrapper">
                <img
                  className="image"
                  src="/assets/images/avatars/avatar_9.jpg"
                ></img>
              </div>
            </div>
            <span>{name}</span>
          </div>
        </th>
        <td className="company">{company}</td>
        <td>{role}</td>
        <td>{verified ? "Yes" : "No"}</td>
        <td>
          <span className={active ? "active" : ""}>{active ? "active" : "banned"}</span>
        </td>
        <td>
          <i className="fa-solid fa-ellipsis-vertical"></i>
        </td>
      </tr>
    );
}

export default User;