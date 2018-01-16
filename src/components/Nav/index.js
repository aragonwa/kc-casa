import React, { Component } from "react";
import QuickSearch from "../Search/QuickSearch";

export default class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        <a className="navbar-brand" href="#" style={{ paddingRight: "20px" }}>
          <img className="img-fluid" height="40" width="40" src="logo.png" />CASA
          Information System
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExampleDefault"
          aria-controls="navbarsExampleDefault"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div
          className="collapse navbar-collapse row"
          id="navbarsExampleDefault"
        >
          <QuickSearch
            searchNav={this.props.searchNav}
            searchNavText={this.props.searchNavText}
            searchNavChange={this.props.searchNavChange}
          />
          <ul className="navbar-nav col-5">
            <li className="nav-item active dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="personDropdown"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Person
                <span className="sr-only">(current)</span>
              </a>
              <div className="dropdown-menu" aria-labelledby="personDropdown">
                <a className="dropdown-item" href="/add-person">
                  Create a Person
                </a>
                <a className="dropdown-item" href="#">
                  Search a person
                </a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Case
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Event
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="eventDropdown"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Admin
              </a>
              <div className="dropdown-menu" aria-labelledby="eventDropdown">
                <a className="dropdown-item" href="#">
                  Training
                </a>
                <a className="dropdown-item" href="#">
                  CASA Specialist
                </a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
