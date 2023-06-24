import "./App.scss"
import Sidebar from "./components/Sidebar";
import Form from "./components/Form";
import List from "./components/List";



export default function App() {
    return (
        <div className="App">
            <div className="container">
                <div className="students-manager">
                    <Sidebar />
                    <div className="contents">
                        <Form />
                        <List />

       
                    </div>
                </div>
            </div>
        </div>
    )
}