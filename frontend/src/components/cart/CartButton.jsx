import React from "react";
import { useNavigate } from "react-router-dom";
import "./cart.css";

export default function CartButton({ totalItems, onCheckout }) {
  const navigate = useNavigate();

  const handleCheckout = () => {
    if (onCheckout) {
      onCheckout();
    } else {
      navigate("/user/customOrders");
    }
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
