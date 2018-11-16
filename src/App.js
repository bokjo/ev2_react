import React, { Component } from 'react';

const test = 6;
class App extends Component {

  constructor(){
    super();

    this.state = {
      posts: []
    }
    
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      this.setState({
        posts: data
      });
    })
    .catch((err) => {
      console.log(err)
    })
  }

  render() {
    return (
     <div>        
     {
       this.state.posts.map((item, index) => {
         return (
          <div key={item.id}>
            <h3>{item.id}. {item.title}</h3>
            <p>{item.body}</p>
          </div>
         );
       })
     }
     <button onClick={this.ChangePage(-1)}>Previous</button>
     <button onClick={this.ChangePage(+1)}>Next</button>
     </div>
    );
  }
}

export default App;
