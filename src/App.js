import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {useState} from "react";
import {Route, Routes} from "react-router-dom";
import AddTask from "./components/AddTask";
import TodoList from "./components/TodoList";
import NoMatch from "./components/NoMatch";
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import {GlobalProvider} from "./components/GlobalState";

export default function App() {

    const [users, setUsers] = useState([]);

    return (
        <section id="todo">
            <GlobalProvider>
                <Routes>
                    <Route path="/add-task" element={<AddTask/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/tasks/:search" element={<TodoList/>}/>
                    <Route path="/tasks" element={<TodoList/>}/>
                    <Route path="/" index element={<TodoList/>}/>
                    <Route path="*" element={<NoMatch/>}/>
                </Routes>
                <NavBar/>
            </GlobalProvider>
        </section>
    );
}
