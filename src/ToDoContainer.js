import React, { Component } from 'react';

class ToDoContainer extends Component {

  deleteToDo(index){
    this.props.removeItem(index)
  }

    render() {
  
      return (
       <div> 
         <ul>
           {
             this.props.todos.map((todo, i) => {
               return (
                 <li key={i}>
                 #{i} {todo}
                 <button onClick={() => this.deleteToDo(i)}>&times;</button>
                 </li>
               );
             })
          }
         </ul>
       </div>
      );
    }
  }

  export default ToDoContainer;


