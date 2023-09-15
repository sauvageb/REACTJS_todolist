export default function appReducer(state, action) {
    switch (action.type) {

        case "ALL_TASKS":
            return {
                ...state,
                tasks: action.payload,
            };

        case "ADD_TASK":
            return {
                ...state,
                tasks: [...state.tasks, action.payload],
            };

        case "EDIT_TASK":
            const updatedTask = action.payload;
            const updatedTasks = state.tasks.map((task) => {
                if (task.id === updatedTask.id) {
                    return updatedTask;
                }
                return task;
            });
            return {
                ...state,
                tasks: updatedTasks,
            };

        case "REMOVE_TASK":
            return {
                ...state,
                tasks: state.tasks.filter(
                    (task) => !task.completed
                ),
            };

        case "REMOVE_COMPLETED_TASKS":
            return {
                ...state,
                tasks: state.tasks.filter((task) => !task.completed),
            };


        default:
            return state;
    }
};
