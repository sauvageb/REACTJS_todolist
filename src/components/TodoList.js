import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

export default function TodoList() {
    const [tasks, setTasks] = useState([]);
    const {search} = useParams();

    useEffect(() => {
        fetch('../data.json')
            .then(res => res.json())
            .then(data => {
                switch (search) {
                    case 'completed':
                        setTasks(data.filter(task => task.completed));
                        break;
                    default:
                        setTasks(data);
                        break;
                }
            });
    }, [search]);

    return (
        <section id="todo">
            <h1 className="m-3">Liste de tâches</h1>
            <ul className="list-group m-3">

                {tasks.map(t => (
                    <li key={t.id} className="list-group-item d-flex align-items-center">
                        {t.name}
                        <button className="btn btn-sm ms-auto btn-outline-success">&#x2713;</button>
                    </li>)
                )}

            </ul>
        </section>
    );
}
