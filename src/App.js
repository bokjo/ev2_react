import React from 'react';
import { connect } from 'react-redux';
class App extends React.Component {

  render() {
    return(
      <div>
        <div>Hellooooo</div>
        <ConnectedPosts />
      </div>
    );
  }
}

const mapStateToProps= (state) => {
  return {
    posts: state.posts
  }
}

class Posts extends React.Component {

  render() {
    return (
      <ul>
      {
        this.props.posts.map((p,i) => {
          return (
            <li key={i}>
              <h2>{p.title}</h2>
              <p>{p.body}</p>
            </li>
          )
        }
        )
      }  
      </ul>  
    )
  }
}

const ConnectedPosts = connect(mapStateToProps)(Posts);

export default App;
