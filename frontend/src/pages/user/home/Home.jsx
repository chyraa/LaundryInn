import React from "react";
import delivery from "../../../assets/delivery.png";
import fast from "../../../assets/fast.png";
import premium from "../../../assets/premium.png";
import laundry1 from "../../../assets/laundry1.png";
import laundry2 from "../../../assets/laundry2.png";
import laundry3 from "../../../assets/laundry3.png";
import { Link } from "react-router-dom";
import { sampleOrders } from "../../../data/sampleOrders";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase";
import Navbar from "../../../components/Navbar"; // ✅ Import Navbar
import Footer from "../../../components/Footer.jsx";

const laundries = [
  { id: 1, img: laundry1, name: "I Clean Laundry", rating: "⭐ 4.8 | 1K+ Orderan", to: "/mitra/IClean" },
  { id: 2, img: laundry2, name: "Pak To Laundry", rating: "⭐ 4.9 | 1K+ Orderan", to: "/mitra/IClean" },
  { id: 3, img: laundry3, name: "Elsa Laundry", rating: "⭐ 4.8 | 500+ Orderan", to: "/mitra/IClean" },
  { id: 4, img: laundry1, name: "Laundry Express", rating: "⭐ 4.7 | 900+ Orderan", to: "/mitra/IClean" },
];

