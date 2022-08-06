import React from "react";
import { Link, NavLink } from "react-router-dom";
const NavBar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container-fluid">
        <h2 className="navbar-brand ms-4">Shopping Cart</h2>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink to="/home" className="nav-link">
              Home
            </NavLink>
            <NavLink to="/menu" className="nav-link">
              Menu
            </NavLink>
            <NavLink to="/about" className="nav-link">
              About
            </NavLink>
            <NavLink to="/contact" className="nav-link">
              Contact
            </NavLink>
          </div>
        </div>
        <div className="dropdown me-3">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Log In
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <Link to="/login" className="dropdown-item">
                register
              </Link>
            </li>
            <li>
              <Link to="/dashboard" className="dropdown-item">
                Admin
              </Link>
            </li>
          </ul>
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
