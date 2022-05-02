import React from "react";
import Button from "./Button";
import "../styles/forminput.css"

class FormInput extends React.Component{
    state = {
        text: ""
    }

    change = e => {
        this.setState({
            text: e.target.value
        })
    }

    submit = e => {
        e.preventDefault()
        if(this.state.text !== ""){
            this.props.add(this.state.text)
        }
        this.setState({text: ""})
    }
    render(){
        return(
            <form style={inputForm} onSubmit={this.submit}>
                <input 
                    type="text" 
                    style={input} 
                    placeholder="Add Task"
                    onChange={this.change}
                    value= {this.state.text}
                />
                <Button text="Add" variant="primary" action={this.submit}/>
            </form>
        )
    }
}

export default FormInput
const inputForm={
    background: "#FFF",
    color: "#FFF",
    display: "flex",
    alignItems: "center",
    height: "3rem",
    padding: "0px 1rem",
    justifyContent: "space-between",
    margin: "0.5rem 0"
}

const input = {
    width: "70%",
    border: "none",
}