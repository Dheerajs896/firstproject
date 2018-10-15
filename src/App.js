import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";

import Navigation from "./allPages/Navigation";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
