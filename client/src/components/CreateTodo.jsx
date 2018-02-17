import React from 'react';

class CreateTodo extends React.Component {
  constructor (props) {
    super();
    this.state = {
      name: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      name: e.target.value
    });
  }

  render () { 
    // Input has a change event listener which when triggered
    // calls handleChange with the event
    
    // Button has a submit event listener which when triggered calls the defined annonymous
    // fn which calls the handleSubmit fn (which was passed in from the parent) with the
    // name of the todo
    return  (
    <form>
      <input type='text' onChange={this.handleChange}></input>
      <button type="button" onClick={(e) => { this.props.handleSubmit(this.state.name)}}>Add Task</button>
    </form>
    )
  }
}

export default CreateTodo