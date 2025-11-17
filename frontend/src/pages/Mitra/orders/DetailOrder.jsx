import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import NavbarMitra from "../../../components/NavbarMitra";
import Footer from "../../../components/Footer";
import { CheckCircleIcon, TruckIcon, ClockIcon, XCircleIcon } from "@heroicons/react/24/solid";

const statusStyles = {
  Menjemput: {
    color: "border-yellow-500",
    icon: <TruckIcon className="h-5 w-5 text-yellow-500" />,
  },
  "Sedang Dicuci": {
    color: "border-blue-500",
    icon: <ClockIcon className="h-5 w-5 text-blue-500" />,
  },
  Selesai: {
    color: "border-green-500",
    icon: <CheckCircleIcon className="h-5 w-5 text-green-500" />,
  },
  Dibatalkan: {
    color: "border-red-500",
    icon: <XCircleIcon className="h-5 w-5 text-red-500" />,
  },
};

const DetailOrder = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const dummyOrders = [
    {
      id: "LAUNDRYIN12345",
      pelanggan: "Dita Sari",
      alamat: "Jl. Melati No.15, Depok",
      layanan: "Cuci Kering Setrika - Ekspress",
      waktu: "17 Agustus 2025, 10.30 WIB",
      harga: "Rp 55.000",
      status: "Menjemput",
    },
    {
      id: "LAUNDRYIN12346",
      pelanggan: "Budi Santoso",
      alamat: "Jl. Mawar No.7, Bandung",
      layanan: "Cuci Kering Reguler",
      waktu: "18 Agustus 2025, 09.00 WIB",
      harga: "Rp 45.000",
      status: "Sedang Dicuci",
    },
    {
      id: "LAUNDRYIN12348",
      pelanggan: "Nia Wulandari",
      alamat: "Jl. Kenanga No.21, Jakarta",
      layanan: "Cuci Kering Setrika - Ekspress",
      waktu: "15 Agustus 2025, 11.30 WIB",
      harga: "Rp 55.000",
      status: "Selesai",
    },
  ];

  const [order, setOrder] = useState(null);
  const [newStatus, setNewStatus] = useState("");

  useEffect(() => {
    const foundOrder = dummyOrders.find((item) => item.id === id);
    if (foundOrder) {
      setOrder(foundOrder);
      setNewStatus(foundOrder.status);
    } else {
      setOrder({
        id,
        pelanggan: "-",
        alamat: "-",
        layanan: "-",
        waktu: "-",
        harga: "-",
        status: "Tidak Diketahui",
      });
    }
  }, [id]);

  const handleStatusChange = (e) => {
    setNewStatus(e.target.value);
  };

  const handleSave = () => {
    setOrder((prev) => ({ ...prev, status: newStatus }));
    alert("✅ Status pesanan berhasil diperbarui!");
  };

  if (!order)
    return <p className="text-center mt-10 text-gray-600">Memuat data pesanan...</p>;

  const statusStyle = statusStyles[newStatus] || {
    color: "border-gray-300",
    icon: <ClockIcon className="h-5 w-5 text-gray-400" />,
  };

  return (
    <>
      <NavbarMitra />

<div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-50 flex items-center justify-center px-4 sm:px-6 lg:px-20">
  <div className="w-full max-w-6xl">
    <button
      onClick={() => navigate(-1)}
      className="mb-6 flex items-center gap-2 text-blue-600 hover:text-blue-800 transition"
    >
      <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
      </svg>
      Kembali
    </button>

  <div className={`bg-white shadow-xl rounded-2xl w-full max-w-5xl p-8 grid grid-cols-1 lg:grid-cols-2 gap-8 border-l-4 ${statusStyle.color} transition-all`}>
    {/* Kiri: Informasi Pesanan */}
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center lg:text-left">
        Detail Pesanan #{order.id}
      </h2>

      <div className="space-y-4 text-gray-700">
        <div className="flex items-start gap-2">
          <span className="text-xl">👤</span>
          <p><span className="font-semibold">Nama Pelanggan:</span> {order.pelanggan}</p>
        </div>
        <div className="flex items-start gap-2">
          <span className="text-xl">📍</span>
          <p><span className="font-semibold">Alamat:</span> {order.alamat}</p>
        </div>
        <div className="flex items-start gap-2">
          <span className="text-xl">🧺</span>
          <p><span className="font-semibold">Layanan:</span> {order.layanan}</p>
        </div>
        <div className="flex items-start gap-2">
          <span className="text-xl">⏰</span>
          <p><span className="font-semibold">Waktu:</span> {order.waktu}</p>
        </div>
        <div className="flex items-start gap-2">
          <span className="text-xl">💰</span>
          <p><span className="font-semibold">Harga:</span> {order.harga}</p>
        </div>
      </div>
    </div>

    {/* Kanan: Interaksi */}
    <div className="flex flex-col justify-between">
      <div>
        <label htmlFor="status" className="block text-gray-800 font-medium mb-2">
          Status Pesanan
        </label>
        <div className="flex items-center gap-2 mb-4">
          {statusStyle.icon}
          <span className="text-sm font-semibold text-gray-600">{newStatus}</span>
        </div>
        <select
          id="status"
          value={newStatus}
          onChange={handleStatusChange}
          className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none mb-4"
        >
          <option value="Menjemput">Menjemput</option>
          <option value="Sedang Dicuci">Sedang Dicuci</option>
          <option value="Selesai">Selesai</option>
          <option value="Dibatalkan">Dibatalkan</option>
        </select>

        <button
          onClick={handleSave}
          className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-2 rounded-lg transition"
        >
          💾 Simpan Perubahan
        </button>
      </div>

      {/* Edukasi & Tips */}
      <div className="mt-6 space-y-2 text-sm text-gray-600 bg-blue-50 p-4 rounded-lg border border-blue-200">
        <div className="flex items-start gap-2">
          <svg className="h-5 w-5 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-6h6v6m2 4H7a2 2 0 01-2-2V5a2 2 0 012-2h10a2 2 0 012 2v14a2 2 0 01-2 2z" />
          </svg>
          <p>Pantau perkembangan status untuk meningkatkan kepuasan pelanggan.</p>
        </div>
        <div className="flex items-start gap-2">
          <svg className="h-5 w-5 text-yellow-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z" />
          </svg>
          <p>Ingatkan pelanggan dan staf atas perubahan status secara langsung.</p>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
      <Footer />
    </>
  );
};

export default DetailOrder;