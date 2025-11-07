import React from "react";
import { useNavigate } from "react-router-dom";
import "./cart.css";

export default function CartButton({ totalItems }) {
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/user/customOrders"); // arahkan ke page Custom Pembelian
  };

  return (
    <div className="cart-button-container">
      <button className="cart-button" onClick={handleCheckout}>
        <div className="cart-button-content">
          <span className="cart-count">{totalItems} Item</span>
          <span className="cart-text">Pesan Sekarang</span>
        </div>
      </button>
    </div>
  );
}
