import {FaCheckSquare, FaListAlt, FaPlusSquare, FaTrash} from "react-icons/fa";
import {NavLink, useLocation} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {GlobalContext} from "./GlobalState";

export default function NavBar() {
    const {removeTasksCompleted} = useContext(GlobalContext);
    const [isTodoListCompletedVisible, setTodoListCompletedVisible] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setTodoListCompletedVisible(location.pathname.includes("/tasks/completed"));
    }, [location.pathname]);


    const onTrashClicked = () => {
        removeTasksCompleted();
    }

    return (
        <footer className="d-flex justify-content-between bg-secondary p-3" id="mainFooter">
            <div className="btn-group">

                <NavLink
                    to="/tasks"
                    className={({isActive}) =>
                        isActive
                            ? 'btn bg-light btn-light'
                            : 'btn bg-light btn-light'
                    }><FaListAlt/></NavLink>

                <NavLink to="/tasks/completed"
                         className={({isActive}) =>
                             isActive
                                 ? 'btn bg-light btn-light'
                                 : 'btn bg-light btn-light'
                         }><FaCheckSquare/></NavLink>

                <NavLink to="/add-task"
                         className={({isActive}) =>
                             isActive
                                 ? 'btn bg-light btn-light'
                                 : 'btn bg-light btn-light'
                         }><FaPlusSquare/></NavLink>
            </div>

            {isTodoListCompletedVisible && <button onClick={() => onTrashClicked()}
                                                   className="btn btn-outline-dark bg-light"><FaTrash/></button>}

        </footer>);
}
