import React from "react";
import "../styles/button.css"

const Button = ({text,variant,action}) => {
    return(
        <button className={`btn btn-${variant}`} onClick={action}>{text}</button>
    )
 
}

export default Button;