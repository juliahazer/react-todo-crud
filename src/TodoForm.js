import React, { Component } from 'react';
import './TodoBox.css';

class TodoForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: this.props.title,
      description: this.props.description
    }
    this.handleChange = this.handleChange.bind(this);
  }

  addFocus() {
    this.input.focus();
  }

  componentDidMount(){
    this.input.focus();
  }

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    //defaults for add form
    var classVal = "";
    var formTitle = "Add a";
    var submitBtnText = "Add a New Todo"
    var cancelBtn = null;

    //switch defaults if an edit form
    if (this.props.type === 'edit'){
      classVal += "TodoBox EditTodoForm";
      formTitle = "Edit";
      submitBtnText = "Edit"
      cancelBtn = <button onClick={this.props.cancelTodo}>Cancel</button>;
    } 

    return (
      <div className={classVal}>
        <form onSubmit={(e) => {
          e.preventDefault();
          this.props.actionTodo(this.props.type, this.state.title, this.state.description);
          this.setState({
            title: "",
            description: ""
          });
          this.addFocus();
        }}>
          <h4>{formTitle} Todo Item:</h4>
          <label htmlFor="title">Title:</label>
          <input 
            className='inputs'
            type="text" 
            name="title" 
            id="title"
            onChange={this.handleChange}
            ref={el => this.input = el}
            placeholder="title" 
            value={this.state.title}>
          </input>
          <label htmlFor="description">Description: </label>
          <input 
            className='inputs'
            type="text" 
            name="description"
            id="description"
            placeholder="description" 
            onChange={this.handleChange}
            value={this.state.description}>
          </input>
          <input type="submit" value={submitBtnText}></input>
          {cancelBtn}
        </form>
      </div>
    )
  }
}

export default TodoForm;
