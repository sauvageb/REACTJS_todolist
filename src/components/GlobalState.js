import {createContext, useEffect, useReducer} from "react";
import appReducer from './AppReducer';
import axios from "axios";

const initialState = {
    tasks: [],
};
const BASE_API = 'http://localhost:4000';
export const GlobalContext = createContext(initialState);

export function GlobalProvider({children}) {
    const [state, dispatch] = useReducer(appReducer, initialState);

    const addTask = async (task) => {
        try {
            const response = await axios.post("http://localhost:4000/tasks", task);
            dispatch({
                type: "ADD_TASK",
                payload: response.data
            });
        } catch (error) {
            console.error("Error:", error);
        }
    }

    const editTask = async (task) => {
        try {
            task.completed = !task.completed;
            const response = await axios({
                method: 'put',
                url: `${BASE_API}/tasks/${task.id}`,
                data: task
            });
            dispatch({
                type: "EDIT_TASK",
                payload: task
            });
        } catch (error) {
            console.error('Une erreur s\'est produite lors de la suppression des tâches complétées :', error);
        }
    }

    const removeTask = (id) => {
        dispatch({
            type: "REMOVE_TASK",
            payload: id
        });
    }

    const removeTasksCompleted = async () => {
        try {
            const response = await axios.get(`${BASE_API}/tasks`);
            const allTasks = response.data;
            const completedTasks = allTasks.filter(task => task.completed);
            for (const task of completedTasks) {
                await axios.delete(`${BASE_API}/tasks/${task.id}`);
            }
            dispatch({
                type: "REMOVE_COMPLETED_TASKS"
            });
        } catch (error) {
            console.error('Une erreur s\'est produite lors de la suppression des tâches complétées :', error);
        }
    }

    useEffect(() => {
        axios.get(`${BASE_API}/tasks`)
            .then((response) => {
                dispatch({
                    type: 'ALL_TASKS',
                    payload: response.data,
                });
            })
            .catch((error) => {
                console.error('Erreur lors de la récupération des données de l\'API :', error);
            });
    }, []);


    return (
        <GlobalContext.Provider value={{tasks: state.tasks, addTask, editTask, removeTasksCompleted}}>
            {children}
        </GlobalContext.Provider>
    );
}

// export function useTaskContext() {
//     return useContext(GlobalProvider);
// }
