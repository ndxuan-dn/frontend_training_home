
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux";
import { add } from "../../modules/redux/actions";



export default function Form() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm()

    const value = useSelector((state) => state)
    const dispatch = useDispatch();
    const onSubmit = (data) => dispatch(add(data))

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