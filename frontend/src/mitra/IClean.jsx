import React, { useState } from "react";
import laundryBanner from "../assets/laundry-banner.png";
import Navbar from "../components/Navbar";
import CartButton from "../components/cart/CartButton"; // tombol checkout

// daftar layanan
const services = [
  { key: "reguler", title: "Reguler", desc: "Pakaian bersih & rapi dalam 3 hari kerja.", price: "Rp10.000" },
  { key: "express12", title: "Express 12 Jam", desc: "Cucian selesai di hari yang sama, hanya 12 jam.", price: "Rp15.000" },
  { key: "express24", title: "Express 24 Jam", desc: "Cepat dan praktis, selesai dalam 1 hari.", price: "Rp13.000" },
  { key: "sepatu", title: "Sepatu", desc: "Cucian sepatu profesional, kering & rapi.", price: "Rp20.000" },
  { key: "boneka", title: "Boneka", desc: "Boneka kesayangan jadi bersih & lembut kembali.", price: "Rp18.000" },
  { key: "selimut", title: "Selimut", desc: "Selimut wangi, nyaman, dan higienis.", price: "Rp12.000" },
];

export default function IClean() {
  const [quantities, setQuantities] = useState({});

  // klik tombol tambah pertama kali
  const handleAddClick = (key) => {
    setQuantities({ ...quantities, [key]: 1 });
  };

  // tambah jumlah item
  const handleIncrease = (key) => {
    setQuantities({ ...quantities, [key]: (quantities[key] || 0) + 1 });
  };

  // kurangi jumlah item
  const handleDecrease = (key) => {
    const current = quantities[key] || 0;
    if (current <= 1) {
      const updated = { ...quantities };
      delete updated[key];
      setQuantities(updated);
    } else {
      setQuantities({ ...quantities, [key]: current - 1 });
    }
  };

  const totalItems = Object.values(quantities).reduce((a, b) => a + b, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero */}
      <section className="relative">
        <div
          className="h-56 sm:h-72 bg-cover bg-center"
          style={{ backgroundImage: `url(${laundryBanner})` }}
          aria-hidden="true"
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 -mt-16 sm:-mt-20">
          <div className="bg-white rounded-lg shadow p-6 sm:p-8 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-extrabold text-gray-900">I Clean Laundry</h2>
              <p className="mt-1 text-gray-600">Cuci & Gosok — layanan cepat untuk kebutuhan mendesak</p>
              <div className="mt-3 text-sm text-gray-500">🚚 Delivery • tiba 30-40 min</div>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="text-lg font-semibold text-gray-900">4.8</div>
                <div className="text-sm text-yellow-500">★</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Promos */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 mt-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg shadow p-4 text-sm">🎉 Diskon ongkir 10rb <span className="text-gray-500">Min. pembelian 50rb</span></div>
          <div className="bg-white rounded-lg shadow p-4 text-sm">🔥 Cashback 5rb <span className="text-gray-500">Untuk pengguna baru</span></div>
          <div className="bg-white rounded-lg shadow p-4 text-sm">💦 Cuci Express 12 Jam <span className="text-gray-500">Tanpa biaya tambahan</span></div>
        </div>
      </section>

      {/* Services */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 mt-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Pilih Layanan Unggulan</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => {
            const qty = quantities[s.key] || 0;
            return (
              <article key={s.key} className="bg-white rounded-lg shadow p-4 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3">
                    <div className={`h-10 w-10 rounded-md flex items-center justify-center bg-indigo-50 text-indigo-600`}>{/* icon placeholder */}
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7h2l1 9a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2l1-9h2" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">{s.title}</div>
                      <div className="text-xs text-gray-500">{s.desc}</div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <div className="text-indigo-600 font-semibold">{s.price}</div>

                  {qty === 0 ? (
                    <button onClick={() => handleAddClick(s.key)} className="inline-flex items-center gap-2 px-3 py-1.5 bg-indigo-600 text-white rounded-md text-sm hover:bg-indigo-700">
                      Tambah
                    </button>
                  ) : (
                    <div className="inline-flex items-center gap-2 border border-gray-200 rounded-md">
                      <button onClick={() => handleDecrease(s.key)} className="px-3 py-1 text-gray-700">−</button>
                      <div className="px-3 py-1 font-medium">{qty}</div>
                      <button onClick={() => handleIncrease(s.key)} className="px-3 py-1 text-gray-700">+</button>
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {Object.keys(quantities).length > 0 && <CartButton totalItems={totalItems} />}
    </div>
  );
}
