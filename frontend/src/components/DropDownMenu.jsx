// DropDownMenu.js
import React, { useEffect, useRef } from "react";
import "./DropDownMenu.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

export default function DropDownMenu({ onClose }) {
  const menuRef = useRef();
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

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

  const handleAccountClick = () => {
    if (user) {
      navigate("/profile");
    } else {
      navigate("/login");
    }
    onClose();
  };

  return (
    <div className="dropdown-container" ref={menuRef}>
      <div className="dropdown-menu">
        <button className="dropdown-item" onClick={handleAccountClick}>
          {user ? "Kelola Akun" : "Masuk / Daftar"}
        </button>
        <button className="dropdown-item" onClick={() => { navigate("/orders"); onClose(); }}>
          Pesanan
        </button>
        <button className="dropdown-item" onClick={() => { navigate("/faq"); onClose(); }}>
          FAQ
        </button>
      </div>
    </div>
  );
}