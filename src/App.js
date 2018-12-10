import React from 'react';
import { connect } from 'react-redux';
import { PostAdd, PostDelete } from './actions';

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

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (data) => {
      dispatch(PostAdd(data));
    },
    removePost: (data) => {
      dispatch(PostDelete(data));
    }
  }
}

const mapStateToProps= (state) => {
  return {
    posts: state.posts
  }
}

class Posts extends React.Component {

  constructor(){
    super();
    this.insertPost = this.insertPost.bind(this);
    this.deletePost = this.deletePost.bind(this);
  }

  insertPost() {
    this.props.addPost({
      title: "Post 3",
      body: "Ho Ho Ho"
    })
  }

  deletePost(data) {
    this.props.removePost(data)
  }
  
  render() {
    return (
      <ul>
      {
        this.props.posts.map((p,i) => {
          return (
            <li key={i}>
              <h2 onClick={this.insertPost}>{p.title}</h2>
              <p>{p.body}</p>
              <button onClick={() => this.deletePost(p)}>Remove</button>
            </li>
          )
        }
        )
      }  
      </ul>  
    )
  }
}

const ConnectedPosts = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default App;
