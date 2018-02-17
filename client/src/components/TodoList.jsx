import React from 'react';
import Todo from './Todo.js';

const TodoList = (props) => {
  return (
    <div className="task-list">
      <h3> Todos </h3>
      <ul className="list-group">
        { props.todos.map((todo)=> {
          return <Todo todo={todo} key={todo.name} updateComplete={props.updateComplete}/>
        })}
      </ul>
    </div>
  )
};

export default TodoList