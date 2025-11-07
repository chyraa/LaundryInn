import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import DropDownMenu from "./DropDownMenu";

const NavbarMitra = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleProfileClick = (e) => {
    // Show popup for profile actions. Do not prevent navigation for 'Profile' link
    setShowPopup(true);
  };

  const closePopup = () => setShowPopup(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="flex items-center p-4">
        <img src={logo} alt="LaundryIn Logo" className="h-8 w-8 mr-2" />
        <span className="text-xl font-bold text-blue-600">LaundryIn</span>
      </div>
      <ul className="flex space-x-8 ml-auto pr-8">
        <li>
          <NavLink 
            to="/mitra/home" 
            className={({ isActive }) => 
              `flex items-center space-x-2 px-3 py-2 rounded-md ${
                isActive ? 'text-blue-600 bg-blue-50' : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
              }`
            }
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/mitra/orders" 
            className={({ isActive }) => 
              `flex items-center space-x-2 px-3 py-2 rounded-md ${
                isActive ? 'text-blue-600 bg-blue-50' : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
              }`
            }
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            <span>Orders</span>
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/mitra/profile" 
            className={({ isActive }) => 
              `flex items-center space-x-2 px-3 py-2 rounded-md ${
                isActive ? 'text-blue-600 bg-blue-50' : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
              }`
            }
            onClick={handleProfileClick}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span>Profile</span>
          </NavLink>
        </li>
      </ul>

      {showPopup && <DropDownMenu onClose={closePopup} />}
    </nav>
  );
};

export default NavbarMitra;
