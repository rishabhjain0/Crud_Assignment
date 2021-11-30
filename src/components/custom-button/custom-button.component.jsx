import React from "react";

import "./custom-button.styles.css"

const CustomButton = ({text,color,handleSubmit})=>(
    <button className={`btn customBtnClass ${color}`} onClick={handleSubmit}>{text}</button>
)

export default CustomButton; 