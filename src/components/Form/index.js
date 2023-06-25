import axios from "axios";
import { createStudentsSync } from "../../modules/redux/reducers";
import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux";


export default function Form() {
    const dispath = useDispatch();

    const { register, handleSubmit, watch, formState: { errors } } = useForm()

    const onSubmit = (data) => {
        dispath(createStudentsSync(data))
    };


    return (
        <div className="form">
            <form id="form" onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="name">Name</label>
                <input defaultValue="" {...register("name")}/>
                <button>Submit</button>
            </form>
            
        </div>
    )
}