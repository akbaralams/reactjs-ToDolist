import React from "react";
import Button from "./Button"
import "../styles/editmodal.css"

class EditModal extends React.Component{
    render(){
        const {edit,closeModal,data,change,update} = this.props
        if(edit){
            return(
                <div className="modal-container">
                    <div className="modal-box">
                        <h3>Edit Task</h3>
                        <div className="input">
                            <input type="text" value={data.title} onChange={change}  />
                        </div>
                        <div className="btn-group">
                            <Button text="Edit" variant="success" action={update}/>
                            <Button text="Cancel" variant="danger" action={closeModal}/>
                        </div>
                    </div>
                </div>
            )
        }else{
            return null
        }
    }
}

export default EditModal