import {useParams} from "react-router-dom";
import Task from "./Task";
import {useContext} from "react";
import {GlobalContext} from "./GlobalState";

export default function TodoList() {
    const {search} = useParams();
    const {tasks} = useContext(GlobalContext);

    return (
        <div className='container'>
            <section id="todo">
                <h1 className="m-3">Liste de tâches</h1>
                <ul className="list-group m-3">
                    {search
                        ? tasks.filter(t => t.completed).map(t => (
                            <Task key={t.id} task={t}></Task>
                        ))
                        : tasks.filter(t => !t.completed).map(t => (
                            <Task key={t.id} task={t}></Task>
                        ))}
                </ul>
            </section>
        </div>
    );
}
