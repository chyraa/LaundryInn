import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import laundryImg from "../../assets/landing.jpg";

const LandingMitra = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Decorative blob */}
      <div className="hidden lg:block fixed top-0 right-0 -translate-y-1/4 translate-x-1/4 z-0">
        <div className="absolute w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply opacity-50 animate-blob" />
        <div className="absolute w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply opacity-50 animate-blob animation-delay-2000" />
        <div className="absolute w-96 h-96 bg-pink-100 rounded-full mix-blend-multiply opacity-50 animate-blob animation-delay-4000" />
      </div>

      {/* HEADER */}
      <header className="sticky top-0 z-50 py-4 px-4 sm:px-6 lg:px-8 border-b border-gray-100 bg-white/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <img src={logo} alt="LaundryIn Logo" className="h-10 w-auto" />
          <div className="flex items-center gap-4">
            <Link 
              to="/login"
              className="hidden sm:inline-flex items-center px-5 py-2.5 border-2 border-indigo-600 text-indigo-600 text-sm font-medium rounded-lg hover:bg-indigo-600 hover:text-white transition-all duration-200"
            >
              Masuk / Daftar
            </Link>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div className="relative z-10 mb-12 lg:mb-0 lg:pr-8">
              <div className="animate-fade-in-up">
                <h2 className="text-xl sm:text-2xl text-gray-600 font-medium tracking-wide">
                  Solusi cucian menumpuk hanya di
                </h2>
                <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent tracking-tight leading-tight">
                  LaundryIn
                </h1>
                <p className="mt-6 text-lg sm:text-xl text-gray-500 leading-relaxed">Cepat, Praktis, dan Terjangkau</p>
                
                <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6">
                  <Link 
                    to="/login" 
                    className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-xl text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-indigo-500/25 whitespace-nowrap"
                  >
                    Mulai Sekarang
                    <svg className="ml-3 w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                  <Link 
                    to="/about" 
                    className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-xl text-indigo-600 bg-indigo-50 hover:bg-indigo-100 transition-colors duration-200 whitespace-nowrap"
                  >
                    Pelajari Lebih Lanjut
                  </Link>
                </div>

                <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div className="flex items-center space-x-3 bg-white/60 backdrop-blur-sm rounded-lg p-3 shadow-sm">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center">
                      <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-gray-600">Gratis Ongkir</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-white/60 backdrop-blur-sm rounded-lg p-3 shadow-sm">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center">
                      <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-gray-600">Express 12 Jam</span>
                  </div>
                  <div className="flex items-center space-x-3 bg-white/60 backdrop-blur-sm rounded-lg p-3 shadow-sm">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center">
                      <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-gray-600">Terpercaya</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative lg:pl-8 animate-fade-in-up animation-delay-200">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                <div className="relative bg-white p-2 rounded-2xl">
                  <img 
                    src={laundryImg} 
                    alt="Laundry Machine" 
                    className="rounded-xl shadow-2xl w-full h-[400px] object-cover transform group-hover:scale-[1.02] transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/30 via-purple-600/20 to-transparent rounded-xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FITUR */}
      <section className="py-24 bg-white relative">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,transparent,black,transparent)]"></div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-600 text-sm font-semibold tracking-wide uppercase animate-fade-in-up">
              Layanan Unggulan
            </span>
            <h2 className="mt-6 text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight animate-fade-in-up animation-delay-200">
              L A U N D R Y I N
            </h2>
            <p className="mt-6 text-lg sm:text-xl text-gray-500 leading-relaxed animate-fade-in-up animation-delay-400">
              Nikmati berbagai keunggulan layanan kami untuk pengalaman laundry terbaik Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl blur opacity-30 group-hover:opacity-70 transition duration-500 group-hover:duration-200"></div>
              <div className="relative bg-white rounded-xl p-8 transform transition duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg transform group-hover:rotate-6 transition-transform duration-300">
                  <i className="fa-solid fa-truck text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Gratis Ongkir</h3>
                <p className="text-gray-600 leading-relaxed">Antar jemput pakaian tanpa biaya tambahan untuk area terjangkau</p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl blur opacity-30 group-hover:opacity-70 transition duration-500 group-hover:duration-200"></div>
              <div className="relative bg-white rounded-xl p-8 transform transition duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg transform group-hover:rotate-6 transition-transform duration-300">
                  <i className="fa-solid fa-bolt text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Cepat & Praktis</h3>
                <p className="text-gray-600 leading-relaxed">Pesan layanan hanya dengan beberapa klik, siap dalam hitungan jam</p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl blur opacity-30 group-hover:opacity-70 transition duration-500 group-hover:duration-200"></div>
              <div className="relative bg-white rounded-xl p-8 transform transition duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg transform group-hover:rotate-6 transition-transform duration-300">
                  <i className="fa-solid fa-star text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Premium</h3>
                <p className="text-gray-600 leading-relaxed">Kualitas hasil cucian terbaik dengan wangi tahan lama yang premium</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATISTIK */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-purple-600">
          <div className="absolute inset-0 bg-grid-white/[0.1] [mask-image:linear-gradient(0deg,transparent,white,transparent)]"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 animate-fade-in-up">
              Dipercaya oleh Ribuan Pengguna
            </h2>
            <p className="text-lg sm:text-xl text-indigo-100 max-w-2xl mx-auto animate-fade-in-up animation-delay-200 leading-relaxed">
              Bergabung dengan ribuan pengguna yang telah merasakan kemudahan layanan LaundryIn
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            <div className="relative group">
              <div className="absolute inset-0 bg-white/10 rounded-2xl blur-xl transition-all duration-300 group-hover:opacity-75 group-hover:scale-105"></div>
              <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 sm:p-10 border border-white/10 transform transition duration-300 hover:-translate-y-1">
                <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-8 transform transition-transform group-hover:rotate-6 duration-300">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-5xl lg:text-6xl font-bold text-white mb-4 animate-count">5K+</h3>
                <p className="text-lg text-indigo-100">Pelanggan Aktif</p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-white/10 rounded-2xl blur-xl transition-all duration-300 group-hover:opacity-75 group-hover:scale-105"></div>
              <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 sm:p-10 border border-white/10 transform transition duration-300 hover:-translate-y-1">
                <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-8 transform transition-transform group-hover:rotate-6 duration-300">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <h3 className="text-5xl lg:text-6xl font-bold text-white mb-4 animate-count">5K+</h3>
                <p className="text-lg text-indigo-100">Pesanan Selesai</p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-white/10 rounded-2xl blur-xl transition-all duration-300 group-hover:opacity-75 group-hover:scale-105"></div>
              <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 sm:p-10 border border-white/10 transform transition duration-300 hover:-translate-y-1">
                <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-8 transform transition-transform group-hover:rotate-6 duration-300">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-5xl lg:text-6xl font-bold text-white mb-4 animate-count">5K+</h3>
                <p className="text-lg text-indigo-100">Mitra Terdaftar</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONI */}
      <section className="py-24 sm:py-32 relative overflow-hidden bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Apa Kata Mereka Tentang Kami
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Dengarkan pengalaman mereka menggunakan layanan LaundryIn
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl">
              <div className="flex items-center mb-6">
                <img
                  className="h-14 w-14 rounded-full border-2 border-indigo-100"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="User avatar"
                />
                <div className="ml-4">
                  <h4 className="text-xl font-semibold text-gray-900">John Doe</h4>
                  <p className="text-indigo-600 font-medium">Customer</p>
                </div>
              </div>
              <div className="mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 inline-block" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                "Sangat puas dengan layanan LaundryIn. Cucian selalu bersih dan wangi. Pengiriman tepat waktu!"
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl">
              <div className="flex items-center mb-6">
                <img
                  className="h-14 w-14 rounded-full border-2 border-indigo-100"
                  src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="User avatar"
                />
                <div className="ml-4">
                  <h4 className="text-xl font-semibold text-gray-900">Jane Smith</h4>
                  <p className="text-indigo-600 font-medium">Customer</p>
                </div>
              </div>
              <div className="mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 inline-block" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                "Aplikasi yang sangat membantu untuk orang sibuk seperti saya. Proses pemesanan mudah dan cepat!"
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl">
              <div className="flex items-center mb-6">
                <img
                  className="h-14 w-14 rounded-full border-2 border-indigo-100"
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                  alt="User avatar"
                />
                <div className="ml-4">
                  <h4 className="text-xl font-semibold text-gray-900">Michael Johnson</h4>
                  <p className="text-indigo-600 font-medium">Customer</p>
                </div>
              </div>
              <div className="mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 inline-block" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                "Harga terjangkau dan kualitas layanan sangat baik. Recommended!"
              </p>
            </div>
          </div>
        </div>

        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob"></div>
        <div className="absolute -bottom-32 left-48 w-96 h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-96 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob animation-delay-4000"></div>
      </section>

      {/* FOOTER */}
      <footer className="relative bg-gray-900 text-gray-300 pt-16 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05]"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 lg:col-span-2">
              <img src={logo} alt="LaundryIn Logo" className="h-10 w-auto mb-6" />
              <p className="text-gray-400 max-w-md text-sm leading-relaxed">
                Solusi terbaik untuk kebutuhan laundry Anda. Kami hadir dengan layanan profesional, 
                teknologi modern, dan komitmen untuk memberikan pengalaman laundry terbaik.
              </p>
              <div className="mt-6 flex space-x-4">
                <a href="https://facebook.com/laundryIn" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-indigo-600 hover:text-white transition-colors duration-200">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a href="https://twitter.com/laundryIn" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-indigo-600 hover:text-white transition-colors duration-200">
                  <i className="fa-brands fa-twitter"></i>
                </a>
                <a href="https://instagram.com/laundryIn" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-indigo-600 hover:text-white transition-colors duration-200">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-white text-lg font-semibold mb-6">Support</h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/help" className="group flex items-center text-gray-400 hover:text-white transition-colors duration-200">
                    <span className="absolute w-0.5 h-0 bg-indigo-500 group-hover:h-full transition-all duration-300"></span>
                    <span className="relative pl-4">Help Center</span>
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="group flex items-center text-gray-400 hover:text-white transition-colors duration-200">
                    <span className="absolute w-0.5 h-0 bg-indigo-500 group-hover:h-full transition-all duration-300"></span>
                    <span className="relative pl-4">Contact Us</span>
                  </Link>
                </li>
                <li>
                  <Link to="/track" className="group flex items-center text-gray-400 hover:text-white transition-colors duration-200">
                    <span className="absolute w-0.5 h-0 bg-indigo-500 group-hover:h-full transition-all duration-300"></span>
                    <span className="relative pl-4">Track Order</span>
                  </Link>
                </li>
                <li>
                  <Link to="/returns" className="group flex items-center text-gray-400 hover:text-white transition-colors duration-200">
                    <span className="absolute w-0.5 h-0 bg-indigo-500 group-hover:h-full transition-all duration-300"></span>
                    <span className="relative pl-4">Returns</span>
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white text-lg font-semibold mb-6">Contact</h4>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3 group">
                  <div className="mt-1 w-5 h-5 text-indigo-500 group-hover:text-indigo-400 transition-colors duration-200">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="text-gray-400 group-hover:text-gray-300 transition-colors duration-200">
                    laundryinsupport@gmail.com
                  </span>
                </li>
                <li className="flex items-start space-x-3 group">
                  <div className="mt-1 w-5 h-5 text-indigo-500 group-hover:text-indigo-400 transition-colors duration-200">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <span className="text-gray-400 group-hover:text-gray-300 transition-colors duration-200">
                    +62 852 7655 8890
                  </span>
                </li>
                <li className="flex items-start space-x-3 group">
                  <div className="mt-1 w-5 h-5 text-indigo-500 group-hover:text-indigo-400 transition-colors duration-200">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-gray-400 group-hover:text-gray-300 transition-colors duration-200">
                    Setiap Hari 09.00 - 22.00
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-800">
            <p className="text-center text-gray-400 text-sm">
              © 2025 LaundryIn. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingMitra;

