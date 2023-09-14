import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from "./components/NavBar";
import {Route, Routes} from "react-router-dom";
import AddTask from "./components/AddTask";
import TodoList from "./components/TodoList";
import Login from "./components/Login";
import NoMatch from "./components/NoMatch";

export default function App() {
    return (
        <section id="todo">
            <Routes>
                <Route path="/add-task" element={<AddTask/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/tasks/:search" element={<TodoList/>}/>
                <Route path="/tasks" element={<TodoList/>}/>
                <Route path="*" element={<NoMatch/>}/>
            </Routes>
            <NavBar/>
        </section>
    );
}
