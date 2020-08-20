import React, { Component } from "react";
//Class
class Login extends Component {
  constructor() {
    super();

    //State
    this.state = {
      username: "",
      password: "",
    };
    this.handleLogin = this.handleLogin.bind(this);
    //Username
  }
  handleUsernameChange(name) {
    this.setState({ username: name });
  }
  //Password
  handlePasswordChange(pass) {
    this.setState({ password: pass });
  }
  //Login
  handleLogin() {
    alert(`Username: ${this.state.username} Password: ${this.state.password}`);
  }

  //Render and return
  render() {
    return (
      <div>
        <input
          onChange={(e) => this.handleUsernameChange(e.target.value)}
          type="text"
        />
        <input
          onChange={(e) => this.handlePasswordChange(e.target.value)}
          type="text"
        />
        <button onClick={this.handleLogin}>
          <strong>login💻</strong>
        </button>
      </div>
    );
  }
}
//Export
export default Login;
