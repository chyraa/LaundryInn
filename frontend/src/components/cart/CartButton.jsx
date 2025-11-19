import React from "react";
import { useNavigate } from "react-router-dom";

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
    <div className="fixed inset-x-0 bottom-6 z-50 flex justify-center">
      <button 
        onClick={handleCheckout}
        className="group relative flex items-center justify-between gap-6 w-11/12 max-w-sm mx-auto px-6 py-4 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
      >
        <div className="flex items-center justify-center w-8 h-8 bg-white/20 rounded-full text-sm font-bold">
          {totalItems}
        </div>
        
        <span className="text-lg font-semibold tracking-wide">Pesan Sekarang</span>

        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </button>
    </div>
  );
}
