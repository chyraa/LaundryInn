import React, { useState } from "react";
import "./Register.css";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom"; // Tambahkan ini
import { db } from "../../firebase";
import { doc, setDoc } from "firebase/firestore"; // Tambahkan ini

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const navigate = useNavigate(); // Tambahkan ini

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await sendEmailVerification(userCredential.user);
      await updateProfile(auth.currentUser, { displayName: name });
      await setDoc(doc(db, "users", userCredential.user.uid), {
        name,
        email,
        phone,
        address,
      });
      setShowSuccess(true); // Tampilkan popup sukses
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSuccessClose = () => {
    setShowSuccess(false);
    navigate("/login");
  };

  return (
    <div className="register-page">
      <div className="register-card">
        <h2>Daftar LaundryIn</h2>
        <form onSubmit={handleRegister}>
          <label htmlFor="name">Nama Lengkap</label>
          <input
            type="text"
            id="name"
            placeholder="Nama Lengkap"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="phone">No HP</label>
          <input
            type="tel"
            id="phone"
            placeholder="No HP"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <label htmlFor="address">Alamat</label>
          <input
            type="text"
            id="address"
            placeholder="Alamat"
            required
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Daftar</button>
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {showSuccess && (
          <div className="popup-overlay">
            <div className="popup-success">
              <h3>Registrasi Berhasil!</h3>
              <p>Silakan cek email Anda untuk verifikasi.</p>
              <button onClick={handleSuccessClose}>OK</button>
            </div>
          </div>
        )}
        <p className="ket">
          Dengan membuat akun Anda atau masuk, Anda setuju dengan Syarat dan Ketentuan & Kebijakan Privasi kami
        </p>
        <p className="register-footer">
          Sudah punya akun? <a href="/login">Masuk</a>
        </p>
      </div>
    </div>
  );
};

export default Register;