import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { db, auth } from "../../../firebase";
import { addDoc, collection, serverTimestamp, doc, getDoc } from "firebase/firestore";

const ConfirmOrders = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [profile, setProfile] = useState(null);
  const [loadingProfile, setLoadingProfile] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      const user = auth.currentUser;
      if (user) {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setProfile(docSnap.data());
        }
      }
      setLoadingProfile(false);
    };

    fetchProfile();
  }, []);

  // Ambil data dari halaman sebelumnya
  const { selectedData = [], note = "" } = location.state || {};

  // ✅ Hitung subtotal dengan aman (pastikan price berupa angka dan perhatikan kuantitas)
  const subtotalPesanan = selectedData.reduce((sum, item) => {
    const harga = Number(item.price) || 0;
    const qty = item.quantity || 1;
    return sum + harga * qty;
  }, 0);

  const totalPembayaran = subtotalPesanan;

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
      customerInfo: {
        name: profile?.name || user.displayName,
        phone: profile?.phone,
        address: profile?.address,
      },
      items: selectedData,
      note,
      subtotalPesanan,
      totalPembayaran,
      status: "Menunggu Konfirmasi",
      createdAt: serverTimestamp(),
    });

    setIsModalOpen(true);
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
          {loadingProfile ? (
            <div className="space-y-2 animate-pulse">
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              <div className="h-4 bg-gray-200 rounded w-full"></div>
            </div>
          ) : (
            <>
              <p className="text-gray-700">{profile?.name || auth.currentUser.displayName || "Nama tidak diatur"}</p>
              <p className="text-gray-700">{profile?.phone || "Telepon tidak diatur"}</p>
              <p className="text-gray-700">{profile?.address || "Alamat tidak diatur"}</p>
            </>
          )}
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
                    {item.quantity > 1 && ` (x${item.quantity})`}
                  </span>
                  <span className="text-gray-600">
                    Rp{" "}
                    {(Number(item.price) * (item.quantity || 1)).toLocaleString(
                      "id-ID"
                    )}
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

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[100]">
          <div className="bg-white p-8 rounded-2xl shadow-xl text-center max-w-sm mx-4">
            <div className="mb-4">
              <svg className="w-16 h-16 mx-auto text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
            </div>
            <h3 className="text-2xl font-bold mb-2 text-gray-800">Pesanan Berhasil!</h3>
            <p className="text-gray-600 mb-6">Pesanan Anda telah berhasil dibuat dan sedang menunggu konfirmasi.</p>
            <button
                onClick={() => {
                    setIsModalOpen(false);
                    navigate("/user/statusOrders");
                }}
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:scale-[1.02] transition-all"
            >
                Lihat Status Pesanan
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ConfirmOrders;
