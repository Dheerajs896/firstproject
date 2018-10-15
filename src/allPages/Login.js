import React, { Component } from "react";
import axios from "axios";
class Login extends Component {
  state = {
    email: "",
    pwd: "",
    loading: false
  };

  changeHandler = event => {
    this.setState({
      email: event.target.value,
      pwd: event.target.value
    });
  };

  SubmitHandler = event => {
    event.preventDefault();
    const loginData = {
      email: this.state.email,
      pwd: this.state.pwd
    };

    axios.post("api/login.php", loginData).then(res => {
      if (res.data.status === "false") {
        alert(res.data.msg);
      } else {
        alert(res.data.msg);
      }
    });
  };
  render() {
    return (
      <div>
        <div class="container">
          <h2>Login Form</h2>
          <form onSubmit={this.SubmitHandler}>
            <div class="form-group">
              <label for="email">Email</label>
              <input
                type="email"
                class="form-control"
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
                class="form-control"
                id="pwd"
                placeholder="Enter password"
                name="pwd"
                onChange={this.changeHandler}
              />
            </div>
            <button type="submit" class="btn btn-default">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
