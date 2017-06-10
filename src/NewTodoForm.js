import React, { Component } from 'react';

class NewTodoForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: "",
      description: ""
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
      <form onSubmit={(e) => {
        e.preventDefault();
        this.props.addTodo(e, this.state.title, this.state.description);
        this.setState({
          title: "",
          description: ""
        })
      }}>
        Add a Todo Item:
        <input 
          type="text" 
          name="title" 
          onChange={this.handleChange}
          placeholder="title" 
          value={this.state.title}>
        </input>
        <input 
          type="text" 
          name="description"
          placeholder="description" 
          onChange={this.handleChange}
          value={this.state.description}>
        </input>
        <input type="submit" value="Add New Todo"></input>
      </form>
    )
  }
}

export default NewTodoForm;
