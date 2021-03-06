import React from 'react';
import './TodoBox.css';

const Todo = ({title, description, complete, markComplete, remove, editing}) => {
  return (
    <div className={complete ? "TodoBox complete" : "TodoBox"}>
      <h1>{title}</h1>
      <p>{description}</p>
      <button onClick={markComplete}>
        {complete ? "Incomplete" : "Complete"}
      </button>
      <button onClick={remove}>
        X
      </button>
      <button onClick={editing}>
        Edit
      </button>
    </div>
  )
};

export default Todo;
