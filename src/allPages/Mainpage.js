import React, { Component } from "react";
import axios from "axios";

class Mainpage extends Component {
  componentWillMount = () => {
    axios.post("api/showUser.php").then(res => {
      console.log(res.data);
    });
  };
  render() {
    return (
      <div className="bodyContaint">
        <h1>Welcome to first React Project</h1>
      </div>
    );
  }
}

export default Mainpage;
