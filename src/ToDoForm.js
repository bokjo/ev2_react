import React, { Component } from 'react';

class ToDoForm extends Component {

  constructor () {
    super();

    this.state = {
       input: ''
    };

    this.clickHandler = this.clickHandler.bind(this);
    this.inputChange = this.inputChange.bind(this);
  }

  clickHandler() {
    this.props.addToDo(this.state.input)
    this.setState({
      input: ''
    })
  }
  
  inputChange(e){
    this.setState({
      input: e.target.value
    })
  }

    render() {
  
      return (
       
         <div>
           <h2>TODO</h2>
           <label htmlFor="todo">New todo...</label>
           <input name="todo" type="text" onChange={this.inputChange} value={this.state.input}/>
           <button name="AddToDo" onClick={this.clickHandler}>Add</button>
         </div>
      
      );
    }
  }
  
  export default ToDoForm;