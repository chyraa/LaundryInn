import React from "react";
import "./Home.css";
import logo from "../../../assets/logo.png";
import delivery from "../../../assets/delivery.png";
import fast from "../../../assets/fast.png";
import premium from "../../../assets/premium.png";
import Navbar from "../../../components/NavbarMitra";

const pesananBaru = [
  {
    id: "LAUNDRYIN12345",
    lokasi: "Jl. Melati No.15",
    layanan: "Cuci Kering Setrika - Ekspress",
    total: "Rp.50.000",
  },
  {
    id: "LAUNDRYIN12346",
    lokasi: "Jl. Mawar No.22",
    layanan: "Cuci Kering Setrika - Reguler",
    total: "Rp.45.000",
  },
];

const HomeMitra = () => {
  return (
    <div className="home-mitra">
      {/* ✅ Navbar */}
      <Navbar />

      {/* HERO */}
      <section className="hero">
        <h2>Mager Nganter Laundry?</h2>
        <h1>LaundryIn Aja!!</h1>
        <p>Layanan Laundry Praktis, Terpercaya, Antar & Jemput</p>
        <button className="hero-btn">Pesan Sekarang</button>
      </section>

      {/* FITUR */}
      <section className="features">
        <div className="feature-card pink">
          <img src={delivery} alt="Gratis Ongkir" />
          <h3>Gratis Ongkir</h3>
          <p>Tanpa Biaya Tambahan</p>
        </div>
        <div className="feature-card yellow">
          <img src={fast} alt="Cepat & Praktis" />
          <h3>Cepat & Praktis</h3>
          <p>Proses Mudah dan Cepat</p>
        </div>
        <div className="feature-card green">
          <img src={premium} alt="Premium" />
          <h3>Premium</h3>
          <p>Kualitas Dijamin Terbaik</p>
        </div>
      </section>

      {/* TRUSTED */}
      <section className="trusted">
        <h2>Dipercaya oleh Ribuan Pengguna</h2>
        <div className="trusted-stats">
          <div>
            <h3>5K+</h3>
            <p>Order</p>
          </div>
          <div>
            <h3>5K+</h3>
            <p>Pengguna</p>
          </div>
          <div>
            <h3>5K+</h3>
            <p>Mitra</p>
          </div>
        </div>
      </section>

      {/* PESANAN MASUK */}
      <section className="pesanan">
        <h2>Pesanan Masuk!</h2>
        {pesananBaru.map((p) => (
          <div key={p.id} className="pesanan-card">
            <p><strong>ID Pesanan:</strong> #{p.id}</p>
            <p><strong>Lokasi:</strong> {p.lokasi}</p>
            <p><strong>Layanan:</strong> {p.layanan}</p>
            <p><strong>Total Harga:</strong> {p.total}</p>
            <div className="btn-group">
              <button className="btn-accept">Terima Orderan</button>
              <button className="btn-reject">Tolak Orderan</button>
            </div>
          </div>
        ))}
      </section>

      {/* ✅ Footer */}
      <footer className="footer">
        <div className="footer-left">
          <img src={logo} alt="LaundryIn Logo" className="footer-logo" />
          <p>
            Solusi praktis untuk kebutuhan laundry harianmu.<br />
            Dijemput, dicuci, diantar dengan layanan terbaik.
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
    </div>
  );
};

export default HomeMitra;
