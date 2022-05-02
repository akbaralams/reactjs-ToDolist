import React from "react";
import Button from "./Button"
import "../styles/editmodal.css"

class EditModal extends React.Component{
    render(){
        const {edit,closeModal,data,change,update,del} = this.props
        const hapus = this.props.delete
        console.log(this.props);
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
                            <Button text="Cancel" variant="secondary" action={closeModal}/>
                        </div>
                    </div>
                </div>
            )
        }else if(hapus){
            return(
                <div className="modal-container-delete">
                    <div className="modal-box-delete">
                        <h3>Delete Task {data.title}</h3>
                        <div className="btn-group">
                            <Button text="Delete" variant="danger" action={()=>del(data.id)}/>
                            <Button text="Cancel" variant="secondary" action={closeModal}/>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default EditModal