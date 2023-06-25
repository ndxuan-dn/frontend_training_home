import "./App.scss"
import Sidebar from "./components/Sidebar";
import Form from "./components/Form";
import List from "./components/List";
import { Route, Routes } from "react-router-dom";
import Students from "./pages/Students";



export default function App() {
    return (
        <div className="App">
            <div className="container">
                <div className="students-manager">
                    <Sidebar />
                    <div className="contents">
                        <Routes>
                            <Route path="/students" element={<Students />   }></Route>
                        </Routes>
                    </div>
                </div>
            </div>
        </div>
    )
}