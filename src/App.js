import "./App.scss"
import { Routes, Route } from 'react-router-dom';
import Sidebar from "./components/Sidebar";
import Students from "./components/Students";
import Items from "./components/Items";
import Products from "./components/Products";


export default function App() {
    return (
        <div className="App">
            <div className="container">
                <div className="students-manager">
                    <Sidebar />
                    <div className="contents">
                        <Routes>
                            <Route path="/students" element={<Students/>}></Route>
                            <Route path="/items" element={<Items/>}></Route>
                            <Route path="/products" element={<Products/>}></Route>
                        </Routes>
                    </div>
                </div>
            </div>
        </div>
    )
}