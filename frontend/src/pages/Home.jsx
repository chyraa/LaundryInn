// ...existing code...
import React from "react"; 
import "./Home.css";
import delivery from "../assets/delivery.png";
import fast from "../assets/fast.png";
import premium from "../assets/premium.png";
import logo from "../assets/logo.png"; 
import laundry1 from "../assets/laundry1.png";
import laundry2 from "../assets/laundry2.png";
import laundry3 from "../assets/laundry3.png";
import { Link } from "react-router-dom";
import { sampleOrders } from "../data/sampleOrders";

const laundries = [
  { id: 1, img: laundry1, name: "I Clean Laundry", rating: "⭐ 4.8 | 1K+ Orderan", to: "/laundry-express" },
  { id: 2, img: laundry2, name: "Pak To Laundry", rating: "⭐ 4.9 | 1K+ Orderan", to: "/orders" },
  { id: 3, img: laundry3, name: "Elsa Laundry", rating: "⭐ 4.8 | 500+ Orderan", to: "/orders" },
  { id: 4, img: laundry1, name: "I Clean Laundry", rating: "⭐ 4.8 | 1K+ Orderan", to: "/laundry-express" },
  { id: 5, img: laundry1, name: "I Clean Laundry", rating: "⭐ 4.8 | 1K+ Orderan", to: "/laundry-express" },
  { id: 6, img: laundry1, name: "I Clean Laundry", rating: "⭐ 4.8 | 1K+ Orderan", to: "/laundry-express" },
  { id: 7, img: laundry1, name: "I Clean Laundry", rating: "⭐ 4.8 | 1K+ Orderan", to: "/laundry-express" },
];

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <h2>Mager Nganter Laundry?</h2>
        <h1>LaundryIn Aja!!</h1>
        <p>
          Solusi praktis untuk kamu yang males anter jemput laundry. 
          Tinggal klik, baju kotor langsung dijemput!
        </p>
        <button className="cta-btn">Masuk/Daftar</button>
      </section>

      {/* Fitur Section */}
      <section className="features">
        <div className="feature-card">
          <img src={delivery} alt="Gratis Ongkir"/>
          <h3>Gratis Ongkir</h3>
          <p>Laundry dijemput & diantar tanpa biaya tambahan</p>
        </div>
        <div className="feature-card">
          <img src={fast} alt="Cepat"/>
          <h3>Cepat & Praktis</h3>
          <p>Pesan mudah, laundry langsung diproses cepat</p>
        </div>
        <div className="feature-card">
          <img src={premium} alt="Premium"/>
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
        <div className="search-bar">
          <input type="text" placeholder="Masukkan alamat anda..." />
          <button className="search-btn">Cari</button>
        </div>
      </section>

      {/* Latest orders preview */}
      <section className="home-orders-preview" style={{maxWidth:980, margin:"24px auto"}}>
        <h3 style={{margin:"0 0 12px", color:"#0c3d5b"}}>Riwayat Terbaru</h3>
        <div style={{display:"flex", gap:12}}>
          {sampleOrders.slice(0,3).map(o => (
            <Link key={o.id} to="/orders" className="laundry-card-link" style={{flex:1}}>
              <article className="laundry-card" style={{padding:14, minHeight:80}}>
                <div style={{fontWeight:700,color:"#0c3d5b"}}>Pesanan #{o.id}</div>
                <div style={{color:"#2f77a8"}}>{o.pickup} • {o.total}</div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      {/* Laundry List */}
      <section className="laundry-list">
        {laundries.map(l => (
          <Link key={l.id} to={l.to} className="laundry-card-link">
            <article className="laundry-card">
              <img src={l.img} alt={l.name}/>
              <h3>{l.name}</h3>
              <p>{l.rating}</p>
            </article>
          </Link>
        ))}
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-left">
          <img src={logo} alt="LaundryIn Logo" className="footer-logo" />
          <p>
            sdutuohoiahddatushfuhdolahidcoa<br/>
            jdiaoidajfoiafjaofiof sjdoiaiodoa
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

export default Home;
// ...existing code...