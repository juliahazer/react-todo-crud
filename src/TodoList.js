import React, { Component } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';
// import EditTodoForm from './EditTodoForm';

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

  handleSubmit(id, type, title, description){
    var todos = this.state.todos.slice();
    //if submitting an edit form
    if (type === 'edit'){
      for (var i = 0; i < todos.length; i++){
        if (todos[i].id === id){
          todos[i].editing = false;
          todos[i].title = title;
          todos[i].description = description;
          break;
        }
      }
    } else { //submitting an add form
      var lastId = todos[todos.length-1].id;
      todos.push({
        id: ++lastId,
        title: title,
        description: description,
        complete: false,
        editing: false
      });
    }
    this.setState({todos});
  }

  //switch state of todo item (complete/incomplete)
  changeComplete(id) {
    var todos = this.state.todos.slice();
    for (var i = 0; i < todos.length; i++){
      if (todos[i].id === id){
        todos[i].complete = !todos[i].complete;
        break;
      }
    }
    this.setState({todos});
  }

  //delete a todo item
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

  //switches editing state of todo item (true/false)
  changeEdit(id){
    var todos = this.state.todos.slice();
    for (var i = 0; i < todos.length; i++){
      if (todos[i].id === id){
        todos[i].editing = !todos[i].editing;
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
          markComplete={this.changeComplete.bind(this, el.id)}
          remove={this.removeIt.bind(this, el.id)}
          editing={this.changeEdit.bind(this, el.id)}
        />);
      } else {
        return (
          <TodoForm 
            key={el.id} 
            type="edit"
            actionTodo={this.handleSubmit.bind(this, el.id)}
            cancelTodo={this.changeEdit.bind(this, el.id)}
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
        <TodoForm 
          key='0' 
          type="add"
          actionTodo={this.handleSubmit.bind(this, null)} 
          title = ""
          description = ""
        />
      </div>
    )
  }
}

export default TodoList;
