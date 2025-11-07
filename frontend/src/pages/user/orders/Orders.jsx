import React from "react";
import { Link } from "react-router-dom";
import { sampleOrders } from "../../../data/sampleOrders";

export default function Orders() {
  return (
  <div className="min-h-screen bg-gray-50 pt-20 sm:pt-24">
      <div className="max-w-5xl mx-auto p-6">
        <header className="mb-6">
          <h1 className="text-3xl font-extrabold text-gray-900">Riwayat Pemesanan</h1>
          <p className="mt-2 text-gray-600">Lacak pesanan dan status pengiriman Anda</p>
        </header>

        <main>
          <div className="space-y-4">
            {sampleOrders.map((o) => (
              <article
                key={o.id}
                className="group bg-white shadow-sm rounded-lg overflow-hidden transform transition hover:shadow-lg hover:-translate-y-1"
              >
                <div className="flex">
                  {/* Accent stripe */}
                  <div className="w-1 bg-gradient-to-b from-indigo-500 to-purple-500" />

                  <div className="flex-1">
                    <div className="p-4 sm:p-6 flex flex-col sm:flex-row sm:justify-between sm:items-center">
                      <div className="flex-1">
                        <div className="flex items-center gap-3">
                          {/* small icon */}
                          <div className="flex-none bg-indigo-50 text-indigo-600 rounded-full p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 7h2l1 9a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2l1-9h2" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                          </div>

                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-medium text-gray-900">Pesanan #{o.id}</span>
                              <span className="text-xs text-gray-400">• {o.date || "—"}</span>
                            </div>
                            <div className="mt-1 text-sm text-gray-600">{o.note || "Ringkasan pesanan"}</div>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4 text-sm">
                          <div>
                            <div className="text-xs text-gray-500">Jemput</div>
                            <div className="text-gray-900">{o.pickup}</div>
                          </div>
                          <div>
                            <div className="text-xs text-gray-500">Pengiriman</div>
                            <div className="text-gray-900">{o.delivery}</div>
                          </div>
                          <div>
                            <div className="text-xs text-gray-500">Total</div>
                            <div className="text-gray-900 font-semibold">{o.total}</div>
                          </div>
                        </div>
                      </div>

                      <div className="mt-4 sm:mt-0 sm:ml-6 flex items-center gap-4">
                        {/* status pill with simple icon */}
                        <span
                          className="flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium text-white"
                          style={{ background: o.statusColor }}
                        >
                          {o.status && o.status.toLowerCase().includes("selesai") ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                          ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3" />
                              <circle cx="12" cy="12" r="9" strokeWidth="2" />
                            </svg>
                          )}
                          <span>{o.status}</span>
                        </span>

                        <Link
                          to={`/user/orders/${o.id}`}
                          className="inline-flex items-center gap-2 bg-indigo-600 text-white px-3 py-1.5 rounded-md text-sm font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-300"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12H3m12 0l-4 4m4-4l-4-4" />
                          </svg>
                          Detail
                        </Link>
                      </div>
                    </div>

                    <div className="border-t border-gray-100 px-4 sm:px-6 py-3 flex items-center justify-between bg-white">
                      <div className="text-sm text-gray-600">Butuh bantuan? Kontak support kami.</div>
                      <div className="flex items-center gap-3">
                        <a
                          href="https://wa.me/6281234567890"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm text-green-600 hover:underline"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 15a2 2 0 0 1-2 2h-1l-3 3v-3H8a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                          </svg>
                          Contact Support
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
