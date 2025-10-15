import React from "react";
import { Link } from "react-router-dom";
import { sampleOrders } from "../../data/sampleOrders";
import "./Orders.css";

export default function Orders() {
  return (
    <div className="orders-page">
      <header className="orders-hero">
        <h1>Riwayat Pemesanan</h1>
        <p>Lacak Pesanan Anda dan Pengiriman Anda</p>
      </header>

      <main className="orders-list">
        {sampleOrders.map((o) => (
          <article key={o.id} className="order-card">
            <div className="order-row">
              <div className="order-left">
                <div className="order-badge">Pesanan #{o.id}</div>

                <div className="order-item">
                  <strong>Jemput</strong>
                  <div className="muted">{o.pickup}</div>
                </div>

                <div className="order-item">
                  <strong>Pengiriman</strong>
                  <div className="muted">{o.delivery}</div>
                </div>

                <div className="order-item">
                  <strong>Total :</strong>
                  <div className="muted">{o.total}</div>
                </div>
              </div>

              <div className="order-right">
                <span className="status-badge" style={{ background: o.statusColor }}>
                  {o.status}
                </span>
              </div>
            </div>

            <div className="order-footer">
              <Link className="link" to={`/orders/${o.id}`}>Detail</Link>

              {/* ✅ gunakan salah satu */}
              {/* <button className="link" onClick={() => alert("Hubungi support!")}>Contact Support</button> */}
              <a
                className="link"
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact Support
              </a>
            </div>
          </article>
        ))}
      </main>
    </div>
  );
}
