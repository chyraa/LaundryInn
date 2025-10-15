import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { sampleOrders } from "../../data/sampleOrders";
import "./Orders.css";

export default function OrderDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const order = sampleOrders.find(o => String(o.id) === String(id));
  if (!order) return (
    <div className="orders-page" style={{paddingTop:120}}>
      <p>Order tidak ditemukan.</p>
      <button onClick={() => navigate("/orders")}>Kembali</button>
    </div>
  );

  return (
    <div className="orders-page">
      <header className="orders-hero">
        <h1>Detail Pesanan #{order.id}</h1>
        <p>{order.note}</p>
      </header>

      <main className="orders-list" style={{maxWidth:800}}>
        <article className="order-card">
          <div className="order-row">
            <div className="order-left" style={{gap:24}}>
              <div className="order-item">
                <strong>Jemput</strong>
                <div className="muted">{order.pickup}</div>
              </div>
              <div className="order-item">
                <strong>Pengiriman</strong>
                <div className="muted">{order.delivery}</div>
              </div>
              <div className="order-item">
                <strong>Total</strong>
                <div className="muted">{order.total}</div>
              </div>
            </div>

            <div className="order-right">
              <span className="status-badge" style={{ background: order.statusColor }}>{order.status}</span>
            </div>
          </div>

          <div className="order-footer" style={{justifyContent:"flex-end", gap:12}}>
            <button className="link" onClick={() => navigate(-1)}>Kembali</button>
            <button className="link" onClick={() => alert("Contact support")}>Contact Support</button>
          </div>
        </article>
      </main>
    </div>
  );
}