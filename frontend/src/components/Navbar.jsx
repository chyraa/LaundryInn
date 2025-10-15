import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo.png";
import DropDownMenu from "./DropDownMenu";

const Navbar = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleProfileClick = (e) => {
    e.preventDefault(); // prevent navigation
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

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
          <a href="/profile" onClick={handleProfileClick} className="profile-link">
            <span className="profile-icon" aria-hidden="true"></span>
            Profile
          </a>
        </li>
      </ul>

      {showPopup && <DropDownMenu onClose={closePopup} />}
    </nav>
  );
};

export default Navbar;