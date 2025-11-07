import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaMapMarkerAlt, FaTruck, FaBox, FaMoneyBill } from "react-icons/fa";

const ConfirmOrders = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Ambil data dari CustomPembelian
  const { selectedData = [], note = "" } = location.state || {};

  const order = {
    nama: "Zhulma Fitrah",
    phone: "+62 851-7225-3596",
    address:
      "Jalan Baru No.18, Lubuk Kilangan (Gang Mesjid Istiqamah, Kota Padang, Sumatera Barat, ID 25223)",
    estimate: "29 Oktober",
  };

  const subtotalPesanan = selectedData.reduce((sum, i) => sum + i.price, 0);
  const subtotalPengiriman = 10000;
  const biayaLayanan = 10000;
  const totalPembayaran =
    subtotalPesanan + subtotalPengiriman + biayaLayanan;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-20 pb-32">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-8 animate-fade-in">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Ringkasan Pesanan
              </h1>
              <p className="mt-2 text-gray-600">
                Periksa detail pesanan Anda sebelum melanjutkan
              </p>
            </div>
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl flex items-center justify-center shadow-inner">
              <span className="text-3xl animate-bounce-slow">🧺</span>
            </div>
          </div>
        </header>

        {/* Estimasi Section */}
        <div className="bg-white rounded-2xl shadow-xl mb-6 overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 to-purple-600/10"></div>
            <div className="h-2 bg-gradient-to-r from-indigo-600 to-purple-600"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.1] [mask-image:linear-gradient(to_bottom,transparent,black,transparent)]"></div>
          </div>
          
          <div className="p-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
                <div className="relative w-12 h-12 bg-white rounded-xl flex items-center justify-center text-indigo-600 transform group-hover:scale-110 transition duration-300">
                  <FaTruck className="w-6 h-6" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  Estimasi tiba {order.estimate}
                </h3>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <p className="text-green-600 font-medium">
                    Pesanan sedang disiapkan
                  </p>
                </div>
              </div>
            </div>

            <div className="relative group p-5 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl border border-indigo-100/50 overflow-hidden transform transition duration-300 hover:shadow-md">
              <div className="absolute inset-0 bg-grid-indigo/[0.025]"></div>
              <div className="relative flex items-start gap-4">
                <div className="w-10 h-10 bg-white rounded-full shadow-sm flex items-center justify-center text-indigo-600">
                  <FaMapMarkerAlt className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-900 mb-1">
                    {order.nama} <span className="text-indigo-600 font-medium">({order.phone})</span>
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {order.address}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Items Section */}
        <div className="bg-white rounded-2xl shadow-xl mb-6 overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
          <div className="relative p-6 border-b border-gray-100 bg-gradient-to-r from-indigo-50 to-purple-50">
            <div className="absolute inset-0 bg-grid-indigo/[0.025]"></div>
            <div className="relative flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center">
                  <span className="text-2xl animate-bounce-slow">🧺</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Laundry Express</h3>
                  <p className="text-sm text-indigo-600">Premium Laundry Service</p>
                </div>
              </div>
              <div className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                Proses
              </div>
            </div>
          </div>

          <div className="p-6">
            {selectedData.length === 0 ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                  <FaBox className="w-8 h-8 text-gray-400" />
                </div>
                <p className="text-gray-500">Tidak ada item yang dipilih.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {selectedData.map((item, idx) => (
                  <div key={idx} className="group relative p-4 bg-gray-50 rounded-xl transition-all duration-300 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-purple-50">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center transform transition-transform group-hover:scale-110 duration-300">
                          <span className="text-xl">👕</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{item.name}</h4>
                          <p className="text-sm text-gray-600">Cuci bersih & rapi.</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-1">
                          Rp {item.price.toLocaleString("id-ID")}
                        </div>
                        <span className="text-sm text-gray-500">x1</span>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center">
                      <span className="text-indigo-600 text-xs font-medium">{selectedData.length}</span>
                    </div>
                    <span className="text-gray-600">Produk</span>
                  </div>
                  <span className="font-bold text-gray-900">
                    Rp {subtotalPesanan.toLocaleString("id-ID")}
                  </span>
                </div>

                {note && (
                  <div className="relative mt-6">
                    <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl blur opacity-10"></div>
                    <div className="relative p-4 bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl border border-amber-100/50">
                      <div className="flex items-center gap-2 mb-2">
                        <svg className="w-5 h-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                        </svg>
                        <p className="font-medium text-amber-700">Catatan Khusus:</p>
                      </div>
                      <p className="text-amber-700 text-sm leading-relaxed pl-7">{note}</p>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Payment Details */}
        <div className="bg-white rounded-2xl shadow-xl mb-6 overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
          <div className="p-6 border-b border-gray-100 bg-gradient-to-r from-green-50 to-emerald-50">
            <div className="flex items-center gap-4">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
                <div className="relative w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-green-600 transform group-hover:scale-110 transition duration-300">
                  <FaMoneyBill className="w-6 h-6" />
                </div>
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-900">Rincian Pembayaran</h4>
                <p className="text-sm text-green-600">Ringkasan biaya pesanan Anda</p>
              </div>
            </div>
          </div>

          <div className="p-6 space-y-4">
            <div className="flex justify-between items-center py-2">
              <span className="text-gray-600">Subtotal Pesanan</span>
              <span className="font-medium text-gray-900">Rp {subtotalPesanan.toLocaleString("id-ID")}</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <div className="flex items-center gap-2">
                <span className="text-gray-600">Subtotal Pengiriman</span>
                <span className="px-2 py-0.5 bg-indigo-100 text-indigo-600 rounded-full text-xs">Express</span>
              </div>
              <span className="font-medium text-gray-900">Rp {subtotalPengiriman.toLocaleString("id-ID")}</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-gray-600">Biaya Layanan</span>
              <span className="font-medium text-gray-900">Rp {biayaLayanan.toLocaleString("id-ID")}</span>
            </div>
            <div className="flex justify-between items-center py-4 border-t border-gray-100">
              <span className="text-lg font-bold text-gray-900">Total Pembayaran</span>
              <span className="text-lg font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Rp {totalPembayaran.toLocaleString("id-ID")}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-[0_-1px_12px_rgba(0,0,0,0.1)] p-4 z-50">
        <div className="max-w-2xl mx-auto px-4 flex items-center justify-between">
          <div className="text-gray-900">
            <p className="text-sm">Total Pembayaran</p>
            <p className="text-xl font-bold">Rp {totalPembayaran.toLocaleString("id-ID")}</p>
          </div>
          <button
            onClick={() => navigate("/user/statusOrders")}
            className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
          >
            Buat Pesanan
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmOrders;
