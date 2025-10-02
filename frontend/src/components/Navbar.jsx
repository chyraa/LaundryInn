// Navbar.js
import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="LaundryIn Logo" className="logo-image" />
        LaundryIn
      </div>
      <ul className="nav-links">
        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
            <span className="nav-icon" aria-hidden="true"></span>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/orders" className={({ isActive }) => isActive ? "active" : ""}>
            <span className="orders-icon" aria-hidden="true"></span>
            Orders
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile" className={({ isActive }) => isActive ? "active" : ""}>
            <span className="profile-icon" aria-hidden="true"></span>
            Profile
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
