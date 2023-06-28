import "./App.scss"
import { Routes, Route } from 'react-router-dom';
import Sidebar from "./components/Sidebar";
import Students from "./components/Students";
import Items from "./components/Items";
import Products from "./components/Products";
import ChatRoom from "./components/ChatApp";
import SignIn from "./components/ChatApp/signin";
import { auth } from "./components/ChatApp/firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth"

export default function App() {
    const [user] = useAuthState(auth);
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
                            <Route path="/chats" element={ !user ? <SignIn/> : <ChatRoom/>}></Route>
                        </Routes>
                    </div>
                </div>
            </div>
        </div>
    )
}