import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import DropDownMenu from "./DropDownMenu";

const Navbar = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleProfileClick = (e) => {
    setShowPopup(true);
  };

  const closePopup = () => setShowPopup(false);

  const navLinkClasses = ({ isActive }) => `
    flex items-center gap-2 px-3 py-2 rounded-lg transition-colors duration-300
    text-lg text-primary hover:text-primary-light
    ${isActive ? 'bg-blue-50 font-bold' : ''}
  `;

  // SVG icons sebagai komponen inline untuk kemudahan maintenance
  const icons = {
    home: <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 7 L6 4 L10 6 L14 4 L18 6 L20 7 V19 H4 Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>,
    orders: <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="7" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M7 7V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>,
    profile: <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="8" r="3" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M4 20c1.5-4 7-6 8-6s6.5 2 8 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-12 py-4 bg-white border-b border-gray-200 shadow-lg font-sans">
      <div className="flex items-center text-xl font-bold text-primary">
        <img src={logo} alt="LaundryIn Logo" className="h-8 w-auto mr-3" style={{ maxWidth: 48, height: 'auto' }} />
        LaundryIn
      </div>
      
      <ul className="flex gap-16">
        <li>
          <NavLink to="/user/home" className={navLinkClasses}>
            {icons.home}
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/user/orders" className={navLinkClasses}>
            {icons.orders}
            Orders
          </NavLink>
        </li>
        <li>
          <NavLink to="/user/profile" className={navLinkClasses} onClick={handleProfileClick}>
            {icons.profile}
            Profile
          </NavLink>
        </li>
      </ul>

      {showPopup && <DropDownMenu onClose={closePopup} />}
    </nav>
  );
};

export default Navbar;