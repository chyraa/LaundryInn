import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { sampleOrders } from "../../../data/sampleOrders";

export default function OrderDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const order = sampleOrders.find((o) => String(o.id) === String(id));

  if (!order)
    return (
      <div className="min-h-screen bg-gray-50 pt-20 sm:pt-24">
        <div className="max-w-3xl mx-auto p-6">
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-gray-700">Order tidak ditemukan.</p>
            <div className="mt-4">
              <button
                onClick={() => navigate("/orders")}
                className="inline-flex items-center px-3 py-2 bg-indigo-600 text-white rounded-md text-sm hover:bg-indigo-700"
              >
                Kembali
              </button>
            </div>
          </div>
        </div>
      </div>
    );

  // derive a simple progress state index based on status text
  const getStatusIndex = (s) => {
    if (!s) return 0;
    const lower = s.toLowerCase();
    if (lower.includes("selesai") || lower.includes("done") || lower.includes("completed")) return 2;
    if (lower.includes("proses") || lower.includes("proses") || lower.includes("in progress") || lower.includes("on-going")) return 1;
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
                <p className="text-indigo-100 mt-1">Pesanan #{order.id} · {order.date || "—"}</p>
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

        <main className="space-y-6">
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
              <h4 className="text-sm font-medium text-gray-700">Ringkasan</h4>
              <p className="mt-1 text-sm text-gray-500">{order.note || "Tidak ada catatan tambahan."}</p>

              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-3">
                  <div>
                    <div className="text-xs text-gray-500">Jemput</div>
                    <div className="text-gray-900">{order.pickup}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Pengiriman</div>
                    <div className="text-gray-900">{order.delivery}</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <div className="text-xs text-gray-500">Total</div>
                    <div className="text-gray-900 text-lg font-semibold">{order.total}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Metode Pembayaran</div>
                    <div className="text-gray-900">{order.payment || "Tunai"}</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between">
                <div className="text-sm text-gray-600">ID Pesanan: <span className="font-medium text-gray-800">{order.id}</span></div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => navigate(-1)}
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-gray-200 text-sm hover:bg-gray-50"
                  >
                    Kembali
                  </button>

                  <a
                    href={`https://wa.me/6281234567890?text=${encodeURIComponent(`Halo, saya ingin menanyakan pesanan #${order.id}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-green-600 text-white text-sm hover:bg-green-700"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15a2 2 0 0 1-2 2h-1l-3 3v-3H8a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                    </svg>
                    Contact Support
                  </a>
                </div>
              </div>
            </div>
          </article>
        </main>
      </div>
    </div>
  );
}