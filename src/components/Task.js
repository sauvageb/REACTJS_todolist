import {useContext} from "react";
import {GlobalContext} from "./GlobalState";

const Task = ({task}) => {
    const {editTask} = useContext(GlobalContext);

    // Déterminez les classes CSS en fonction de l'état de complétion
    const taskClasses = `list-group-item d-flex align-items-center ${
        task.completed ? "bg-success" : ""
    }`;
    const buttonClasses = `btn btn-sm ms-auto ${
        task.completed ? "btn-success" : "btn-outline-success"
    }`;

    return (
        <li className={taskClasses} key={task.id}>
            {task.id}) {task.name}
            <button
                className={buttonClasses}
                onClick={() => editTask(task)}
            >
                &#x2713;
            </button>
        </li>
    );

    // return (<li className="list-group-item d-flex align-items-center">
    //     {task.name}
    //     <button className="btn btn-sm ms-auto btn-outline-success"
    //             onClick={() => updateTaskCompletion(task.id)}>&#x2713;</button>
    // </li>);
}

export default Task;
