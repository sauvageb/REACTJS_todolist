import {useForm} from "react-hook-form";
import {useContext} from "react";
import {GlobalContext} from "./GlobalState";

const AddTask = () => {

    const {register, handleSubmit, reset} = useForm();
    const {addTask} = useContext(GlobalContext);

    const createTask = async (data) => {
        try {
            // const response = await axios.post("http://localhost:4000/tasks", data);
            // console.log(response.data);
            addTask({...data, 'completed': false})
            reset();
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <>
            <div className='container'>
                <h1 className="m-3">Ajout d'une tâche</h1>
                <form className="m-3" onSubmit={handleSubmit(createTask)}>
                    <div className="form-group mb-2">
                        <label htmlFor="name">Nom</label>
                        <input {...register("name")}
                               type="text" className="form-control" id="name" placeholder="Nom de votre tâche"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Créer
                    </button>
                </form>
            </div>
        </>);
}

export default AddTask;
