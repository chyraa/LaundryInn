import React from "react";
import "./HomeMitra.css";

const HomeMitra = () => {
  return (
    <div className="home-mitra-page">
      <div className="home-mitra-header">
        <h1>Selamat Datang, Mitra LaundryIn!</h1>
        <p>
          Kelola pesanan, pantau status laundry, dan tingkatkan layanan Anda bersama LaundryIn.
        </p>
      </div>
      <div className="home-mitra-content">
        <div className="home-mitra-card">
          <h3>Pesanan Baru</h3>
          <p>Lihat dan proses pesanan laundry yang masuk.</p>
          <button className="home-mitra-btn">Lihat Pesanan</button>
        </div>
        <div className="home-mitra-card">
          <h3>Riwayat Pesanan</h3>
          <p>Riwayat transaksi dan status laundry pelanggan Anda.</p>
          <button className="home-mitra-btn">Riwayat</button>
        </div>
        <div className="home-mitra-card">
          <h3>Profil Mitra</h3>
          <p>Kelola data dan informasi laundry Anda.</p>
          <button className="home-mitra-btn">Edit Profil</button>
        </div>
      </div>
    </div>
  );
};

export default HomeMitra;