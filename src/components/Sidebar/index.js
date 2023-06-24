import { Link } from "react-router-dom";

export default function Sidebar () {
    return (
        <div id="sidebar">
            <div className="header">
                {/* <image className="avatar"></image> */}
                <p className="username">Hi, Tran Duc Phuc!</p>
            </div>
            <div className="body">
                <ul>
                    <li>
                        <Link to="/">Schools</Link>
                    </li>
                    <li>
                        <Link to="/items">Item</Link>
                    </li>
                    <li>
                        <Link to="/students">Students</Link>
                    </li>
                </ul>
            </div>
            <div className="footer">
                <p>create by KLDY</p>
            </div>
        </div>
    )
}