import React from "react";
import "./Register.css";

const Register = () => {
  return (
    <div className="register-page">
      <div className="register-card">
        <h2>Daftar LaundryInn</h2>
        <form>
          <label htmlFor="name">Nama Lengkap</label>
          <input type="text" id="name" placeholder="Nama Lengkap" required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Email" required />

          <label htmlFor="phone">No HP</label>
          <input type="tel" id="phone" placeholder="No HP" required />

          <label htmlFor="address">Alamat</label>
          <input type="text" id="address" placeholder="Alamat" required />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Password" required />

          <button type="submit">Daftar</button>
        </form>
        <p className="register-footer">
          Sudah punya akun? <a href="/login">Masuk</a>
        </p>
      </div>
    </div>
  );
};

export default Register;