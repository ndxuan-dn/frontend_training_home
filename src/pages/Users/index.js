import { useEffect } from "react";
import { getAllUsersSync } from "../../modules/redux/reducers/usersReducer";
import { useSelector, useDispatch } from "react-redux";
import User from "../../components/User";

export default function Users() {
  const dataUsers = useSelector((state) => state.users.users);

  const dispath = useDispatch();

  const getAllUsersFormAPI = async () => {
    dispath(getAllUsersSync());
  };

  useEffect(() => {
    getAllUsersFormAPI();
  }, []);

  const listRender =
    dataUsers &&
    dataUsers.map((item) => (
      <User
        key={item.id}
        name={item.name}
        company={item.company}
        role={item.role}
        verified={item.verified}
        active={item.active}
      />
    ));

  return (
    <div className="users">
      <div className="header">
        <h4 className="header-title">Users</h4>
        <button className="btn btn-add-new-users">+ New User</button>
      </div>
      <div className="body">
        <div className="search-users-box">
          <div className="search-box">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input className=""></input>
          </div>
          <button className="btn filter-list">
            <i className="fa-solid fa-filter"></i>
          </button>
        </div>
        <div>
          <table className="users-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Company</th>
                <th>Role</th>
                <th>Verified</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
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
                    <span>Tran Duc Phuc</span>
                  </div>
                </th>
                <td>Apple</td>
                <td>Project Manager</td>
                <td>No</td>
                <td>
                  <span className="active">Active</span>
                </td>
                <td>
                  <i className="fa-solid fa-ellipsis-vertical"></i>
                </td>
              </tr>
              {listRender}
            </tbody>
          </table>
        </div>
      </div>
      <div className="footer">
        <div className="footer-wrapper"></div>
      </div>
    </div>
  );
}
