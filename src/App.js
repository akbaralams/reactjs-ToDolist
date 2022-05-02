import React from 'react';

import FormInput from './components/FormInput';
//import Button from './components/Button';
import ToDoItem from './components/ToDoItem';
import EditModal from './components/EditModal';
import logo from './logo.svg';
import './App.css';
//import { render } from '@testing-library/react';

class App extends React.Component {
  state = {
    todos : [
      {
        id : 1,
        title: "Harry Potter"
      },
      {
        id : 2,
        title: "Harry Keder"
      }
    ],
    isEdit : false,
    isDelete: false,
    editData: {
      id: "",
      title: ""
    }
  }

  setTitle = e => {
    this.setState({
      editData: {
        ...this.state.editData,
        title: e.target.value
      }
    })
    //console.log(this.state.editData)
  }

  update = () =>{
    const {id , title} = this.state.editData
    const newData = {id,title}
    const newTodos = this.state.todos
    newTodos.splice((id-1), 1, newData)
    //console.log(newTodos);
    this.setState({
      todos: newTodos,
      isEdit: false,
      editData: {
        id: "",
        title: ""
      }
    })
  }
  
  openModal = (id,data,aksi) => {
    //console.log(data);
    if(aksi === "delete"){
      console.log("Delete");
      this.setState({
        isEdit: false,
        isDelete: true,
        editData : {
          id,
          title: data
      }})
    }else{
      this.setState({
        isEdit: true,
        isDelete: false,
        editData : {
          id,
          title: data
      }})
      console.log("Edit");
    }
  }

  closeModal = () => {
    this.setState({
      isEdit: false,
      isDelete: false
    })
  }

  deleteTask = id =>{
    this.setState({
      todos: this.state.todos.filter(item=>item.id !== id),
      isEdit: false,
      isDelete: false,
      editData: {
        id: "",
        title: ""
      }
    })
  }

  addTask = data => {
    const id = this.state.todos.length
    const newData = {
      id: id+1,
      title: data
    }
    this.setState({
      todos: [...this.state.todos,newData]
    })
  }
  render(){
    const {todos} = this.state;
    return (
      <div className="app">
        <div className="logo">
          <img src={logo} alt="logo" />
          <h3>Task List</h3>
        </div>
        <div className="list">
          {todos.map(item=>
            <ToDoItem 
            key={item.id} 
            todo={item} 
            openModal= {this.openModal} />
            )
          }
        </div>
        <div className="input-form">
          <FormInput add={this.addTask}/>
        </div>
        
        <EditModal 
          edit={this.state.isEdit} 
          delete={this.state.isDelete} 
          closeModal={this.closeModal} 
          change={this.setTitle} 
          data={this.state.editData}
          update={this.update}
          del={this.deleteTask} 
        />
      </div>
    );
  }
}

export default App;
