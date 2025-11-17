import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { db, auth } from "../../../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const ConfirmOrders = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  // Ambil data dari halaman sebelumnya
  const { selectedData = [], note = "" } = location.state || {};

  // Data pelanggan (sementara statis)
  const order = {
    nama: "Zhulma Fitrah",
    phone: "+62 851-7225-3596",
    address:
      "Jalan Baru No.18, Lubuk Kilangan (Gang Mesjid Istiqamah, Kota Padang, Sumatera Barat, ID 25223)",
    estimate: "29 Oktober",
  };

  // ✅ Hitung subtotal dengan aman (pastikan price berupa angka)
  const subtotalPesanan = selectedData.reduce((sum, item) => {
    const harga = Number(item.price) || 0;
    return sum + harga;
  }, 0);

  const subtotalPengiriman = 10000;
  const biayaLayanan = 10000;
  const totalPembayaran =
    subtotalPesanan + subtotalPengiriman + biayaLayanan;

  // ✅ Simpan ke Firestore (per user login)
  const handleCreateOrder = async () => {
  const user = auth.currentUser;
  if (!user) {
    alert("Silakan login terlebih dahulu sebelum membuat pesanan.");
    navigate("/login");
    return;
  }

  try {
    setLoading(true);
    console.log("User:", user);
    console.log("Data pesanan:", selectedData);

    await addDoc(collection(db, "orders"), {
      userId: user.uid,
      userEmail: user.email,
      items: selectedData,
      note,
      subtotalPesanan,
      subtotalPengiriman,
      biayaLayanan,
      totalPembayaran,
      status: "Menunggu Konfirmasi",
      createdAt: serverTimestamp(),
    });

    alert("Pesanan berhasil dibuat!");
    navigate("/user/statusOrders");
  } catch (error) {
    console.error("Error membuat pesanan:", error.message, error);
    alert("Terjadi kesalahan saat menyimpan pesanan: " + error.message);
  } finally {
    setLoading(false);
  }
};


  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-20 pb-32">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            Konfirmasi Pesanan
          </h2>
          <p className="text-gray-500 mt-1">
            Pastikan data pesanan kamu sudah benar sebelum dikirim.
          </p>
        </header>

        {/* Informasi Pelanggan */}
        <div className="bg-white rounded-2xl shadow-md p-6 mb-6">
          <h3 className="text-lg font-semibold mb-2">
            Informasi Pelanggan
          </h3>
          <p className="text-gray-700">{order.nama}</p>
          <p className="text-gray-700">{order.phone}</p>
          <p className="text-gray-700">{order.address}</p>
        </div>

        {/* Detail Pesanan */}
        <div className="bg-white rounded-2xl shadow-md p-6 mb-6">
          <h3 className="text-lg font-semibold mb-4">Detail Pesanan</h3>
          {selectedData.length > 0 ? (
            <ul className="divide-y divide-gray-100">
              {selectedData.map((item, index) => (
                <li
                  key={index}
                  className="py-3 flex justify-between items-center"
                >
                  <span className="text-gray-800 font-medium">
                    {item.title || item.name || "Item"}
                  </span>
                  <span className="text-gray-600">
                    Rp {Number(item.price).toLocaleString("id-ID")}
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500 text-sm">Tidak ada item dipilih.</p>
          )}

          {note && (
            <div className="mt-4 bg-indigo-50 p-3 rounded-lg">
              <p className="text-sm text-gray-700 italic">Catatan: {note}</p>
            </div>
          )}
        </div>

        {/* Rincian Pembayaran */}
        <div className="bg-white rounded-2xl shadow-md p-6 mb-24">
          <h3 className="text-lg font-semibold mb-4">
            Rincian Pembayaran
          </h3>
          <div className="space-y-2 text-gray-700">
            <div className="flex justify-between">
              <span>Subtotal Pesanan</span>
              <span>Rp {subtotalPesanan.toLocaleString("id-ID")}</span>
            </div>
            <div className="flex justify-between">
              <span>Biaya Pengiriman</span>
              <span>Rp {subtotalPengiriman.toLocaleString("id-ID")}</span>
            </div>
            <div className="flex justify-between">
              <span>Biaya Layanan</span>
              <span>Rp {biayaLayanan.toLocaleString("id-ID")}</span>
            </div>
            <hr className="my-2" />
            <div className="flex justify-between font-bold text-lg">
              <span>Total Pembayaran</span>
              <span>Rp {totalPembayaran.toLocaleString("id-ID")}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tombol bawah (sticky) */}
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-[0_-1px_12px_rgba(0,0,0,0.1)] p-4 z-50">
        <div className="max-w-2xl mx-auto px-4 flex items-center justify-between">
          <div className="text-gray-900">
            <p className="text-sm">Total Pembayaran</p>
            <p className="text-xl font-bold">
              Rp {totalPembayaran.toLocaleString("id-ID")}
            </p>
          </div>
          <button
            onClick={handleCreateOrder}
            disabled={loading}
            className={`px-8 py-3 rounded-xl font-semibold text-white transition-all duration-200 ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-gradient-to-r from-indigo-600 to-purple-600 hover:shadow-lg hover:scale-[1.02]"
            }`}
          >
            {loading ? "Memproses..." : "Buat Pesanan"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmOrders;
