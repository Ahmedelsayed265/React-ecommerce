import React, { Component } from "react";
class NavBar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <h2 className="navbar-brand ms-4">
            Shopping Cart
          </h2>
        </div>
      </nav>
    );
  }
}

export default NavBar;
