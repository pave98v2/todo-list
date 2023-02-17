import React, { Component } from 'react';
import TodoItem from "../TodoItem/TodoItem.js"
import TodoForm from "../TodoForm/TodoForm.js"
import './Todo.css';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = { toDoList: [], formValue: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);  
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    if(e.target.taskName.value !== "") {
      this.setState(prevState => ({
        toDoList: [...prevState.toDoList, {id: Math.floor(Math.random() * 1000),
 taskName: e.target.taskName.value }], formValue: ""
      }))
    }
  }


  handleDelete(id) {
    this.setState({toDoList: this.state.toDoList.filter((task) => { 
        return task.id !== id
    })});
  }

  handleChange(e) {
    this.setState({formValue: e.target.value});
  }

  render() {
    return (
      <div className='TodoList'>
        <div className='list'>
          <ul>
            {this.state.toDoList.map((listItem) => { return <TodoItem data={listItem} handleDelete={this.handleDelete}></TodoItem> })}
          </ul>
        </div>
        <div className="form">
          <TodoForm handleSubmit={this.handleSubmit} handleChange={this.handleChange} formValue={this.state.formValue} />
        </div>
      </div>
    );
  }
}

export default Todo;