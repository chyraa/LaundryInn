import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-page">
      <div className="login-card">
        <h2>Masuk LaundryInn</h2>
        <form>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Email" required />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Password" required />

          <button type="submit">Masuk</button>
        </form>
        <p className="login-footer">
          Belum punya akun? <a href="/register">Daftar</a>
        </p>
      </div>
    </div>
  );
};

export default Login;