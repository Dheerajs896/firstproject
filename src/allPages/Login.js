import React, { Component } from "react";
import axios from "axios";
import Spinner from "./Spinner";
//import HomePage from "./Mainpage";
import { Redirect } from "react-router";

class Login extends Component {
  state = {
    email: "",
    pwd: "",
    loading: false,
    redirect: false
  };

  changeHandler = event => {
    var name = event.target.name;
    var value = event.target.value;
    this.setState({ [name]: value });
  };

  SubmitHandler = event => {
    event.preventDefault();
    this.setState({ loading: true });
    const loginData = {
      email: this.state.email,
      pwd: this.state.pwd
    };

    axios.post("api/login.php", loginData).then(res => {
      if (res.data.status === "false") {
        this.setState({ loading: false });
        alert(res.data.msg);
      } else {
        this.setState({ loading: false, redirect: true });
        localStorage.setItem("login", "Done");
        alert(res.data.msg);
      }
    });
  };
  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <div class="container">
          <h2>Login Form</h2>
          <form onSubmit={this.SubmitHandler}>
            <div className="form-group">
              <label for="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter email"
                name="email"
                onChange={this.changeHandler}
              />
            </div>
            <div class="form-group">
              <label for="pwd">Password</label>
              <input
                type="password"
                className="form-control"
                id="pwd"
                placeholder="Enter password"
                name="pwd"
                onChange={this.changeHandler}
              />
            </div>
            {this.state.loading ? (
              <Spinner />
            ) : (
              <button type="submit" class="btn btn-default">
                Submit
              </button>
            )}
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
