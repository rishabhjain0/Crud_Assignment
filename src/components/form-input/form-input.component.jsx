import React from "react";


const FormInput = ({label, type,placeholder,handleChange,name})=>(
    <div className="form-group">
        <label>{label}:</label>
        <input type={type} className="form-control" name={name} placeholder={placeholder} onChange={handleChange}  />
    </div>
)
export default FormInput;