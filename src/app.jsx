import React, { Component } from "react";
import NavBar from "./components/nav";
import Cart from "./components/shoping_cart";

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Cart />
      </React.Fragment>
    );
  }
}

export default App;
