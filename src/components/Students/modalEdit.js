import { useState } from "react";

const editStudentFrom = ({register, handleSubmit, fromState, intialValue, onChange}) => {
    return (
        <form onSubmit={handleSubmit}>
            <label>Input name to change: </label>
            <input 
                {...register("name")}
                defaultValue={intialValue.name}
                value={intialValue.name}
                onChange={onChange}
            />
            <button type="submit">Change Name</button>
        </form>
    )
}

export default editStudentFrom;