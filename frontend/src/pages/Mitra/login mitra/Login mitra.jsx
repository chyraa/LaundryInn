import React, { useState } from "react";
import "./Login mitra.css";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [report, setReport] = useState(""); // State untuk pesan khusus
  const [showSuccess, setShowSuccess] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setReport("");
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      if (!userCredential.user.emailVerified) {
        setReport("Email Anda belum diverifikasi. Silakan cek email Anda untuk verifikasi.");
        return;
      }
      setShowSuccess(true);
    } catch (error) {
      if (error.code === "auth/wrong-password") {
        setReport("Sandi yang Anda masukkan salah.");
      } else if (error.code === "auth/user-not-found") {
        setReport("Akun dengan email tersebut tidak ditemukan.");
      } else if (error.code === "auth/invalid-credential") {
        setReport("Email atau sandi yang Anda masukkan tidak valid.");
      } else {
        setError(error.message);
      }
    }
  };

  const handleSuccessClose = () => {
    setShowSuccess(false);
    navigate("/profile");
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h2>Selamat Datang Mitra LaundryIn</h2>
        <form onSubmit={handleLogin}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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

          <button type="submit">Masuk</button>
        </form>
        {/* Pesan khusus report tampil di bawah form */}
        {report && (
          <div className="login-report" style={{ color: "#e63946", marginTop: "12px", fontWeight: "500" }}>
            {report}
          </div>
        )}
        {/* Pesan error lain */}
        {error && <p style={{ color: "red" }}>{error}</p>}
        {/* Popup sukses login */}
        {showSuccess && (
          <div className="popup-overlay">
            <div className="popup-success">
              <h3>Login Berhasil!</h3>
              <button onClick={handleSuccessClose}>OK</button>
            </div>
          </div>
        )}
        <p className="ket">
          Dengan membuat akun Anda atau masuk, Anda setuju dengan Syarat dan Ketentuan & Kebijakan Privasi kami
        </p>
        <p className="login-footer">
          Belum punya akun? <a href="/register">Daftar</a>
        </p>
      </div>
    </div>
  );
};

export default Login;

