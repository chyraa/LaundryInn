import React from "react";
import "./Service.css";

export default function CleanLaundry() {
  return (
    <div className="service-page">
      <header className="service-hero">
        <h1>Clean Laundry</h1>
        <p>Layanan cuci standar dengan harga kompetitif dan pengantaran.</p>
      </header>

      <main className="service-content">
        <section className="service-card">
          <h3>Reguler</h3>
          <p>Deskripsi singkat, estimasi waktu, dan tombol pemesanan ada di sini.</p>
        </section>
      </main>
    </div>
  );
}