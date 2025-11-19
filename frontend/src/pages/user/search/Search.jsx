import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import laundry1 from "../../../assets/laundry1.png";
import laundry2 from "../../../assets/laundry2.png";
import laundry3 from "../../../assets/laundry3.png";

// Sample data, replace with data from your backend later
const laundries = [
  { id: 1, img: laundry1, name: "I Clean Laundry", rating: "⭐ 4.8 | 1K+ Orderan", to: "/mitra/IClean" },
  { id: 2, img: laundry2, name: "Pak To Laundry", rating: "⭐ 4.9 | 1K+ Orderan", to: "/mitra/IClean" },
  { id: 3, img: laundry3, name: "Elsa Laundry", rating: "⭐ 4.8 | 500+ Orderan", to: "/mitra/IClean" },
  { id: 4, img: laundry1, name: "Laundry Express", rating: "⭐ 4.7 | 900+ Orderan", to: "/mitra/IClean" },
  { id: 5, img: laundry2, name: "Cerah Laundry", rating: "⭐ 4.8 | 2K+ Orderan", to: "/mitra/IClean" },
  { id: 6, img: laundry3, name: "Wangi Laundry", rating: "⭐ 4.9 | 1.5K+ Orderan", to: "/mitra/IClean" },
];

const Search = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <main className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-800 mb-2">Daftar Mitra Laundry</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Temukan mitra laundry terbaik di sekitar Anda.
            </p>
        </div>

        <div className="max-w-2xl mx-auto mb-10">
            <div className="relative flex items-center p-2 bg-white rounded-full shadow-md">
                <div className="pl-4 pr-2">
                    <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>
                <input
                    type="text"
                    placeholder="Cari nama laundry atau lokasi..."
                    className="w-full pl-2 pr-4 py-2 bg-transparent rounded-full focus:outline-none text-gray-800 placeholder-gray-500"
                />
                 <button className="ml-2 px-6 py-2.5 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105">
                    Cari
                </button>
            </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {laundries.map((laundry) => (
            <Link key={laundry.id} to={laundry.to} className="group block">
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2 overflow-hidden">
                <div className="relative">
                    <img
                    src={laundry.img}
                    alt={laundry.name}
                    className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-blue-600 shadow-sm">
                        {laundry.rating.split(' ')[1]}
                    </div>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold text-blue-800 mb-2 group-hover:text-blue-600 transition-colors">{laundry.name}</h3>
                  <p className="text-gray-600 text-sm">{laundry.rating.split('|')[1]}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Search;
