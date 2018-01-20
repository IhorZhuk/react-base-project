import React from "react";
import {NavLink} from 'react-router-dom';

export default class Header extends React.Component {
  render() {
    return (
      <header className="mb-5 mt-5">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <NavLink  exact to="/" className="nav-link" activeClassName="active">Today's Nameday</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className="nav-link" activeClassName="active">Check for bank holiday</NavLink>
          </li>
        </ul>
      </header>
    )
  }
}