import React, { Component } from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';
import EditTodoForm from './EditTodoForm';

class TodoList extends Component {
  constructor(props){
    super(props);
    this.state = {
      todos: [
        {id: 1, title: "CRUD on Todo List", description: "Use React to finish building CRUD on todo list.", complete: false, editing: false},
        {id: 2, title: "Solo Project", description: "Go back and address feedback.", complete: false, editing: false},
        {id: 3, title: "Final React Project", description: "Build a game using React and upload to GitHub.", complete: false, editing: false}
      ]
    }
  }

  handleSubmit(e, title, description){
    var todos = this.state.todos.slice();
    var lastId = todos[todos.length-1].id;
    todos.push({
      id: ++lastId,
      title: title,
      description: description,
      complete: false,
      editing: false
    });
    this.setState({todos});
  }

  handleEditSubmit(id, title, description){
    var todos = this.state.todos.slice();
    for (var i = 0; i < todos.length; i++){
      if (todos[i].id === id){
        todos[i].editing = false;
        todos[i].title = title;
        todos[i].description = description;
        break;
      }
    }
    this.setState({todos});
  }

  changeComplete(id) {
    var todos = this.state.todos.slice();
    for (var i = 0; i < todos.length; i++){
      if (todos[i].id === id){
        if (todos[i].complete === true){
          todos[i].complete = false;
        } else {
          todos[i].complete = true;
        }
        break;
      }
    }
    this.setState({todos});
  }

  removeIt(id){
    var todos = this.state.todos.slice();
    for (var i = 0; i < todos.length; i++){
      if (todos[i].id === id){
        break;
      }
    }
    todos.splice(i, 1);
    this.setState({todos});
  }

  cancelEdit(id){
    var todos = this.state.todos.slice();
    for (var i = 0; i < todos.length; i++){
      if (todos[i].id === id){
        if (todos[i].editing === true){
          todos[i].editing = false;
        } else {
          todos[i].editing = true;
        }
        break;
      }
    }
    this.setState({todos});
  }

  changeEdit(id){
    var todos = this.state.todos.slice();
    for (var i = 0; i < todos.length; i++){
      if (todos[i].id === id){
        if (todos[i].editing === true){
          todos[i].editing = false;
        } else {
          todos[i].editing = true;
        }
        break;
      }
    }
    this.setState({todos});
  }

  render() {
    var todos = this.state.todos.map((el)=> {
      if (el.editing === false){
        return (<Todo 
          key={el.id} 
          title={el.title} 
          description={el.description} 
          complete={el.complete}
          markComplete={this.changeComplete.bind(this,el.id)}
          remove={this.removeIt.bind(this,el.id)}
          editing={this.changeEdit.bind(this,el.id)}
        />);
      } else {
        return (
          <EditTodoForm key={el.id} 
            editTodo={this.handleEditSubmit.bind(this, el.id)}
            cancelTodo={this.cancelEdit.bind(this, el.id)}
            id = {el.id}
            title={el.title}
            description={el.description}
          />
        )
      }
    })
    return (
      <div>
        <h1>Here is your todo list:</h1>
        {todos}
        <NewTodoForm key='1' addTodo={this.handleSubmit.bind(this)}/>
      </div>
    )
  }
}

export default TodoList;
