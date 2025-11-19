import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { db } from "../../../firebase";
import { doc, getDoc } from "firebase/firestore";

export default function OrderDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const docRef = doc(db, "orders", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setOrder({ id: docSnap.id, ...docSnap.data() });
        } else {
          setError("Order tidak ditemukan.");
        }
      } catch (err) {
        setError("Gagal memuat data pesanan.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchOrder();
  }, [id]);

  const formatDate = (timestamp) => {
    if (!timestamp) return "-";
    const date = timestamp.toDate();
    return date.toLocaleDateString("id-ID", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20 sm:pt-24 flex items-center justify-center">
        <p className="text-gray-500">Memuat detail pesanan...</p>
      </div>
    );
  }

  if (error || !order) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20 sm:pt-24">
        <div className="max-w-3xl mx-auto p-6">
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <p className="text-red-600 font-semibold">{error || "Order tidak ditemukan."}</p>
            <div className="mt-4">
              <button
                onClick={() => navigate("/user/orders")}
                className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md text-sm hover:bg-indigo-700"
              >
                Kembali ke Riwayat Pesanan
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // derive a simple progress state index based on status text
  const getStatusIndex = (s) => {
    if (!s) return 0;
    const lower = s.toLowerCase();
    if (lower.includes("selesai")) return 2;
    if (lower.includes("diproses")) return 1;
    return 0;
  };

  const step = getStatusIndex(order.status);

  return (
    <div className="min-h-screen bg-gray-50 pt-20 sm:pt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Hero */}
        <div className="rounded-lg overflow-hidden mb-6 shadow">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 sm:p-8">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-white text-2xl font-extrabold">Detail Pesanan</h2>
                <p className="text-indigo-100 mt-1">
                  Pesanan #{order.id.slice(0, 6)} · {formatDate(order.createdAt)}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold bg-white/20 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {order.status}
                </span>
              </div>
            </div>
          </div>
        </div>

        <main className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Kolom Kiri (Detail & Item) */}
          <div className="lg:col-span-2 space-y-6">
            {/* Status timeline */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-sm font-medium text-gray-700">Status Pesanan</h3>
              <div className="mt-4 relative">
                {/* background track */}
                <div className="absolute left-0 right-0 top-6 h-0.5 bg-gray-200" />
                {/* progress bar width based on step (0..2) */}
                <div
                  className="absolute left-0 top-6 h-0.5 bg-indigo-600"
                  style={{ width: `${(step / 2) * 100}%` }}
                />

                <div className="relative z-10 grid grid-cols-3 gap-4">
                  {["Dipesan", "Diproses", "Selesai"].map((label, idx) => (
                    <div key={label} className="flex flex-col items-center">
                      <div
                        className={`h-8 w-8 rounded-full flex items-center justify-center text-white ${idx <= step ? "bg-indigo-600" : "bg-gray-200 text-gray-600"}`}
                      >
                        {idx < step ? (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        ) : (
                          <span className="text-xs font-medium">{idx + 1}</span>
                        )}
                      </div>
                      <div className="mt-2 text-xs text-center text-gray-500">{label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Order summary */}
            <article className="bg-white rounded-lg shadow overflow-hidden">
              <div className="p-6">
                <h4 className="text-lg font-bold text-gray-800 mb-4">Ringkasan Item</h4>
                <ul className="divide-y divide-gray-100">
                  {order.items?.map((item, index) => (
                    <li key={index} className="py-3 flex justify-between items-center">
                      <div>
                        <p className="font-medium text-gray-800">{item.name || "Item"}</p>
                        {item.quantity > 1 && (
                          <p className="text-sm text-gray-500">Kuantitas: {item.quantity}</p>
                        )}
                      </div>
                      <p className="text-gray-600">
                        Rp {(item.price * (item.quantity || 1)).toLocaleString("id-ID")}
                      </p>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 pt-4 border-t border-gray-200 flex justify-between items-center font-bold text-lg">
                  <span>Total</span>
                  <span>Rp {order.totalPembayaran.toLocaleString("id-ID")}</span>
                </div>
              </div>
            </article>

            {/* Catatan */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-2">Catatan</h3>
              <p className="text-gray-600 italic">{order.note || "Tidak ada catatan."}</p>
            </div>
          </div>

          {/* Kolom Kanan (Info Pelanggan) */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Informasi Pelanggan</h3>
              <div className="space-y-3 text-gray-700">
                <div>
                  <p className="text-sm text-gray-500">Nama</p>
                  <p className="font-medium">{order.customerInfo?.name || "—"}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Telepon</p>
                  <p className="font-medium">{order.customerInfo?.phone || "—"}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Alamat</p>
                  <p className="font-medium">{order.customerInfo?.address || "—"}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Butuh Bantuan?</h3>
              <div className="flex flex-col gap-3">
                <button
                  onClick={() => navigate(-1)}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md border border-gray-300 text-sm font-medium hover:bg-gray-50"
                >
                  Kembali
                </button>
                <a
                  href={`https://wa.me/6281234567890?text=${encodeURIComponent(
                    `Halo, saya ingin menanyakan pesanan #${order.id.slice(0, 6)}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-green-600 text-white text-sm font-medium hover:bg-green-700"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM2 10a8 8 0 1116 0 8 8 0 01-16 0z" clipRule="evenodd" />
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  Hubungi Support
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}