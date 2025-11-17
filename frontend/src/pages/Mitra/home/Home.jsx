import React from "react";
import Navbar from "../../../components/NavbarMitra";
import logo from "../../../assets/logo.png";
import delivery from "../../../assets/delivery.png";
import fast from "../../../assets/fast.png";
import premium from "../../../assets/premium.png";
import LandingBg from "../../../assets/LandingBg.jpg"; // ← aktifkan kalau sudah punya gambarnya

const pesananBaru = [
  {
    id: "LAUNDRYIN12345",
    lokasi: "Jl. Melati No.15",
    layanan: "Cuci Kering Setrika - Ekspress",
    total: "Rp.50.000",
  },
  {
    id: "LAUNDRYIN12346",
    lokasi: "Jl. Mawar No.22",
    layanan: "Cuci Kering Setrika - Reguler",
    total: "Rp.45.000",
  },
];

const HomeMitra = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* ✅ Navbar */}
      <Navbar />

      {/* ✅ HERO SECTION DENGAN GAMBAR FULL */}
      <section
        className="relative bg-cover bg-center bg-no-repeat h-[80vh] flex flex-col justify-center items-center text-center text-white"
        style={{
          backgroundImage: `url('/LandingBg.jpg')`, 
        }}
      >
        {/* Overlay agar teks tetap terlihat */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Teks di atas gambar */}
        <div className="relative z-10 px-4">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Mager Nganter Laundry?
          </h2>
          <h1 className="text-5xl md:text-6xl font-bold mt-2 mb-4 drop-shadow-lg">
            LaundryIn Aja!!
          </h1>
          <p className="text-lg opacity-90 mb-6 drop-shadow-md">
            Layanan Laundry Praktis, Terpercaya, Antar & Jemput
          </p>
          <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition">
            Pesan Sekarang
          </button>
        </div>
      </section>

      {/* ✅ FITUR SECTION */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6 text-center">
          <div className="bg-pink-100 rounded-2xl shadow-md p-6 hover:scale-105 transition">
            <img
              src={delivery}
              alt="Gratis Ongkir"
              className="mx-auto mb-4 w-20 h-20"
            />
            <h3 className="text-xl font-semibold text-gray-800">
              Gratis Ongkir
            </h3>
            <p className="text-gray-600">Tanpa Biaya Tambahan</p>
          </div>

          <div className="bg-yellow-100 rounded-2xl shadow-md p-6 hover:scale-105 transition">
            <img
              src={fast}
              alt="Cepat & Praktis"
              className="mx-auto mb-4 w-20 h-20"
            />
            <h3 className="text-xl font-semibold text-gray-800">
              Cepat & Praktis
            </h3>
            <p className="text-gray-600">Proses Mudah dan Cepat</p>
          </div>

          <div className="bg-green-100 rounded-2xl shadow-md p-6 hover:scale-105 transition">
            <img
              src={premium}
              alt="Premium"
              className="mx-auto mb-4 w-20 h-20"
            />
            <h3 className="text-xl font-semibold text-gray-800">Premium</h3>
            <p className="text-gray-600">Kualitas Dijamin Terbaik</p>
          </div>
        </div>
      </section>

      {/* ✅ TRUSTED SECTION */}
      <section className="bg-indigo-50 py-16 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          Dipercaya oleh Ribuan Pengguna
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="bg-white shadow-lg rounded-xl p-6 w-40">
            <h3 className="text-2xl font-bold text-blue-600">5K+</h3>
            <p className="text-gray-600">Order</p>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-6 w-40">
            <h3 className="text-2xl font-bold text-blue-600">5K+</h3>
            <p className="text-gray-600">Pengguna</p>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-6 w-40">
            <h3 className="text-2xl font-bold text-blue-600">5K+</h3>
            <p className="text-gray-600">Mitra</p>
          </div>
        </div>
      </section>

      {/* ✅ PESANAN MASUK SECTION */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Pesanan Masuk!
        </h2>

        <div className="space-y-6">
          {pesananBaru.map((p) => (
            <div
              key={p.id}
              className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition"
            >
              <div className="grid md:grid-cols-2 gap-4 text-gray-700">
                <p>
                  <span className="font-semibold">ID Pesanan:</span> #{p.id}
                </p>
                <p>
                  <span className="font-semibold">Lokasi:</span> {p.lokasi}
                </p>
                <p>
                  <span className="font-semibold">Layanan:</span> {p.layanan}
                </p>
                <p>
                  <span className="font-semibold">Total Harga:</span> {p.total}
                </p>
              </div>

              <div className="mt-6 flex gap-3 justify-end">
                <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium transition">
                  Terima Orderan
                </button>
                <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-medium transition">
                  Tolak Orderan
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ✅ FOOTER */}
      <footer className="bg-gray-900 text-gray-200 py-12 px-8 mt-auto">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <img src={logo} alt="LaundryIn Logo" className="w-28 mb-4" />
            <p className="text-sm leading-relaxed">
              Solusi praktis untuk kebutuhan laundry harianmu. <br />
              Dijemput, dicuci, diantar dengan layanan terbaik.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-3 text-white">Support</h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer">Help Center</li>
              <li className="hover:text-white cursor-pointer">Contact Us</li>
              <li className="hover:text-white cursor-pointer">Track Order</li>
              <li className="hover:text-white cursor-pointer">Returns</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-3 text-white">Contact</h4>
            <p className="text-sm">laundryinsupport@gmail.com</p>
            <p className="text-sm">+62 852 7655 8890</p>
            <p className="text-sm">Setiap Hari</p>
            <p className="text-sm">09.00 - 22.00</p>
          </div>
        </div>

        <p className="text-center text-xs text-gray-500 mt-10">
          © 2025 LaundryIn. Dikembangkan oleh Chindy Rahmawati.
        </p>
      </footer>
    </div>
  );
};

export default HomeMitra;
