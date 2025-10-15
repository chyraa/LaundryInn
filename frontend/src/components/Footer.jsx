import React from "react";
import "./Footer.css";
import logo from "../assets/logo.png"; // sesuaikan path logo kamu ya

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <img src={logo} alt="LaundryIn Logo" className="footer-logo" />
        <p>
          sdutuohoiahddatushfuhdolahidcoa<br />
          jdiaoidajfoiafjaofiof sjdoiaiodoa
        </p>
      </div>

      <div className="footer-center">
        <h4>Support</h4>
        <ul>
          <li>Help Center</li>
          <li>Contact Us</li>
          <li>Track Order</li>
          <li>Returns</li>
        </ul>
      </div>

      <div className="footer-right">
        <h4>Contact</h4>
        <p>laundryinsupport@gmail.com</p>
        <p>+62 852 7655 8890</p>
        <p>Setiap Hari</p>
        <p>09.00 - 22.00</p>
      </div>
    </footer>
  );
};

export default Footer;
