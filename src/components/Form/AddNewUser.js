import { useForm } from "react-hook-form";
const data = ["name", "company", "role"];




// const Input = ({name, register}) => {
//     return (
       
//     )
// }

export default function AddNewUser() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();


  const onSubmit = (data) => console.log(data);

  console.log(watch("name") ? "True": "False")
  
  return (
    <div>
      <div className="form">
        <form id="add-new-user-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="input-group">
                <input className={watch("name") ? "typing" : ""} type="text" {...register("name")}/>
                <label>Name</label>
            </div>
            <div className="input-group">
                <input className={watch("phone") ? "typing" : ""} {...register("phone")} type="number"/>
                <label>Phone Number</label>
            </div>
            <div className="input-group">
                <input className={watch("state/region") ? "typing" : ""} type="text" {...register("state/region")}/>
                <label>State/Region</label>
            </div>
            <div className="input-group">
                <input className={watch("address") ? "typing" : ""} type="text" {...register("address")}/>
                <label>Address</label>
            </div>
            <div className="input-group">
                <input className={watch("company") ? "typing" : ""} type="text" {...register("company")}/>
                <label>Company</label>
            </div>
            <div className="input-group">
                <input className={watch("email") ? "typing" : ""} type="email" {...register("email")}/>
                <label>Email Address</label>
            </div>
            <div className="input-group">
                <input className={watch("major") ? "typing" : ""} type="text" {...register("major")}/>
                <label>Major</label>
            </div>
            <div className="input-group">
                <input className={watch("country") ? "typing" : ""} type="text" {...register("country")}/>
                <label>Country</label>
            </div>
            <div className="input-group">
                <input className={watch("city") ? "typing" : ""} type="text" {...register("city")}/>
                <label>City</label>
            </div>
            <div className="input-group">
                <input className={watch("zipcode") ? "typing" : ""} type="text" {...register("zipcode")}/>
                <label>Zip Code</label>
            </div>
        </form>
        <div className="controls">
             <button className="btn btn-create-user"onClick={handleSubmit(onSubmit)}>Create User</button>
        </div>
      </div>
    </div>
  );
}
