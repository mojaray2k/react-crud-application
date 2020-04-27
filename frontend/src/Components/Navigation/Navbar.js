import React, { Component } from "react";
import { NavbarBrand } from "reactstrap";
import { NavLink } from "react-router-dom";

import DataTable from "../Tables/DataTable";

export default class Navbar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  render() {
    return (
      <nav className="navbar">
        <NavbarBrand to="/">Student Enrollment Database</NavbarBrand>
        <NavLink
          exact
          activeClassName="navbar__link--active"
          className="navbar__link"
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          activeClassName="navbar__link--active"
          className="navbar__link"
          to="/database"
        >
          Databass
        </NavLink>
      </nav>
    );
  }
}
