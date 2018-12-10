import React from 'react';
import {connect} from 'react-redux';
import {PostAdd, PostDelete} from './actions';

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (data) => {
      dispatch(PostAdd(data))
    },
    deletePost: (id) => {
      dispatch(PostDelete(id))
    }
  }
}

class App extends React.Component {
  render () {
    return (
      <div>
        <h1>Helloz!</h1>
        <ConnectedForm />
        <ConnectedPosts />
      </div>
    )
  }

}

class Posts extends React.Component {

  constructor() {
    super();
    this.insertPost = this.insertPost.bind(this);
  }

  insertPost(){
    this.props.addPost({
      title: "A new beginning",
      body: "The beginning blah blah blah..."
    })
  }

  deletePost(id) {
    this.props.deletePost(id)
  }

  render () {
    return (
      <ul>
        {this.props.posts.map((p, i) => {
          return (
            <li key={i}>
              <h2 onClick={this.insertPost}>{p.title}</h2>
              <p>{p.body}</p>
              <button onClick={() => this.deletePost(i)}>&times; Delete</button>
            </li>
          )
        })}
      </ul>
    )
  }
}

class PostForm extends React.Component {

  constructor () {
    super();

    this.state = {
      title: '',
      body: ''
    }

    this.titleChange = this.titleChange.bind(this);
    this.bodyChange = this.bodyChange.bind(this);
    this.savePost = this.savePost.bind(this);
  }

  titleChange (e) {
    this.setState({
      title: e.target.value
    });
  }

  bodyChange (e) {
    this.setState({
      body: e.target.value
    });
  }

  savePost () {
    if (this.state.title.length > 0 && this.state.body.length > 0){
      this.props.addPost({
        title: this.state.title,
        body: this.state.body
      })
    }
    this.setState({
      title: '',
      body: ''
    })
  }

  render () {
    return (
      <div>
        title: <br/>
        <input onChange={this.titleChange} value={this.state.title} />
        <br/>
        body: <br/>
        <textarea onChange={this.bodyChange} value={this.state.body}></textarea> <br/>
        <button onClick={this.savePost}>Save Post</button>
      </div>
    )
  }
}

const ConnectedForm = connect(mapStateToProps, mapDispatchToProps)(PostForm);
const ConnectedPosts = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default App;
