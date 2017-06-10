import React, { Component } from 'react';
import './Todo.css';

class EditTodoForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: this.props.title,
      description: this.props.description
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <div className="TodoBox EditTodoForm">
        <form onSubmit={(e) => {
          e.preventDefault();
          this.props.editTodo(this.state.title, this.state.description);
        }}>
          <h4>Edit this Todo Item:</h4>
          <label for="title">Title:</label>
          <input 
            className='inputs'
            type="text" 
            name="title" 
            id="title"
            onChange={this.handleChange}
            placeholder="title" 
            value={this.state.title}>
          </input>
          <label for="description">Description: </label>
          <input 
            className='inputs'
            type="text" 
            name="description"
            id="description"
            placeholder="description" 
            onChange={this.handleChange}
            value={this.state.description}>
          </input>
          <input type="submit" value="Edit"></input>
          <button onClick={this.props.cancelTodo}>Cancel</button>
        </form>
      </div>
    )
  }
}

export default EditTodoForm;
