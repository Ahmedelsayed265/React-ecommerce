import React from "react";
import { Link, NavLink } from "react-router-dom";
const NavBar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <h2 className="navbar-brand ms-4">Shopping Cart</h2>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink to="/home" className="nav-link">
              Home
            </NavLink>
            <NavLink to="/about" className="nav-link">
              About
            </NavLink>
            <NavLink to="/contact" className="nav-link">
              Contact
            </NavLink>
          </div>
        </div>
        <Link to="/cart" className="badge bg-info me-4 fs-6">
          <i className="fas fa-shopping-cart"></i>
          {props.productsCount}
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
