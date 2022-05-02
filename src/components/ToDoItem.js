import React from "react";
import Button from "./Button"
import propTypes  from "prop-types"

const ToDoItem = ({todo,del,openModal}) => {
    const delById = id => {
        del(id)
    }
    return(
        <div style={todoItem}>
            <p>{todo.title}</p>
            <div>
                <Button text="Edit" variant="success" action={()=>openModal(todo.id, todo.title)} />
                <Button text="Delete" variant="danger" action={()=> delById(todo.id)} />
            </div>
        </div>
    )
 
}
ToDoItem.propTypes ={
    todo: propTypes.object.isRequired
}
export default ToDoItem;

const todoItem ={
    background: "#218DFD",
    color: "#FFF",
    display: "flex",
    alignItems: "center",
    height: "3rem",
    padding: "0px 1rem",
    justifyContent: "space-between",
    margin: "0.5rem 0"
}