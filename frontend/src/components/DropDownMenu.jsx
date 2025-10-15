// DropDownMenu.js
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./DropDownMenu.css";

export default function DropDownMenu({ onClose }) {
  const menuRef = useRef();

  // Tutup dropdown saat klik di luar
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  return (
    <div className="dropdown-container" ref={menuRef}>
      <div className="dropdown-menu">
        <Link to="/login" className="dropdown-item">
          Masuk / Daftar
        </Link>
        <Link to="/orders" className="dropdown-item">
          Pesanan
        </Link>
        <Link to="/faq" className="dropdown-item">
          FAQ
        </Link>
      </div>
    </div>
  );
}