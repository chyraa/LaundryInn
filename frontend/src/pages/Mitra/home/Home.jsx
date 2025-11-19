import React from "react";
import delivery from "../../../assets/delivery.png";
import fast from "../../../assets/fast.png";
import premium from "../../../assets/premium.png";
import Navbar from "../../../components/NavbarMitra";
import Footer from "../../../components/Footer";

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
    <div className="bg-gray-100 font-sans text-gray-800">
      {/* ✅ Navbar */}
      <Navbar />

      {/* HERO */}
      <section className="bg-blue-900 text-white text-center py-20 px-5">
        <h2 className="text-2xl font-light">Mager Nganter Laundry?</h2>
        <h1 className="text-5xl font-bold my-3">LaundryIn Aja!!</h1>
        <p className="text-lg">
          Layanan Laundry Praktis, Terpercaya, Antar & Jemput
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg mt-5 cursor-pointer">
          Pesan Sekarang
        </button>
      </section>

      {/* FITUR */}
      <section className="flex justify-center gap-5 my-12">
        <div className="text-center w-56 p-5 rounded-xl bg-pink-100">
          <img src={delivery} alt="Gratis Ongkir" className="w-16 mx-auto mb-3" />
          <h3 className="font-bold text-lg">Gratis Ongkir</h3>
          <p className="text-gray-600">Tanpa Biaya Tambahan</p>
        </div>
        <div className="text-center w-56 p-5 rounded-xl bg-yellow-100">
          <img src={fast} alt="Cepat & Praktis" className="w-16 mx-auto mb-3" />
          <h3 className="font-bold text-lg">Cepat & Praktis</h3>
          <p className="text-gray-600">Proses Mudah dan Cepat</p>
        </div>
        <div className="text-center w-56 p-5 rounded-xl bg-green-100">
          <img src={premium} alt="Premium" className="w-16 mx-auto mb-3" />
          <h3 className="font-bold text-lg">Premium</h3>
          <p className="text-gray-600">Kualitas Dijamin Terbaik</p>
        </div>
      </section>

      {/* TRUSTED */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-600 text-white text-center py-10 px-5">
        <h2 className="text-3xl font-bold">Dipercaya oleh Ribuan Pengguna</h2>
        <div className="flex justify-center gap-16 mt-5">
          <div>
            <h3 className="text-3xl font-bold">5K+</h3>
            <p className="text-gray-300">Order</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">5K+</h3>
            <p className="text-gray-300">Pengguna</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">5K+</h3>
            <p className="text-gray-300">Mitra</p>
          </div>
        </div>
      </section>

      {/* PESANAN MASUK */}
      <section className="bg-white max-w-4xl mx-auto p-8 rounded-xl shadow-md my-10">
        <h2 className="text-blue-900 text-2xl font-bold mb-5">
          Pesanan Masuk!
        </h2>
        {pesananBaru.map((p) => (
          <div key={p.id} className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4">
            <p>
              <strong className="font-semibold">ID Pesanan:</strong> #{p.id}
            </p>
            <p>
              <strong className="font-semibold">Lokasi:</strong> {p.lokasi}
            </p>
            <p>
              <strong className="font-semibold">Layanan:</strong> {p.layanan}
            </p>
            <p>
              <strong className="font-semibold">Total Harga:</strong> {p.total}
            </p>
            <div className="mt-4">
              <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg cursor-pointer">
                Terima Orderan
              </button>
              <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg ml-3 cursor-pointer">
                Tolak Orderan
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* ✅ Footer */}
      <Footer />
    </div>
  );
};

export default HomeMitra;
