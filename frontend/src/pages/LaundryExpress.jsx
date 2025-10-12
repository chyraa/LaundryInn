import React from "react";
import "./LaundryExpress.css";
import laundryBanner from "../assets/laundry-banner.png"; // pakai camelCase

const services = [
  { key: "reguler", title: "Reguler", desc: "Pakaian bersih & rapi dalam 3 hari kerja.", price: "10.000" },
  { key: "express12", title: "Express 12 Jam", desc: "Cucian selesai di hari yang sama, hanya 12 jam.", price: "10.000" },
  { key: "express24", title: "Express 24 Jam", desc: "Cepat dan praktis, selesai dalam 1 hari.", price: "10.000" },
  { key: "sepatu", title: "Sepatu", desc: "Cucian sepatu profesional, kering & rapi.", price: "10.000" },
  { key: "boneka", title: "Boneka", desc: "Boneka kesayangan jadi bersih & lembut kembali.", price: "10.000" },
  { key: "selimut", title: "Selimut", desc: "Selimut wangi, nyaman, dan higienis.", price: "10.000" },
];

export default function LaundryExpress() {
  return (
    <div className="lx-page">
      {/* Hero Section */}
      <div className="lx-hero">
        <div
          className="lx-banner"
          style={{ backgroundImage: `url(${laundryBanner})` }}
        />

        <div className="lx-hero-card">
          <div className="lx-hero-left">
            <h2>Laundry Express</h2>
            <div className="lx-sub">Cuci & Gosok — layanan cepat untuk kebutuhan mendesak</div>
            <div className="lx-meta">
              <div className="lx-meta-item">
                <svg
                  className="icon"
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                >
                  <path
                    d="M3 12h18"
                    stroke="#2f77a8"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
                Delivery • tiba 30-40 min
              </div>
            </div>
          </div>

          <div className="lx-hero-right">
            <div className="rating">
              <div className="rating-value">4.8</div>
              <div className="rating-star">★</div>
            </div>
          </div>
        </div>
      </div>

      {/* Promo Section */}
      <div className="lx-promos">
        <div className="promo-card">
          Diskon ongkir 10rb <span className="promo-min">Min. pembelian 50rb</span>
        </div>
        <div className="promo-card">
          Diskon ongkir 10rb <span className="promo-min">Min. pembelian 50rb</span>
        </div>
        <div className="promo-card">
          Diskon ongkir 10rb <span className="promo-min">Min. pembelian 50rb</span>
        </div>
      </div>

      {/* Services Section */}
      <section className="lx-section">
        <h3 className="lx-section-title">Pilihlah menu andalan mu</h3>
        <div className="lx-grid">
          {services.map((s) => (
            <article key={s.key} className="lx-card">
              <div className="lx-card-head">
                <div className={`lx-icon ${s.key}`} aria-hidden="true" />
                <div className="lx-card-title">{s.title}</div>
              </div>

              <div className="lx-card-desc">{s.desc}</div>

              <div className="lx-card-footer">
                <button className="btn-add">Tambah</button>
                <div className="lx-price">{s.price}</div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
