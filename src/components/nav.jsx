import React from "react";
import { Link } from "react-router-dom";
const NavBar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <h2 className="navbar-brand ms-4">Shopping Cart</h2>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link to="/" className="nav-link active">
              Home
            </Link>
            <Link to="/about" className="nav-link">
              About
            </Link>
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </div>
        </div>
        <span className="badge bg-info me-4 fs-6">
          <i className="fas fa-shopping-cart"></i>
          {props.productsCount}
        </span>
      </div>
    </nav>
  );
};

export default NavBar;
