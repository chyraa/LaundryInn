import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import laundryBanner from "../assets/laundry-banner.png";
import Navbar from "../components/Navbar";
import CartButton from "../components/cart/CartButton"; 

const services = [
  { key: "reguler", title: "Reguler", desc: "Pakaian bersih & rapi dalam 3 hari kerja.", price: 10000, icon: "👕" },
  { key: "express12", title: "Express 12 Jam", desc: "Cucian selesai di hari yang sama, hanya 12 jam.", price: 15000, icon: "⚡️" },
  { key: "express24", title: "Express 24 Jam", desc: "Cepat dan praktis, selesai dalam 1 hari.", price: 13000, icon: "🚀" },
  { key: "sepatu", title: "Sepatu", desc: "Cucian sepatu profesional, kering & rapi.", price: 20000, icon: "👟" },
  { key: "boneka", title: "Boneka", desc: "Boneka kesayangan jadi bersih & lembut kembali.", price: 18000, icon: "🧸" },
  { key: "selimut", title: "Selimut", desc: "Selimut wangi, nyaman, dan higienis.", price: 12000, icon: "🛌" },
];

export default function IClean() {
  const [quantities, setQuantities] = useState({});
  const navigate = useNavigate();

  const handleAddClick = (key) => {
    setQuantities((prev) => ({ ...prev, [key]: 1 }));
  };

  const handleIncrease = (key) => {
    setQuantities((prev) => ({ ...prev, [key]: (prev[key] || 0) + 1 }));
  };

  const handleDecrease = (key) => {
    setQuantities((prev) => {
      const current = prev[key] || 0;
      if (current <= 1) {
        const updated = { ...prev };
        delete updated[key];
        return updated;
      }
      return { ...prev, [key]: current - 1 };
    });
  };

  const handleProceedToCheckout = () => {
    const items = Object.entries(quantities).map(([key, quantity]) => {
      const service = services.find((s) => s.key === key);
      return {
        name: service.title,
        desc: service.desc,
        price: service.price,
        quantity: quantity,
      };
    });
    navigate("/user/customOrders", { state: { items } });
  };

  const totalItems = Object.values(quantities).reduce((a, b) => a + b, 0);

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pb-16">
        <div className="relative h-80 md:h-96 w-full overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-in-out hover:scale-105"
                style={{ backgroundImage: `url(${laundryBanner})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4 z-10">
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight drop-shadow-md">
                Kualitas Terbaik, Harga Terjangkau
                </h1>
                <p className="mt-4 text-lg md:text-xl max-w-2xl drop-shadow">
                Solusi laundry cepat, bersih, dan wangi untuk Anda.
                </p>
            </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 -mt-24 relative z-20">
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">I Clean Laundry</h1>
                <p className="mt-2 text-lg text-gray-600">Layanan cuci & gosok profesional untuk segala kebutuhan Anda.</p>
                <div className="mt-4 flex items-center gap-4 text-gray-500">
                    <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                        <span>Mitra Terverifikasi</span>
                    </div>
                    <span className="text-gray-300">|</span>
                    <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor"><path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" /><path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v5.05a2.5 2.5 0 014.9 0V8a1 1 0 00-1-1h-3.95z" /></svg>
                        <span>Gratis Antar-Jemput</span>
                    </div>
                </div>
              </div>
              <div className="mt-6 md:mt-0 flex-shrink-0">
                  <div className="flex items-center gap-2 bg-yellow-400/20 text-yellow-600 px-4 py-2 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                      <span className="text-xl font-bold">4.8</span>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 pb-24">
        {/* Promos */}
        <div className="mb-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Promo Spesial Untuk Anda</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg shadow p-4 flex items-center gap-3">
                    <span className="text-2xl">🎉</span>
                    <div>
                        <div className="font-bold">Diskon Ongkir 10rb</div>
                        <div className="text-sm opacity-90">Min. pembelian 50rb</div>
                    </div>
                </div>
                <div className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg shadow p-4 flex items-center gap-3">
                    <span className="text-2xl">🔥</span>
                    <div>
                        <div className="font-bold">Cashback 5rb</div>
                        <div className="text-sm opacity-90">Untuk pengguna baru</div>
                    </div>
                </div>
                <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg shadow p-4 flex items-center gap-3">
                    <span className="text-2xl">💦</span>
                    <div>
                        <div className="font-bold">Cuci Express 12 Jam</div>
                        <div className="text-sm opacity-90">Tanpa biaya tambahan</div>
                    </div>
                </div>
            </div>
        </div>
        
        {/* Services */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Pilih Layanan Unggulan</h2>
          <div className="space-y-4">
            {services.map((s) => {
              const qty = quantities[s.key] || 0;
              return (
                <article key={s.key} className="bg-white rounded-lg shadow-sm p-4 transition-all duration-300 hover:shadow-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                      <div className="text-3xl w-12 h-12 flex items-center justify-center bg-slate-100 rounded-lg">{s.icon}</div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{s.title}</h3>
                        <p className="text-sm text-gray-500">{s.desc}</p>
                        <div className="mt-1 text-blue-600 font-bold">Rp {s.price.toLocaleString("id-ID")}</div>
                      </div>
                  </div>

                  <div className="flex-shrink-0 w-full sm:w-auto mt-4 sm:mt-0">
                    {qty === 0 ? (
                      <button 
                        onClick={() => handleAddClick(s.key)} 
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors duration-300"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" /></svg>
                        Tambah
                      </button>
                    ) : (
                      <div className="inline-flex items-center border border-gray-200 rounded-lg w-full sm:w-auto">
                        <button onClick={() => handleDecrease(s.key)} className="px-4 py-2 text-gray-700 font-bold hover:bg-gray-100 rounded-l-lg transition-colors w-1/3 sm:w-auto">−</button>
                        <div className="px-4 py-2 font-bold text-blue-600 w-1/3 sm:w-auto text-center">{qty}</div>
                        <button onClick={() => handleIncrease(s.key)} className="px-4 py-2 text-gray-700 font-bold hover:bg-gray-100 rounded-r-lg transition-colors w-1/3 sm:w-auto">+</button>
                      </div>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </main>

      {totalItems > 0 && (
        <CartButton totalItems={totalItems} onCheckout={handleProceedToCheckout} />
      )}
    </div>
  );
}
