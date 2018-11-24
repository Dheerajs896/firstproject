import React, { Component } from "react";
import axios from "axios";
import Spinner from "./Spinner";

class Mainpage extends Component {
  state = {
    userData: [],
    loader: true,
    showData: ""
  };
  componentWillMount = () => {
    axios.post("api/showUser.php").then(res => {
      if (res.data.status === "true") {
        this.setState({ loader: false });
      }
      const userData = res.data.data;
      this.setState({ userData });
      const showData = localStorage.getItem("login");
      this.setState({ showData });
    });
  };
  render() {
    let c;
    if (this.state.loader) {
      return (
        <div className="Loader">
          <Spinner />
        </div>
      );
    }
    return (
      <div className="bodyContaint">
        {this.state.showData ? (
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Mobile No</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {this.state.userData.map(row => (
                <tr key={row.id}>
                  <td>{row.id}</td>
                  <td>{row.name}</td>
                  <td>{row.number}</td>
                  <td>{row.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <h1 className="heading">Welcome to first React Project</h1>
        )}
      </div>
    );
  }
}

export default Mainpage;
