import React, { Component } from 'react';
import ToDoForm from './ToDoForm';
import ToDoContainer from './ToDoContainer';
class App extends Component {

  constructor () {
    super();

    this.state = {
        // EMPTY TODOS ON START
        todos: [
          "oen",
          "two",
          "tree",
        ]
    };

    this.addToDo = this.addToDo.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }
  
  addToDo(todo) {
    this.setState({
      todos: [...this.state.todos, todo]
    })    
  }

  removeItem(index) {
    this.setState({
      todos: this.state.todos.filter((v, i) => index !== i)
    })
  }

  render() {
    return (
     <div> 
         <ToDoForm addToDo={this.addToDo}/>
         <ToDoContainer todos={this.state.todos} removeItem={this.removeItem}/>
     </div>
    );
  }
}

export default App;
