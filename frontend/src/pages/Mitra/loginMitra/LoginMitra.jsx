import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../login/Login.css"; // gunakan style login pengguna agar serasi

const LoginMitra = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Email dan password wajib diisi.");
      return;
    }
    setError("");
    navigate("/mitra"); // ganti dengan route dashboard mitra jika ada
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h2>Masuk Mitra LaundryIn</h2>
        <form onSubmit={handleLogin}>
          <label htmlFor="email">Email Mitra</label>
          <input
            type="email"
            id="email"
            placeholder="Email Mitra"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {error && <div style={{ color: "red", marginBottom: 10 }}>{error}</div>}

          <button type="submit">Masuk</button>
        </form>
        <p className="login-footer">
          Belum punya akun mitra? <a href="/register-mitra">Daftar Mitra</a>
        </p>
      </div>
    </div>
  );
};

export default LoginMitra;