import {FaCheckSquare, FaListAlt, FaPlusSquare, FaTrash} from "react-icons/fa";
import {NavLink} from "react-router-dom";

export default function NavBar() {
    return (
        <footer className="d-flex justify-content-between bg-secondary p-3" id="mainFooter">
            <div className="btn-group">
                {/* All tasks */}
                <NavLink
                    to="/tasks"
                    className={({isActive}) =>
                        isActive
                            ? 'btn bg-light btn-light'
                            : 'btn bg-light btn-light'
                    }><FaListAlt/></NavLink>

                {/* Completed tasks */}
                <NavLink to="/tasks/completed"
                         className={({isActive}) =>
                             isActive
                                 ? 'btn bg-light btn-light'
                                 : 'btn bg-light btn-light'
                         }><FaCheckSquare/></NavLink>
                {/* Add Task */}
                <NavLink to="/add-task"
                         className={({isActive}) =>
                             isActive
                                 ? 'btn bg-light btn-light'
                                 : 'btn bg-light btn-light'
                         }><FaPlusSquare/></NavLink>
            </div>

            <NavLink to="/add-task"
                     className={({isActive}) =>
                         isActive
                             ? 'btn bg-light btn-light'
                             : 'btn bg-light btn-light'
                     }><FaTrash/></NavLink>

        </footer>);
}
