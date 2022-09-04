import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class MNavBar extends Component {
  state = {
    menues: [
      { name: "Movies", path: "/movies" },
      { name: "Customers", path: "/customers" },
      { name: "Rentals", path: "/rentals" },
      { name: "Login", path: "/login" },
      { name: "Register", path: "/register" },
    ],
  };
  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              {this.state.menues.map((menu) => {
                return (
                  <NavLink className="nav-link" to={menu.path}>
                    {menu.name}
                  </NavLink>
                );
              })}
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default MNavBar;
