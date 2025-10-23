import React, { useState } from "react";
import "./RegisterMitra.css";
import { useNavigate } from "react-router-dom";

const RegisterMitra = () => {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [noHp, setNoHp] = useState("");
  const [alamat, setAlamat] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    if (!nama || !email || !noHp || !alamat || !password) {
      setError("Semua field wajib diisi.");
      return;
    }
    setError("");
    // Simulasi sukses daftar
    navigate("/login-mitra");
  };

  return (
    <div className="register-mitra-page">
      <div className="register-mitra-card">
        <h2>Daftar Mitra <br/ >LaundryIn</h2>
        <form onSubmit={handleRegister}>
          <label htmlFor="nama">Nama Mitra</label>
          <input
            type="text"
            id="nama"
            placeholder="Nama Mitra"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="noHp">No HP</label>
          <input
            type="tel"
            id="noHp"
            placeholder="No HP"
            value={noHp}
            onChange={(e) => setNoHp(e.target.value)}
            required
          />

          <label htmlFor="alamat">Alamat</label>
          <input
            type="text"
            id="alamat"
            placeholder="Alamat"
            value={alamat}
            onChange={(e) => setAlamat(e.target.value)}
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

          {error && <div className="register-mitra-error">{error}</div>}

          <button type="submit">Daftar Mitra</button>
        </form>
        <p className="register-mitra-footer">
          Sudah punya akun mitra? <a href="/login-mitra">Masuk Mitra</a>
        </p>
      </div>
    </div>
  );
};

export default RegisterMitra;