const Home = () => {
  const [user] = useAuthState(auth);

  return (
    <div className="min-h-screen bg-white">
      {/* ✅ Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-white to-blue-50/20 py-20 sm:py-32">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
          <div className="hidden sm:block absolute -top-40 right-0 h-40 w-40 md:h-72 md:w-72 lg:h-96 lg:w-96 rounded-full bg-blue-100 opacity-20 blur-3xl animate-pulse"></div>
          <div className="hidden sm:block absolute left-0 top-0 h-40 w-40 md:h-72 md:w-72 lg:h-96 lg:w-96 rounded-full bg-blue-200 opacity-20 blur-3xl animate-pulse delay-700"></div>
        </div>
        
        {/* Main content */}
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-fade-in-up">
              <h2 className="inline-block text-xl sm:text-2xl font-medium text-blue-600 px-4 py-1 rounded-full bg-blue-50 border border-blue-100">
                Mager Nganter Laundry? 🧺
              </h2>
            </div>
            
            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800 tracking-tight animate-fade-in-up delay-100">
              LaundryIn Aja!!
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg sm:text-xl text-gray-600 animate-fade-in-up delay-200">
              <span className="relative">
                Solusi praktis untuk kamu yang males anter jemput laundry.
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-200 transform scale-x-0 transition-transform origin-left group-hover:scale-x-100"></span>
              </span>
              <span className="block mt-2 font-medium text-blue-800">
                Tinggal klik, baju kotor langsung dijemput!
              </span>
            </p>

            {!user && (
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-300">
                <Link to="/login">
                  <button className="group relative inline-flex items-center justify-center px-8 py-3 bg-blue-600 text-white rounded-lg overflow-hidden transition-all duration-300 ease-out hover:bg-blue-700 hover:scale-105 transform">
                    <span className="absolute inset-0 bg-white/10 group-hover:scale-x-100 scale-x-0 origin-left transition-transform duration-500"></span>
                    <span className="relative inline-flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <span>
                        Daftar / Masuk <br /> sebagai Pengguna
                      </span>
                    </span>
                  </button>
                </Link>
                <Link to="/login-mitra">
                  <button className="group relative inline-flex items-center justify-center px-8 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-lg overflow-hidden transition-all duration-300 ease-out hover:bg-blue-50 hover:scale-105 transform">
                    <span className="absolute inset-0 bg-blue-50 group-hover:scale-x-100 scale-x-0 origin-left transition-transform duration-500"></span>
                    <span className="relative inline-flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      <span>
                        Daftar / Masuk <br /> sebagai Mitra
                      </span>
                    </span>
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Fitur Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white via-blue-50 to-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -right-10 top-10 w-72 h-72 bg-blue-200 rounded-full blur-3xl"></div>
          <div className="absolute -left-10 bottom-10 w-72 h-72 bg-blue-300 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 relative">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">Kenapa Harus LaundryIn?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">Nikmati berbagai keuntungan menggunakan layanan kami</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="mb-6 bg-blue-50 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <img src={delivery} alt="Gratis Ongkir" className="w-12 h-12" style={{ maxWidth: '100%', height: 'auto' }} />
                </div>
                <h3 className="text-xl font-bold text-blue-800 mb-4 text-center">Gratis Ongkir</h3>
                <p className="text-gray-600 text-center leading-relaxed">Laundry dijemput & diantar tanpa biaya tambahan. Hemat waktu dan tenaga Anda.</p>
              </div>
            </div>
            
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="mb-6 bg-blue-50 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <img src={fast} alt="Cepat" className="w-12 h-12" style={{ maxWidth: '100%', height: 'auto' }} />
                </div>
                <h3 className="text-xl font-bold text-blue-800 mb-4 text-center">Cepat & Praktis</h3>
                <p className="text-gray-600 text-center leading-relaxed">Pesan mudah, laundry langsung diproses cepat. Tak perlu menunggu lama.</p>
              </div>
            </div>
            
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="mb-6 bg-blue-50 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <img src={premium} alt="Premium" className="w-12 h-12" style={{ maxWidth: '100%', height: 'auto' }} />
                </div>
                <h3 className="text-xl font-bold text-blue-800 mb-4 text-center">Premium</h3>
                <p className="text-gray-600 text-center leading-relaxed">Layanan berkualitas dengan harga terjangkau. Dijamin bersih dan wangi.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-800 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 pointer-events-none -z-10">
          <div className="hidden sm:block absolute right-0 top-0 w-40 h-40 md:w-72 md:h-72 lg:w-96 lg:h-96 bg-white/5 rounded-full blur-3xl transform rotate-45"></div>
          <div className="hidden sm:block absolute left-0 bottom-0 w-40 h-40 md:w-72 md:h-72 lg:w-96 lg:h-96 bg-white/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative">
          <span className="inline-block px-4 py-1 bg-white/10 rounded-full text-blue-100 text-sm font-medium mb-4">Dipercaya Pengguna</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">Bergabung dengan Ribuan Pengguna Lainnya</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 transform hover:scale-105 transition-all duration-300">
              <div className="text-5xl font-bold text-white mb-2 flex items-center justify-center">
                <span className="bg-gradient-to-r from-blue-100 to-white bg-clip-text text-transparent">5K+</span>
              </div>
              <div className="w-16 h-1 bg-blue-400 mx-auto mb-4 rounded-full"></div>
              <p className="text-blue-100 text-lg">Order Selesai</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 transform hover:scale-105 transition-all duration-300">
              <div className="text-5xl font-bold text-white mb-2 flex items-center justify-center">
                <span className="bg-gradient-to-r from-blue-100 to-white bg-clip-text text-transparent">5K+</span>
              </div>
              <div className="w-16 h-1 bg-blue-400 mx-auto mb-4 rounded-full"></div>
              <p className="text-blue-100 text-lg">Pengguna Aktif</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 transform hover:scale-105 transition-all duration-300">
              <div className="text-5xl font-bold text-white mb-2 flex items-center justify-center">
                <span className="bg-gradient-to-r from-blue-100 to-white bg-clip-text text-transparent">5K+</span>
              </div>
              <div className="w-16 h-1 bg-blue-400 mx-auto mb-4 rounded-full"></div>
              <p className="text-blue-100 text-lg">Mitra Laundry</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cari Laundry */}
      <section className="py-24 px-4 bg-gradient-to-b from-white via-blue-50 to-white relative">
        <div className="absolute inset-0 pointer-events-none -z-10">
          <div className="hidden sm:block absolute transform rotate-45 right-1/4 top-1/4 w-40 h-40 md:w-64 md:h-64 lg:w-80 lg:h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="hidden sm:block absolute transform rotate-45 left-1/4 bottom-1/4 w-40 h-40 md:w-64 md:h-64 lg:w-80 lg:h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative">
          <span className="inline-block px-4 py-1 bg-blue-100 rounded-full text-blue-600 text-sm font-medium mb-4">Temukan Laundry</span>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6">Cari Laundry di Sekitar Anda</h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">Temukan laundry terdekat dengan layanan terbaik sesuai kebutuhan Anda</p>
          
          <div className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto bg-white p-2 rounded-2xl shadow-lg">
            <div className="flex-1 relative">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <input 
                type="text" 
                placeholder="Masukkan alamat Anda..." 
                className="w-full pl-10 pr-4 py-3 rounded-xl border-2 border-blue-100 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20 transition-all duration-300"
              />
            </div>
            <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:shadow-lg hover:scale-105 transform transition-all duration-300 flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <span>Cari Sekarang</span>
            </button>
          </div>
        </div>
      </section>

      {/* Riwayat Terbaru */}
      <section className="py-16 px-4 bg-gradient-to-b from-white to-blue-50/30">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-blue-600 text-sm font-medium">Aktivitas Anda</span>
              <h3 className="text-2xl md:text-3xl font-bold text-blue-800 mt-1">Riwayat Pesanan Terbaru</h3>
            </div>
            <Link to="/user/orders" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
              Lihat Semua
              <svg className="w-5 h-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sampleOrders.slice(0, 3).map((o) => (
              <Link key={o.id} to="/user/orders" className="group block">
                <article className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1 border border-blue-50">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <div className="font-bold text-blue-800">Pesanan #{o.id}</div>
                        <div className="text-sm text-gray-500">{o.pickup}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-blue-600 font-bold">{o.total}</div>
                      <div className="text-sm text-green-500">Selesai ✓</div>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-gray-100">
                    <div className="flex items-center text-sm text-gray-500">
                      <svg className="w-4 h-4 mr-1 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Pesanan dibuat 2 hari yang lalu
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Laundry List */}
      <section className="py-20 px-4 bg-gradient-to-b from-blue-50/30 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-blue-100 rounded-full text-blue-600 text-sm font-medium mb-4">Mitra Terpercaya</span>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">Laundry Pilihan Terbaik</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">Temukan mitra laundry terbaik dengan pelayanan berkualitas dan harga terjangkau</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {laundries.map((l) => (
              <Link key={l.id} to={l.to} className="group">
                <article className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-2">
                  <div className="relative">
                    <img src={l.img} alt={l.name} className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-blue-600">
                      {l.rating.split('|')[0]}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-blue-800 mb-2 group-hover:text-blue-600 transition-colors">{l.name}</h3>
                    <div className="flex items-center justify-between">
                      <p className="text-gray-600 text-sm">{l.rating.split('|')[1]}</p>
                      <div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 transform transition-transform group-hover:translate-x-2">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/search" className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors group">
              Lihat Semua Laundry
              <svg className="w-5 h-5 ml-2 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
