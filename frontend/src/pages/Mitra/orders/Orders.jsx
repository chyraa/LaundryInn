import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NavbarMitra from "../../../components/NavbarMitra";
import "./Orders.css";

const OrdersMitra = () => {
  const [activeTab, setActiveTab] = useState("berlangsung");

  const orders = [
    { id: "#LAUNDRYIN12345", service: "Cuci Kering Setrika - Ekspress", address: "Jl. Melati No.15", date: "17 Agustus 2025, 10.30 WIB", price: "Rp 55.000", status: "Sedang Dicuci" },
    { id: "#LAUNDRYIN12346", service: "Cuci Kering Setrika - Ekspress", address: "Jl. Melati No.15", date: "17 Agustus 2025, 10.30 WIB", price: "Rp 55.000", status: "Menjemput" },
    { id: "#LAUNDRYIN12347", service: "Cuci Kering Setrika - Ekspress", address: "Jl. Melati No.15", date: "17 Agustus 2025, 10.30 WIB", price: "Rp 55.000", status: "Dibatalkan" },
    { id: "#LAUNDRYIN12348", service: "Cuci Kering Setrika - Ekspress", address: "Jl. Melati No.15", date: "17 Agustus 2025, 10.30 WIB", price: "Rp 55.000", status: "Selesai" },
  ];

  const filteredOrders = orders.filter((order) => {
    if (activeTab === "berlangsung")
      return ["Sedang Dicuci", "Menjemput"].includes(order.status);
    if (activeTab === "selesai") return order.status === "Selesai";
    if (activeTab === "dibatalkan") return order.status === "Dibatalkan";
    return true;
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.3 } },
  };

  return (
    <div className="orders-mitra">
      <NavbarMitra />

      <div className="orders-container">
        <h2 className="brand-title">LaundryInAja!</h2>
        <h1 className="page-title">Riwayat Pemesanan</h1>

        <div className="tabs">
          <button
            className={`tab ${activeTab === "berlangsung" ? "active" : ""}`}
            onClick={() => setActiveTab("berlangsung")}
          >
            Berlangsung
          </button>
          <button
            className={`tab ${activeTab === "selesai" ? "active" : ""}`}
            onClick={() => setActiveTab("selesai")}
          >
            Selesai
          </button>
          <button
            className={`tab ${activeTab === "dibatalkan" ? "active" : ""}`}
            onClick={() => setActiveTab("dibatalkan")}
          >
            Dibatalkan
          </button>
        </div>

        <p className="subtext">Cuci-Kering-Gosok-Angkut</p>

        <div className="orders-list">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="orders-motion-wrapper"
            >
              {filteredOrders.map((order, index) => (
                <motion.div
                  className="order-card"
                  key={order.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="order-info">
                    <p className="order-id">{order.id}</p>
                    <p className="order-service">{order.service}</p>
                    <p className="order-address">{order.address}</p>
                    <p className="order-date">{order.date}</p>
                    <p className="order-price">{order.price}</p>
                  </div>
                  <div className="order-status">
                    <button
                      className={`status ${order.status.replace(" ", "")}`}
                    >
                      {order.status}
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-left">
          <h3>LaundryIn</h3>
          <p>sdudioahdhadduishfuhdoiahdioa</p>
          <p>jadialodiaoijdatbiahold sjbdialodiaa</p>
        </div>
        <div className="footer-center">
          <h4>Support</h4>
          <p>Help Center</p>
          <p>Contact Us</p>
          <p>Track Order</p>
          <p>Returns</p>
        </div>
        <div className="footer-right">
          <h4>Contact</h4>
          <p>laundryinsupport@gmail.com</p>
          <p>+62 852 7565 8890</p>
          <p>Setiap Hari</p>
          <p>09.00 - 22.00</p>
        </div>
      </footer>
    </div>
  );
};

export default OrdersMitra;
