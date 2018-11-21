import React from 'react';
import {Route, Link} from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>HElloz!</h1>
        <nav>
          <Link to="/" >Home</Link>
        </nav>
        <Route path="/" exact component={Titles}/>
        <Route path="/posts/:id" component={Post}/>
      </div>
    )
  }
}

class Post extends React.Component {
  constructor() {
    super();
    this.state = {
      post: {}
    }
  }

  componentDidMount() {
    let url = "https://jsonplaceholder.typicode.com/posts/"+this.props.match.params.id;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        this.setState({
          post: data
        })
      });
  }

  render () {
    return (
      <div>
        <h2>{this.state.post.title}</h2>
        <p>{this.state.post.body}</p>
      </div>
    )
  }
}

class Titles extends React.Component {

  constructor () {
    super();
    this.state = {
      posts: []
    }
  }

  componentDidMount () {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => {
        this.setState({
          posts: data
        })
      });
  }

  render () {
    return (
      <ul>
        {this.state.posts.map((p) => {
          return (<li key={p.id}>
            <Link to={`/posts/${p.id}`}>{p.title}</Link>
          </li>)
        })}
      </ul>
    )
  }
}

export default App;
