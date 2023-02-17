import React, { Component } from 'react';

import './TodoForm.css';


class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() { 
    return (
      <form onSubmit={this.props.handleSubmit}>
        <input type="text" name="taskName" id="taskNameInput" value={this.props.formValue} onChange={this.props.handleChange} />
        <button type="submit">Submit</button>
      </form>
    );
  }
}
 
export default TodoForm;