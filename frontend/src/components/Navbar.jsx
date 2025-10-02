// ...existing code...
import React from "react";
import "./Navbar.css";
import logo from "../assets/logo.png"; // Import the logo image

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="LaundryIn Logo" className="logo-image" />
        LaundryIn
      </div>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/orders">Orders</a></li>
        <li><a href="/profile">Profile</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
// ...existing code...