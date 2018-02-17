import React from 'react';
import ReactDOM from 'react-dom';
import update from 'immutability-helper';

import utils from './utils/index.js';
import CreateTodo from './components/CreateTodo.jsx';
import TodoList from './components/TodoList.jsx';


class App extends React.Component {
  // This is the constructor function which is invoked first
  // upon instantiation of this component
  constructor() {
    // Need to call super to invoke the inheritance from the parent class
    super()
    // We create the state object to store the persistent data of this component
    this.state = {
      todos: []
    };
    // We bind the below functions to the component.
    // By doing so we can call this function in any context and
    // have the keyword this always refer to our component
    this.handleTodos = this.handleTodos.bind(this);
    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.updateComplete = this.updateComplete.bind(this);
    this.setTodoInState = this.setTodoInState.bind(this);
    this.handleTodoSubmit = this.handleTodoSubmit.bind(this);
  }

  // This function is a lifecycle method. It is called after the component is
  // mounted onto the DOM. For more on lifecycle methods:
  // https://reactjs.org/docs/react-component.html#the-component-lifecycle
  componentDidMount() {
    // We call fetchTodos which returns a promise
       // we then chain it with .then(callback) 
       // the callback is invoked if the promise is successful
       // in our case the callback is the handleTodos fn which will set the todos
    utils.fetchTodos()
      .then((response) => {this.handleTodos(response.data)})
  }

  // Function responsible for setting all of the todos to our state
  handleTodos(todos) {
    this.setState({
      todos: todos
    })
  }

  // Function responsible for updating state with new todo
  handleAddTodo(todo) {
    this.setState((prevState)=>({
      todos : [...prevState.todos, todo] 
   }))
  }

  // Function responsible for sending todo to server and then updating local state
  handleTodoSubmit (name) {
    utils.createTodo(name)
      .then((response) => { this.handleAddTodo(response.data);})
      .catch(console.error);
  }

  updateComplete (todo, complete) {
    let newTodo = {...todo};
    newTodo.complete = complete;
    console.log("newTodo: ", newTodo);
    utils.updateTodo(newTodo)
      .then( (response) => {
        debugger;
        this.setTodoInState(response.data)
      })
      .catch(console.error);
  }

  setTodoInState(todo) {
    var data = this.state.todos;
    var todoIndex = data.findIndex(function(c) { 
      return c.name == todo.name; 
    });

    var newTodos = update(data, {
      $splice: [[todoIndex, 1, todo]]
    });

    this.setState({todos: newTodos});
  }

  // https://reactjs.org/docs/react-component.html#render
  // This function is a lifecycle method which will typically create a React Element
  // as a representation of html (ex. <div></div>) or a user-defined component (ex. <Todo/>). 
  
  // The actual mounting of a React Element to the DOM is via ReactDOM.render
  // https://reactjs.org/docs/react-dom.html#render
  
  // In the below render we are mapping across all the todos and for each todo 
  // instantiating a Todo component for each todo. Please note how we wrap any JS expressions
  // to be evaluated in a jsx template in {}

  // To read more about JSX templating: 
  // https://reactjs.org/docs/introducing-jsx.htm
  // https://reactjs.org/docs/jsx-in-depth.html
  render () {
    return (
      <div className='container'>
        <CreateTodo handleSubmit={this.handleTodoSubmit} />
        <TodoList todos={this.state.todos} updateComplete={this.updateComplete}/>
      </div>
    )
  };
};

ReactDOM.render( <App />, document.getElementById('app'));
