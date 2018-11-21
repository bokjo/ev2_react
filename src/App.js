import React from 'react';
import {Route, Link, Redirect} from 'react-router-dom';

class App extends React.Component {

  constructor(){
    super();

    this.state = {
      loggedin: false
    }

    this.loginUser = this.loginUser.bind(this);

  }

  loginUser(){
    this.setState({
      loggedin: true
    })
  }
  

render() {
  return (
    <div>
      <h1>Title</h1>
      {/* <Route path="/" exact component={LoginForm} loginUser={this.loginUser.bind(this)}/> */}

      <Route exact path="/" render={()=> (
        this.state.loggedin ? 
        (
          <Redirect to="/dashboard" />
        ) : 
        (
          <LoginForm loginUser={this.loginUser} />
        )
      )}/>
      <Route path="/dashboard" exact render={()=> <Dashboard  />}/>

    </div>
  )
}

}

class Dashboard extends React.Component {
  render() {
    return (
      <div> DASHBOARD!</div>
    )
  }
}

class LoginForm extends React.Component {
  constructor(){

    super();
    this.state = {
      username: "",
      password: "",
    }

    
  this.logIn = this.logIn.bind(this);
  this.changeUsername = this.changeUsername.bind(this);
  this.changePassword = this.changePassword.bind(this);

  }

  logIn(){
    if (this.state.username === 'test' && this.state.password === 'test') {
      console.log("LOGIN!");
      this.props.loginUser();
    }
  }
  
  changeUsername(e){
    this.setState({
      username: e.target.value
    })
  }
  
  changePassword(e){
    this.setState({
      password: e.target.value
    })
  }

  render() {
    return (
      <div>
        <label>
          Username <br/>
          <input type="text" value={this.state.username} onChange={this.changeUsername}/>
        </label>
        <br />
        <label>
          Password <br/>
          <input type="password" value={this.state.password} onChange={this.changePassword} />
        </label>
        <br />
        <button onClick={this.logIn}>Log in</button>
      </div>
    )
  }
  

}


export default App;
