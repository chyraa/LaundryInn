import React, { useState } from "react";
import "./Register.css";
import { auth, db } from "../../firebase";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [role, setRole] = useState("customer");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  // 🧾 Tambahan: data laundry untuk mitra
  const [laundryName, setLaundryName] = useState("");
  const [laundryAddress, setLaundryAddress] = useState("");
  const [operationalHours, setOperationalHours] = useState("");
  const [services, setServices] = useState("");

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await sendEmailVerification(userCredential.user);
      await updateProfile(auth.currentUser, { displayName: name });

      // 📦 Data umum
      const userData = {
        name,
        email,
        phone,
        address,
        role,
      };

      // 📦 Jika mitra → tambahkan data laundry
      if (role === "mitra") {
        userData.laundryData = {
          laundryName,
          laundryAddress,
          operationalHours,
          services,
        };
      }

      // ✅ Simpan ke Firestore
      await setDoc(doc(db, "users", userCredential.user.uid), userData);

      setShowSuccess(true);
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

          <label htmlFor="role">Daftar Sebagai</label>
          <select
            id="role"
            className="role-select"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="customer">Customer</option>
            <option value="mitra">Mitra</option>
          </select>

          {/* 🔽 Jika mitra, tampilkan form tambahan */}
          {role === "mitra" && (
            <div className="mitra-extra">
              <h3>Data Laundry</h3>

              <label htmlFor="laundryName">Nama Laundry</label>
              <input
                type="text"
                id="laundryName"
                placeholder="Nama Laundry"
                required
                value={laundryName}
                onChange={(e) => setLaundryName(e.target.value)}
              />

              <label htmlFor="laundryAddress">Alamat Laundry</label>
              <input
                type="text"
                id="laundryAddress"
                placeholder="Alamat Laundry"
                required
                value={laundryAddress}
                onChange={(e) => setLaundryAddress(e.target.value)}
              />

              <label htmlFor="operationalHours">Jam Operasional</label>
              <input
                type="text"
                id="operationalHours"
                placeholder="Contoh: 08.00 - 20.00"
                required
                value={operationalHours}
                onChange={(e) => setOperationalHours(e.target.value)}
              />

              <label htmlFor="services">Layanan yang Disediakan</label>
              <textarea
                id="services"
                placeholder="Contoh: Cuci Kering, Setrika, Express"
                required
                value={services}
                onChange={(e) => setServices(e.target.value)}
              ></textarea>
            </div>
          )}

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
          Dengan membuat akun Anda atau masuk, Anda setuju dengan{" "}
          <span style={{ color: "#2f77a8" }}>Syarat dan Ketentuan</span> &{" "}
          <span style={{ color: "#2f77a8" }}>Kebijakan Privasi</span> kami.
        </p>

        <p className="register-footer">
          Sudah punya akun? <a href="/login">Masuk</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
