import { useForm } from "react-hook-form";
const data = ["name", "company", "role"];

export default function Form() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const inputRegister = data.map((item) => (
    <input defaultValue="" {...register(item)} />
  ));

  const onSubmit = (data) => {};

  
  return (
    <div>
      <div className="form">
        <form id="form" onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="name">Name</label>
          <input defaultValue="" {...register("name")} />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}
