import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <h2>Mager Nganter Laundry?</h2>
        <h1>LaundryIn Aja!!</h1>
        <p>
          Solusi praktis untuk kamu yang males anter jemput laundry. 
          Tinggal klik, laundry langsung dijemput!
        </p>
        <button className="cta-btn">Masuk/Daftar</button>
      </section>

      {/* Fitur Section */}
      <section className="features">
        <div className="feature-card">
          <img src="/assets/delivery.png" alt="Gratis Ongkir"/>
          <h3>Gratis Ongkir</h3>
          <p>Laundry dijemput & diantar tanpa biaya tambahan</p>
        </div>
        <div className="feature-card">
          <img src="/assets/fast.png" alt="Cepat"/>
          <h3>Cepat & Praktis</h3>
          <p>Pesan mudah, laundry langsung diproses cepat</p>
        </div>
        <div className="feature-card">
          <img src="/assets/premium.png" alt="Premium"/>
          <h3>Premium</h3>
          <p>Layanan berkualitas dengan harga terjangkau</p>
        </div>
      </section>

      {/* Trusted Section */}
      <section className="trusted">
        <h2>Dipercaya oleh Ribuan Pengguna</h2>
        <div className="stats">
          <div><h3>5K+</h3><p>Order</p></div>
          <div><h3>5K+</h3><p>Pengguna</p></div>
          <div><h3>5K+</h3><p>Mitra</p></div>
        </div>
      </section>

      {/* Cari Laundry */}
      <section className="search">
        <h2>Cari Laundry Sekitar!</h2>
        <p>Masukkan alamatmu dan cari laundry terbaik disekitarmu</p>
        <input type="text" placeholder="Masukkan alamat anda..." />
      </section>

      {/* Laundry List */}
      <section className="laundry-list">
        <div className="laundry-card">
          <img src="/assets/laundry1.jpg" alt="I Clean Laundry"/>
          <h3>I Clean Laundry</h3>
          <p>⭐ 4.8 | 1K+ Orderan</p>
        </div>
        <div className="laundry-card">
          <img src="/assets/laundry2.jpg" alt="Pak To Laundry"/>
          <h3>Pak To Laundry</h3>
          <p>⭐ 4.9 | 1K+ Orderan</p>
        </div>
        <div className="laundry-card">
          <img src="/assets/laundry3.jpg" alt="Elsa Laundry"/>
          <h3>Elsa Laundry</h3>
          <p>⭐ 4.8 | 500+ Orderan</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
