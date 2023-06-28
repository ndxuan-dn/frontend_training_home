import { Link } from "react-router-dom";


export default function Sidebar () {
    

    return (
        <nav id="sidebar">
            <div className="header">
                <div className="home">
                    <Link to="/">
                        <div className="wrapper">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 512 512"><defs><linearGradient id="BG1" x1="100%" x2="50%" y1="9.946%" y2="50%"><stop offset="0%" stopColor="#103996"></stop><stop offset="100%" stopColor="#2065D1"></stop></linearGradient><linearGradient id="BG2" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stopColor="#76B0F1"></stop><stop offset="100%" stopColor="#2065D1"></stop></linearGradient><linearGradient id="BG3" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stopColor="#76B0F1"></stop><stop offset="100%" stopColor="#2065D1"></stop></linearGradient></defs><g fill="#2065D1" fillRule="evenodd" stroke="none" strokeWidth="1"><path fill="url(#BG1)" d="M183.168 285.573l-2.918 5.298-2.973 5.363-2.846 5.095-2.274 4.043-2.186 3.857-2.506 4.383-1.6 2.774-2.294 3.939-1.099 1.869-1.416 2.388-1.025 1.713-1.317 2.18-.95 1.558-1.514 2.447-.866 1.38-.833 1.312-.802 1.246-.77 1.18-.739 1.111-.935 1.38-.664.956-.425.6-.41.572-.59.8-.376.497-.537.69-.171.214c-10.76 13.37-22.496 23.493-36.93 29.334-30.346 14.262-68.07 14.929-97.202-2.704l72.347-124.682 2.8-1.72c49.257-29.326 73.08 1.117 94.02 40.927z"></path><path fill="url(#BG2)" d="M444.31 229.726c-46.27-80.956-94.1-157.228-149.043-45.344-7.516 14.384-12.995 42.337-25.267 42.337v-.142c-12.272 0-17.75-27.953-25.265-42.337C189.79 72.356 141.96 148.628 95.69 229.584c-3.483 6.106-6.828 11.932-9.69 16.996 106.038-67.127 97.11 135.667 184 137.278V384c86.891-1.611 77.962-204.405 184-137.28-2.86-5.062-6.206-10.888-9.69-16.994"></path><path fill="url(#BG3)" d="M450 384c26.509 0 48-21.491 48-48s-21.491-48-48-48-48 21.491-48 48 21.491 48 48 48"></path></g></svg>
                        </div>
                    </Link>
                </div>
                <div className="account">
                    <a className="details">
                        <div className="wrapper">
                            <div className="avatar">
                                <div className="image-wrapper">
                                    <img className="image" src="/assets/images/avatars/avatar_default.jpg"></img>
                                </div>
                            </div>
                            <div className="name"><h6 className="text">Jaydon Frankie</h6></div>
                        </div>
                    </a>
                </div>
            </div>
            <div className="body">
                <ul className="nav-list">
                    <li className="nav-items">
                        <Link to="/">
                            <div className="wrapper">
                                <div className="icon"></div>
                                <p className="text">Dashboard</p>
                            </div>
                        </Link>
                    </li>
                    <li className="nav-items active">
                        <Link to="/users">
                            <div className="wrapper">
                                <div className="icon"></div>
                                <p className="text">Users</p>
                            </div>
                        </Link>
                    </li>
                    <li className="nav-items">
                        <Link to="/">
                            <div className="wrapper">
                                <div className="icon"></div>
                                <p className="text">Products</p>
                            </div>
                        </Link>
                    </li>
                    <li className="nav-items">
                        <Link to="/">
                            <div className="wrapper">
                                <div className="icon"></div>
                                <p className="text">Blogs</p>
                            </div>
                        </Link>
                    </li>
                    <li className="nav-items">
                        <Link to="/">
                            <div className="wrapper">
                                <div className="icon"></div>
                                <p className="text">Login</p>
                            </div>
                        </Link>
                    </li>
                    <li className="nav-items">
                        <Link to="/">
                            <div className="wrapper">
                                <div className="icon"></div>
                                <p className="text">Not Found</p>
                            </div>
                        </Link>
                    </li>
                    <li className="nav-items">
                         <Link to="/tests">
                            <div className="wrapper">
                                <div className="icon"></div>
                                <p className="text">Test Future</p>
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="footer">
                <div className="wrapper">
                    <div className="image-wrapper">
                        <img src="./assets/illustrations/illustration_avatar.png"></img>
                    </div>
                    <div className="body-contents">
                        <h6 className="title">Get more?</h6>
                        <p className="sub-title">From only $69</p>
                    </div>
                    <div className="footer-controls">
                        <button>Upgrade To Pro</button>
                    </div>
                </div>
            </div>
        </nav>
    )
}