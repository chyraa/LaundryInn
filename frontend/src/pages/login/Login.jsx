import React, { useState } from "react";
import "./Login.css";
import { auth, db } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [error, setError] = useState("");
  const [report, setReport] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setReport("");

    if (!role) {
      setReport("Silakan pilih peran terlebih dahulu (Customer atau Mitra).");
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);

      if (!userCredential.user.emailVerified) {
        setReport("Email Anda belum diverifikasi. Silakan cek email Anda untuk verifikasi.");
        return;
      }

      // 🔍 Ambil data user dari Firestore
      const userDoc = await getDoc(doc(db, "users", userCredential.user.uid));
      if (userDoc.exists()) {
        const userData = userDoc.data();

        // Cek apakah role di Firestore sama dengan yang dipilih
        if (userData.role !== role) {
          setReport(`Anda terdaftar sebagai ${userData.role}. Silakan pilih peran yang sesuai.`);
          await auth.signOut();
          return;
        }

        // ✅ Login berhasil, tampilkan popup
        setShowSuccess(true);
      } else {
        setReport("Data pengguna tidak ditemukan di database.");
        await auth.signOut();
      }
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

    // 🚀 Arahkan sesuai role
    if (role === "customer") {
      navigate("/user/home");
    } else if (role === "mitra") {
      navigate("/mitra/home");
    } else {
      navigate("/");
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h2>Masuk LaundryIn</h2>
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

          <label htmlFor="role">Masuk sebagai</label>
          <select
            id="role"
            className="role-select"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="">-- Pilih Peran --</option>
            <option value="customer">Customer</option>
            <option value="mitra">Mitra</option>
          </select>

          <button type="submit">Masuk</button>
        </form>

        {report && <div className="login-report">{report}</div>}
        {error && <p className="login-error">{error}</p>}

        {showSuccess && (
          <div className="popup-overlay">
            <div className="popup-success">
              <h3>Login Berhasil!</h3>
              <button onClick={handleSuccessClose}>OK</button>
            </div>
          </div>
        )}

        <p className="ket">
          Dengan membuat akun Anda atau masuk, Anda setuju dengan{" "}
          <strong>Syarat dan Ketentuan</strong> & <strong>Kebijakan Privasi</strong> kami.
        </p>

        <p className="login-footer">
          Belum punya akun? <a href="/register">Daftar</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
