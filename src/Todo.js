import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
  render() {
    var completeStr = "";
    var btnText = "Complete?";
    if (this.props.complete === true){
      completeStr = " complete"
      btnText = "Incomplete?"
    }
    return (
      <div className={"TodoBox" + completeStr}>
        <h1>{this.props.title}</h1>
        <p>{this.props.description}</p>
        <button onClick={this.props.markComplete}>
          {btnText}
        </button>
        <button onClick={this.props.remove}>
          X
        </button>
        <button onClick={this.props.editing}>
          Edit
        </button>
      </div>
    )
  }
}

export default Todo;
