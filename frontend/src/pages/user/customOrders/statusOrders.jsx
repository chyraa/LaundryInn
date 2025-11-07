import React from "react";
import {FaBiking, FaHome } from "react-icons/fa";
import { GiWashingMachine } from "react-icons/gi";

const StatusPesanan = () => {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8 space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
        Riwayat Pesanan
      </h2>

      {/* ====== Card Estimasi ====== */}
      <div className="bg-white rounded-2xl shadow-lg p-6 transform transition-all hover:shadow-xl">
        <div className="text-center mb-6">
          <h3 className="text-xl font-bold text-gray-800 mb-2">Estimasi tiba 09:29 - 09:40</h3>
          <p className="text-gray-600">
            Laundry sedang menyiapkan pesananmu
          </p>
        </div>

        {/* Progress bar */}
        <div className="flex items-center justify-between px-4 py-6">
          <div className="flex-1 flex items-center">
            <div className="relative">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-xl relative z-10 transition-transform transform hover:scale-110">
                <GiWashingMachine className="w-6 h-6" />
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-blue-500/10 rounded-full animate-pulse"></div>
            </div>
            <div className="flex-1 h-1 bg-blue-500 mx-2"></div>
            <div className="relative">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-xl relative z-10 transition-transform transform hover:scale-110">
                <FaBiking className="w-6 h-6" />
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-blue-500/10 rounded-full animate-pulse"></div>
            </div>
            <div className="flex-1 h-1 bg-gray-200 mx-2"></div>
            <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 text-xl transition-transform transform hover:scale-110">
              <FaHome className="w-6 h-6" />
            </div>
          </div>
        </div>

        <p className="text-center text-gray-600 mt-4">
          Kami akan memberitahu kamu saat pesananmu diantar
        </p>
      </div>

      {/* ====== Lokasi ====== */}
      <div className="bg-white rounded-2xl shadow-lg p-6 space-y-8 transform transition-all hover:shadow-xl">
        <div className="relative flex gap-4">
          <div className="flex flex-col items-center">
            <div className="w-4 h-4 rounded-full bg-blue-500 ring-4 ring-blue-100"></div>
            <div className="w-0.5 h-full bg-blue-200 absolute top-4"></div>
          </div>
          <div className="flex-1 pt-1">
            <h4 className="text-sm font-semibold text-gray-500 mb-1">Diambil dari</h4>
            <p className="text-lg font-semibold text-gray-900 mb-1">Laundry Express - Padang</p>
            <p className="text-gray-600 text-sm leading-relaxed">
              Jl. Ulak Karang Sel, No.1, Kec. Padang Utara, Kota Padang,
              Sumatera Barat 25134
            </p>
          </div>
        </div>

        <div className="relative flex gap-4">
          <div className="flex flex-col items-center">
            <div className="w-4 h-4 rounded-full bg-gray-300 ring-4 ring-gray-100"></div>
          </div>
          <div className="flex-1 pt-1">
            <h4 className="text-sm font-semibold text-gray-500 mb-1">Diantar ke</h4>
            <p className="text-lg font-semibold text-gray-900 mb-1">Customer</p>
            <p className="text-gray-600 text-sm leading-relaxed mb-2">
              Jl. Baru No.18, Lubuk Kilangan, Kota Padang, Sumatera Barat 25223
            </p>
            <p className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
              Zhulma Fitrah (+62 851-7225-3596)
            </p>
          </div>
        </div>
      </div>

      {/* ====== Item Details ====== */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all hover:shadow-xl">
        <div className="p-6 border-b border-gray-100">
          <h3 className="text-lg font-bold text-gray-800">Item Details</h3>
        </div>

        <div className="p-6 space-y-4">
          <div className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors">
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 flex items-center justify-center bg-blue-100 rounded-lg text-xl">👕</span>
              <span className="font-medium text-gray-700">1x Laundry Reguler</span>
            </div>
            <span className="font-semibold text-gray-900">Rp 10.000</span>
          </div>

          <div className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors">
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 flex items-center justify-center bg-pink-100 rounded-lg text-xl">🧸</span>
              <span className="font-medium text-gray-700">1x Laundry Boneka</span>
            </div>
            <span className="font-semibold text-gray-900">Rp 10.000</span>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-100 space-y-3">
            <div className="flex justify-between text-gray-600">
              <span>Subtotal Pengiriman</span>
              <span className="font-medium">Rp 10.000</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Biaya Layanan</span>
              <span className="font-medium">Rp 10.000</span>
            </div>
            <div className="flex justify-between items-center pt-4 text-lg font-bold">
              <span>Total Pembayaran</span>
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Rp 40.000
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatusPesanan;
