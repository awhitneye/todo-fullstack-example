import React from 'react';
import utils from '../utils';


// Creates a Todo component
const Todo = (props) => {
  return (
    <li className="list-group-item">
      <div>{props.todo.name}</div>
      <div>{utils.convertDateStringForInput(props.todo.date)}</div>
      <input className="form-check-input" type='checkbox' checked={props.todo.complete} onChange={() => { props.updateComplete(props.todo, !props.todo.complete); }}/>
    </li>
  )
}

export default Todo;