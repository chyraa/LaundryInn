import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CustomPembelian = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [note, setNote] = useState("");
  const navigate = useNavigate();

  const items = [
    { name: "Selimut Kecil", price: 10000 },
    { name: "Selimut Besar", price: 15000 },
    { name: "Sepatu", price: 10000 },
    { name: "Boneka", price: 10000 },
    { name: "Alat Sholat", price: 8000 },
    { name: "Sprei", price: 12000 },
    { name: "Baju Reguler", price: 0 },
  ];

  const toggleItem = (itemName) => {
    setSelectedItems((prev) =>
      prev.includes(itemName)
        ? prev.filter((i) => i !== itemName)
        : [...prev, itemName]
    );
  };

  const handleConfirm = () => {
    const selectedData = items.filter((item) =>
      selectedItems.includes(item.name)
    );

    // kirim data ke halaman berikut
    navigate("/user/confirmOrders", {
      state: { selectedData, note },
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-20 pb-32">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-8 animate-fade-in">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 flex items-center gap-3">
              <span className="text-3xl sm:text-4xl animate-bounce-slow">🧺</span>
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Custom Pembelian
              </span>
            </h2>
            <div className="text-sm text-gray-500 flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              Online
            </div>
          </div>
        </header>

        <div className="bg-white rounded-2xl shadow-xl mb-6 overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 to-purple-600/10"></div>
            <div className="h-12 bg-gradient-to-r from-indigo-600 to-purple-600"></div>
          </div>
          <div className="p-6 space-y-6">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">Laundry Express</h3>
                <div className="flex items-center gap-2">
                  <span className="text-gray-600">Cuci & Gosok</span>
                  <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                  <span className="text-green-600 font-medium">Promo</span>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <div className="bg-gradient-to-r from-emerald-500 to-teal-500 px-3 py-1 rounded-full text-white font-medium text-sm shadow-sm">
                  Buka
                </div>
                <div className="mt-2 flex items-center gap-1 text-amber-500">
                  <span className="text-lg">⭐</span>
                  <span className="font-semibold">4.8</span>
                  <span className="text-gray-400 text-sm">(120)</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl border border-indigo-100/50">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                <span className="text-2xl">🚚</span>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-indigo-900">Express Delivery</span>
                  <span className="px-2 py-0.5 bg-indigo-100 text-indigo-700 text-xs rounded-full">Tercepat</span>
                </div>
                <p className="text-sm text-gray-600">Estimasi 30–40 menit (8.27 km)</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl mb-6 overflow-hidden">
          <div className="border-b border-gray-100 p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Reguler</h3>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-indigo-100">
                <span className="h-2 w-2 rounded-full bg-indigo-500"></span>
              </span>
              Harus dipilih • Pilih minimal 1
            </div>
          </div>

          <ul className="p-6 space-y-3">
            {items.map((item) => (
              <li key={item.name}>
                <label className="group flex items-center justify-between p-4 rounded-xl bg-gray-50 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50 cursor-pointer transition-all duration-300 border border-transparent hover:border-indigo-100">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <input
                        type="checkbox"
                        checked={selectedItems.includes(item.name)}
                        onChange={() => toggleItem(item.name)}
                        className="peer h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 transition-all duration-200"
                      />
                      <div className="absolute inset-0 rounded bg-indigo-100 scale-0 peer-checked:scale-110 opacity-0 peer-checked:opacity-100 transition-all duration-200"></div>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900 group-hover:text-indigo-600 transition-colors duration-200">
                        {item.name}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {item.price === 0 ? (
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                        Gratis
                      </span>
                    ) : (
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium group-hover:bg-indigo-100 group-hover:text-indigo-700 transition-colors duration-200">
                        +Rp {item.price.toLocaleString("id-ID")}
                      </span>
                    )}
                  </div>
                </label>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-2xl shadow-xl mb-6 overflow-hidden">
          <div className="border-b border-gray-100 p-6">
            <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              Catatan 
              <span className="text-sm font-normal text-gray-500 px-2 py-0.5 bg-gray-100 rounded-full">
                Opsional
              </span>
            </h3>
          </div>
          <div className="p-6">
            <div className="relative">
              <textarea
                placeholder="Contoh: Tolong bersihkan noda di celana"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                className="w-full h-24 px-4 py-3 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all duration-200 placeholder-gray-400 resize-none text-gray-700"
              />
              <div className="absolute bottom-3 right-3 text-gray-400 text-sm">
                {note.length}/200
              </div>
            </div>
          </div>
        </div>

        <div className="fixed bottom-0 left-0 right-0 bg-white shadow-[0_-1px_12px_rgba(0,0,0,0.1)] p-4 z-10">
          <div className="max-w-2xl mx-auto px-4">
            <button
              className={`w-full relative overflow-hidden py-4 px-6 rounded-xl text-white font-semibold transition-all duration-300 
                ${selectedItems.length === 0
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-gradient-to-r from-indigo-600 to-purple-600 hover:scale-[1.02] hover:shadow-lg active:scale-[0.98]"
                }
              `}
              disabled={selectedItems.length === 0}
              onClick={handleConfirm}
            >
              <div className="relative z-10 flex items-center justify-center gap-2">
                <span>Konfirmasi Pesanan</span>
                {selectedItems.length > 0 && (
                  <span className="bg-white/20 px-2 py-0.5 rounded text-sm">
                    {selectedItems.length} Item
                  </span>
                )}
              </div>
              {selectedItems.length > 0 && (
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomPembelian;
