import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../../../components/NavbarMitra";
import Footer from "../../../components/Footer";

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

  const getStatusClass = (status) => {
    switch (status) {
      case "Sedang Dicuci":
        return "bg-gray-400 text-white";
      case "Menjemput":
        return "bg-yellow-400 text-gray-800";
      case "Dibatalkan":
        return "bg-red-500 text-white";
      case "Selesai":
        return "bg-blue-500 text-white";
      default:
        return "bg-gray-200 text-gray-800";
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.3 } },
  };

  return (
    <div className="bg-gray-100 min-h-screen font-sans text-gray-800">
      <Navbar />

      <div className="text-center py-8 px-4 md:px-16">
        <h2 className="font-serif text-xl mb-2">LaundryInAja!</h2>
        <h1 className="font-serif text-5xl font-bold mb-4 text-blue-900">
          Riwayat Pemesanan
        </h1>

        <div className="flex justify-center gap-2 mb-4">
          <button
            className={`py-2 px-6 rounded-lg font-semibold text-white transition-transform transform hover:scale-105 ${
              activeTab === "berlangsung" ? "bg-gray-500" : "bg-gray-400"
            }`}
            onClick={() => setActiveTab("berlangsung")}
          >
            Berlangsung
          </button>
          <button
            className={`py-2 px-6 rounded-lg font-semibold text-white transition-transform transform hover:scale-105 ${
              activeTab === "selesai" ? "bg-blue-600" : "bg-blue-400"
            }`}
            onClick={() => setActiveTab("selesai")}
          >
            Selesai
          </button>
          <button
            className={`py-2 px-6 rounded-lg font-semibold text-white transition-transform transform hover:scale-105 ${
              activeTab === "dibatalkan" ? "bg-red-600" : "bg-red-400"
            }`}
            onClick={() => setActiveTab("dibatalkan")}
          >
            Dibatalkan
          </button>
        </div>

        <p className="text-gray-500 italic my-4">
          Cuci-Kering-Gosok-Angkut
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="col-span-1 md:col-span-2 lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredOrders.map((order, index) => (
                <motion.div
                  className="bg-white rounded-lg shadow-md p-5 text-left flex justify-between items-center"
                  key={order.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div>
                    <p className="font-bold text-gray-800">{order.id}</p>
                    <p className="font-semibold my-1">{order.service}</p>
                    <p className="text-sm text-gray-600">{order.address}</p>
                    <p className="text-sm text-gray-600">{order.date}</p>
                    <p className="text-sm font-semibold text-gray-800">{order.price}</p>
                  </div>
                  <div className="text-right">
                    <button
                      className={`py-2 px-4 rounded-lg font-semibold ${getStatusClass(
                        order.status
                      )}`}
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

      <Footer />
    </div>
  );
};

export default OrdersMitra;
