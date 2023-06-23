import { useForm } from "react-hook-form";



const Form = () => {
    const {
        register,
        handlerSubmit,
        watch, 
        formState: { error }, 
    } = useForm()

    const onSubmit = (data) => console.log(data)

    console.log(watch("example"))


    return (
        <div>
            <form>
                <label>Name</label>
                <input />
                <button >Submit</button>
            </form>
        </div>
    )
}

export default Form;