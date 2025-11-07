import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import DropDownMenu from "./DropDownMenu";

const Navbar = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleProfileClick = (e) => {
    setShowPopup(true);
  };

  const closePopup = () => setShowPopup(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinkClasses = ({ isActive }) => `
    flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg
    text-base md:text-lg font-medium text-blue-600 hover:text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-700
    ${isActive ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold shadow-xl scale-105' : 'hover:bg-blue-50'}
  `;

  const mobileNavLinkClasses = ({ isActive }) => `
    flex items-center gap-3 px-6 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-md
    text-lg font-medium text-blue-600 hover:text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-700
    ${isActive ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold shadow-lg' : 'hover:bg-blue-50'}
  `;

  // SVG icons sebagai komponen inline untuk kemudahan maintenance
  const icons = {
    home: <svg className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 7 L6 4 L10 6 L14 4 L18 6 L20 7 V19 H4 Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>,
    orders: <svg className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="7" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M7 7V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>,
    profile: <svg className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="8" r="3" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M4 20c1.5-4 7-6 8-6s6.5 2 8 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 md:px-8 lg:px-12 py-3 md:py-4 bg-gradient-to-r from-blue-50 via-white to-blue-50 backdrop-blur-lg bg-opacity-95 border-b border-blue-100 shadow-xl font-sans">
        <div className="flex items-center text-xl md:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800 drop-shadow-sm">
          <img src={logo} alt="LaundryIn Logo" className="h-8 md:h-10 w-auto mr-2 md:mr-3 transition-transform duration-300 hover:scale-110" style={{ maxWidth: 40, height: 'auto' }} />
          <span className="hidden sm:block">LaundryIn</span>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-6 lg:gap-12">
          <li>
            <NavLink to="/user/home" className={navLinkClasses}>
              {icons.home}
              <span className="hidden lg:inline">Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/user/orders" className={navLinkClasses}>
              {icons.orders}
              <span className="hidden lg:inline">Orders</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/user/profile" className={navLinkClasses} onClick={handleProfileClick}>
              {icons.profile}
              <span className="hidden lg:inline">Profile</span>
            </NavLink>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-lg hover:bg-blue-50 transition-colors duration-200"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </nav>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="fixed top-16 left-0 right-0 z-40 md:hidden bg-white border-b border-gray-200 shadow-xl backdrop-blur-lg bg-opacity-95">
          <ul className="flex flex-col py-4">
            <li>
              <NavLink to="/user/home" className={mobileNavLinkClasses} onClick={() => setIsMenuOpen(false)}>
                {icons.home}
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/user/orders" className={mobileNavLinkClasses} onClick={() => setIsMenuOpen(false)}>
                {icons.orders}
                Orders
              </NavLink>
            </li>
            <li>
              <NavLink to="/user/profile" className={mobileNavLinkClasses} onClick={(e) => { handleProfileClick(e); setIsMenuOpen(false); }}>
                {icons.profile}
                Profile
              </NavLink>
            </li>
          </ul>
        </div>
      )}

      {showPopup && <DropDownMenu onClose={closePopup} />}
    </>
  );
};

export default Navbar;