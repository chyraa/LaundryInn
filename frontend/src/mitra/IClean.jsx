import React from "react";
import "./IClean.css";
import laundryBanner from "../assets/laundry-banner.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const services = [
  { key: "reguler", title: "Reguler", desc: "Pakaian bersih & rapi dalam 3 hari kerja.", price: "Rp10.000" },
  { key: "express12", title: "Express 12 Jam", desc: "Cucian selesai di hari yang sama, hanya 12 jam.", price: "Rp15.000" },
  { key: "express24", title: "Express 24 Jam", desc: "Cepat dan praktis, selesai dalam 1 hari.", price: "Rp13.000" },
  { key: "sepatu", title: "Sepatu", desc: "Cucian sepatu profesional, kering & rapi.", price: "Rp20.000" },
  { key: "boneka", title: "Boneka", desc: "Boneka kesayangan jadi bersih & lembut kembali.", price: "Rp18.000" },
  { key: "selimut", title: "Selimut", desc: "Selimut wangi, nyaman, dan higienis.", price: "Rp12.000" },
];

export default function IClean() {
  return (
    <div className="lx-page">
      <Navbar />

      {/* Hero Section */}
      <section className="lx-hero">
        <div
          className="lx-banner"
          style={{ backgroundImage: `url(${laundryBanner})` }}
        />

        <div className="lx-hero-card">
          <div className="lx-hero-left">
            <h2>I Clean Laundry</h2>
            <p className="lx-sub">Cuci & Gosok — layanan cepat untuk kebutuhan mendesak</p>
            <div className="lx-meta">
              <div className="lx-meta-item">🚚 Delivery • tiba 30-40 min</div>
            </div>
          </div>

          <div className="lx-hero-right">
            <div className="rating">
              <div className="rating-value">4.8</div>
              <div className="rating-star">★</div>
            </div>
          </div>
        </div>
      </section>

      {/* Promo Section */}
      <section className="lx-promos">
        <div className="promo-card">🎉 Diskon ongkir 10rb <span className="promo-min">Min. pembelian 50rb</span></div>
        <div className="promo-card">🔥 Cashback 5rb <span className="promo-min">Untuk pengguna baru</span></div>
        <div className="promo-card">💦 Cuci Express 12 Jam <span className="promo-min">Tanpa biaya tambahan</span></div>
      </section>

      {/* Services Section */}
      <section className="lx-section">
        <h3 className="lx-section-title">Pilih Layanan Unggulan</h3>
        <div className="lx-grid">
          {services.map((s) => (
            <article key={s.key} className="lx-card">
              <div className="lx-card-head">
                <div className={`lx-icon ${s.key}`}></div>
                <div className="lx-card-title">{s.title}</div>
              </div>
              <div className="lx-card-desc">{s.desc}</div>
              <div className="lx-card-footer">
                <span className="lx-price">{s.price}</span>
                <button className="btn-add">Tambah</button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}