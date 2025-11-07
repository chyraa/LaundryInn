import React from "react";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <img src={logo} alt="LaundryIn Logo" className="h-8 w-8" />
            <span className="text-xl font-bold text-white">LaundryIn</span>
          </div>
          <p className="text-gray-400 leading-relaxed">
            Solusi praktis untuk kebutuhan laundry harianmu.<br />
            Dijemput, dicuci, diantar dengan layanan terbaik.
          </p>
        </div>

        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-white">Support</h4>
          <ul className="space-y-2">
            <li className="text-gray-400 hover:text-white cursor-pointer transition-colors">Help Center</li>
            <li className="text-gray-400 hover:text-white cursor-pointer transition-colors">Contact Us</li>
            <li className="text-gray-400 hover:text-white cursor-pointer transition-colors">Track Order</li>
            <li className="text-gray-400 hover:text-white cursor-pointer transition-colors">Returns</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-white">Contact</h4>
          <div className="space-y-2 text-gray-400">
            <p className="hover:text-white transition-colors">laundryinsupport@gmail.com</p>
            <p className="hover:text-white transition-colors">+62 852 7655 8890</p>
            <p>Setiap Hari</p>
            <p>09.00 - 22.00</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
