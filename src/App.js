import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from "./components/NavBar";
import {Route, Routes} from "react-router-dom";
import AddTask from "./components/AddTask";
import TodoList from "./components/TodoList";

export default function App() {
    return (
        <section id="todo">
            <Routes>
                <Route path="/add-task" element={<AddTask/>}/>
                <Route path="/" element={<TodoList/>}/>
            </Routes>
            <NavBar/>
        </section>
    );
}
