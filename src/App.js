import "./App.scss"
import Sidebar from "./components/Sidebar";
import Form from "./components/Form";
import List from "./components/List";
import { Route, Routes } from "react-router-dom";
import Users from "./pages/Users";
import Test from "./pages/Test";



export default function App() {
    return (
        <div className="App">
            <div className="container">
                <div className="students-manager">
                <header>
                    <div className="wrapper">
                        <div className="search-icon">
                            <button className="btn btn-search"><i className="fa-solid fa-magnifying-glass"></i></button>    
                        </div>
                        <div className="search-input"></div>
                        <div className="controls">
                            <div className="lang">
                                <button className="btn"><i className="fa-solid fa-earth-asia"></i></button>
                            </div>
                            <div className="noti">
                                <button className="btn"><i className="fa-solid fa-bell"></i></button>
                            </div>
                            <div className="account">
                                <button>
                                    <div className="avatar">
                                        <div className="image-wrapper">
                                            <img className="image" src="/assets/images/avatars/avatar_default.jpg"></img>
                                        </div>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </header>
                    <Sidebar />
                    
                    <div className="contents">
                        <div className="contents-wrapper">
                            <Routes>
                                <Route path="/users" element={<Users />}></Route>
                                <Route path="/tests" element={<Test />}></Route>
                            </Routes>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}