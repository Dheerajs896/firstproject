import React, { Component } from "react";
import axios from "axios";
import Spinner from "./Spinner";

class Registration extends Component {
  state = {
    name: "",
    number: "",
    email: "",
    pwd: "",
    loading: false
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
      [event.target.number]: event.target.value,
      [event.target.email]: event.target.value,
      [event.target.pwd]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ loading: true });
    const RegDetails = {
      name: this.state.name,
      number: this.state.number,
      email: this.state.email,
      pwd: this.state.pwd
    };
    axios.post("/api/register.php", RegDetails).then(res => {
      if (res.data.status === "false") {
        this.setState({ loading: false });
        alert(res.data.msg);
      } else {
        this.setState({ loading: false });
        alert(res.data.msg);
      }
    });
  };

  render() {
    return (
      <div>
        <div className="container">
          <h2>Registration Form</h2>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label for="email">Name</label>
              <input
                type="type"
                className="form-control"
                id="name"
                placeholder="Enter Name"
                name="name"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label for="email">number</label>
              <input
                type="type"
                className="form-control"
                id="number"
                placeholder="Enter Number"
                name="number"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label for="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter email"
                name="email"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label for="pwd">Password</label>
              <input
                type="password"
                className="form-control"
                id="pwd"
                placeholder="Enter password"
                name="pwd"
                onChange={this.handleChange}
              />
            </div>
            {this.state.loading ? (
              <Spinner />
            ) : (
              <button type="submit" className="btn btn-default">
                Submit
              </button>
            )}
          </form>
          <div />
        </div>
      </div>
    );
  }
}

export default Registration;
