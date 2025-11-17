import React, { useEffect, useState } from "react";
import { FaBiking, FaHome } from "react-icons/fa";
import { GiWashingMachine } from "react-icons/gi";
import { db, auth } from "../../../firebase";
import { collection, query, where, onSnapshot, orderBy } from "firebase/firestore";

const StatusPesanan = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const user = auth.currentUser;
    if (!user) {
      setOrders([]);
      setLoading(false);
      return;
    }

    const q = query(
      collection(db, "orders"),
      where("userId", "==", user.uid),
      orderBy("createdAt", "desc")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const userOrders = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setOrders(userOrders);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <div className="text-center py-20 text-gray-500">
        Memuat data pesanan...
      </div>
    );
  }

  if (orders.length === 0) {
    return (
      <div className="text-center py-20 text-gray-500">
        Belum ada pesanan. Yuk buat pesanan pertama kamu!
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-24 space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
        Riwayat Pesanan
      </h2>

      {orders.map((order) => (
        <div
          key={order.id}
          className="bg-white rounded-2xl shadow-lg p-6 transform transition-all hover:shadow-xl"
        >
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Estimasi tiba {order.estimate || "Menunggu estimasi"}
            </h3>
            <p className="text-gray-600">
              Status:{" "}
              <span className="font-semibold text-indigo-600">
                {order.status}
              </span>
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

          {/* Item Details */}
          <div className="bg-gray-50 rounded-xl mt-6 overflow-hidden">
            <div className="p-4 border-b border-gray-100">
              <h3 className="text-lg font-bold text-gray-800">
                Item Details
              </h3>
            </div>

            <div className="p-4 space-y-3">
              {order.items?.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-10 h-10 flex items-center justify-center bg-blue-100 rounded-lg text-xl">
                      🧺
                    </span>
                    <span className="font-medium text-gray-700">
                      {item.name || "Item"}
                    </span>
                  </div>
                  <span className="font-semibold text-gray-900">
                    Rp {item.price.toLocaleString("id-ID")}
                  </span>
                </div>
              ))}

              <div className="mt-6 pt-4 border-t border-gray-200 space-y-2 text-gray-700">
                <div className="flex justify-between">
                  <span>Subtotal Pengiriman</span>
                  <span>Rp {order.subtotalPengiriman.toLocaleString("id-ID")}</span>
                </div>
                <div className="flex justify-between">
                  <span>Biaya Layanan</span>
                  <span>Rp {order.biayaLayanan.toLocaleString("id-ID")}</span>
                </div>
                <div className="flex justify-between font-bold pt-3">
                  <span>Total Pembayaran</span>
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    Rp {order.totalPembayaran.toLocaleString("id-ID")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatusPesanan;
