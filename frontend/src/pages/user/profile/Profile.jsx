import React, { useEffect, useState } from "react";
import { auth, db } from "../../../firebase";
import { signOut, updateProfile } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", address: "" });
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        const docRef = doc(db, "users", currentUser.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setProfile(docSnap.data());
          setForm({
            name: docSnap.data().name || "",
            phone: docSnap.data().phone || "",
            address: docSnap.data().address || "",
          });
        }
      }
    });
    return () => unsubscribe();
  }, []);

  const handleEdit = () => setEditing(true);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = async (e) => {
    e.preventDefault();
    if (!user) return;
    const docRef = doc(db, "users", user.uid);
    await setDoc(
      docRef,
      {
        name: form.name,
        phone: form.phone,
        address: form.address,
        email: user.email,
      },
      { merge: true }
    );
    await updateProfile(user, { displayName: form.name });
    setProfile({ ...profile, ...form });
    setEditing(false);
  };

  const handleLogout = () => setShowLogoutPopup(true);
  const confirmLogout = () => {
    signOut(auth);
    setShowLogoutPopup(false);
  };
  const cancelLogout = () => setShowLogoutPopup(false);

  if (!user) return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md mx-auto">
        <div className="bg-white shadow rounded-lg p-6 animate-pulse">
          <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 pt-20 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,transparent,black,transparent)] pointer-events-none"></div>
      <div className="w-full max-w-4xl mx-auto relative">
        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-4">
            Profil Pengguna
          </h1>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Lihat dan kelola data akun LaundryInn Anda
          </p>
        </div>

        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
          <div className="relative bg-white shadow-xl rounded-2xl overflow-hidden">
            {/* Profile Header with Avatar */}
            <div className="relative bg-gradient-to-r from-indigo-500 to-purple-600 px-6 pt-16 pb-20">
              <div className="absolute inset-0 bg-grid-white/[0.1] [mask-image:linear-gradient(0deg,transparent,white,transparent)]"></div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                <div className="relative group cursor-pointer">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-400 to-purple-400 blur-lg opacity-75 group-hover:opacity-100 transition duration-300"></div>
                  <img
                    src={`https://ui-avatars.com/api/?name=${profile?.name || user.email}&background=6366F1&color=fff&size=120`}
                    alt="User Avatar"
                    className="relative w-24 h-24 rounded-full ring-4 ring-white shadow-lg transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>

            {/* Profile Info Section */}
            <div className="pt-16 px-6 sm:px-12">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900">{profile?.name || user.displayName || "-"}</h2>
                <p className="text-indigo-600 font-medium mt-1">{profile?.email || user.email}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition duration-300">
                  <span className="block text-sm font-medium text-gray-500 mb-1">Nama Lengkap</span>
                  <span className="text-lg text-gray-900">{profile?.name || "-"}</span>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition duration-300">
                  <span className="block text-sm font-medium text-gray-500 mb-1">Email</span>
                  <span className="text-lg text-gray-900">{profile?.email || user.email || "-"}</span>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition duration-300">
                  <span className="block text-sm font-medium text-gray-500 mb-1">Nomor Telepon</span>
                  <span className="text-lg text-gray-900">{profile?.phone || "-"}</span>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition duration-300">
                  <span className="block text-sm font-medium text-gray-500 mb-1">Alamat</span>
                  <span className="text-lg text-gray-900">{profile?.address || "-"}</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="px-6 sm:px-12 py-6 bg-gray-50/80 backdrop-blur-sm flex flex-col sm:flex-row justify-end space-y-3 sm:space-y-0 sm:space-x-4">
              <button
                onClick={handleEdit}
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-200 transform hover:scale-[1.02] hover:shadow-lg"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
                Edit Profil
              </button>
              <button
                onClick={handleLogout}
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-red-600 rounded-xl border-2 border-red-200 hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all duration-200 transform hover:scale-[1.02]"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                Keluar
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Profile Modal */}
      {editing && (
        <div className="fixed inset-0 flex items-center justify-center p-4 z-50">
          <div className="absolute inset-0 bg-gray-900/50 backdrop-blur-sm" onClick={() => setEditing(false)}></div>
          <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full mx-auto transform transition-all duration-300 ease-out animate-modal-up">
            <div className="relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 h-24"></div>
              <div className="relative p-6 pt-20">
                <h3 className="text-2xl font-bold text-gray-900 mb-8">Edit Profil</h3>
                <form onSubmit={handleSave} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Nama Lengkap</label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200"
                      placeholder="Masukkan nama lengkap"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Nomor Telepon</label>
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200"
                      placeholder="Contoh: 08123456789"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Alamat</label>
                    <input
                      name="address"
                      value={form.address}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition duration-200"
                      placeholder="Masukkan alamat lengkap"
                    />
                  </div>
                  <div className="flex justify-end space-x-3 pt-6">
                    <button
                      type="button"
                      onClick={() => setEditing(false)}
                      className="px-6 py-3 bg-white text-gray-700 rounded-xl border-2 border-gray-200 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all duration-200 transform hover:scale-[1.02]"
                    >
                      Batal
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-200 transform hover:scale-[1.02]"
                    >
                      Simpan
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Logout Confirmation Modal */}
      {showLogoutPopup && (
        <div className="fixed inset-0 flex items-center justify-center p-4 z-50">
          <div className="absolute inset-0 bg-gray-900/50 backdrop-blur-sm" onClick={cancelLogout}></div>
          <div className="relative bg-white rounded-2xl shadow-2xl max-w-sm w-full mx-auto p-8 transform transition-all duration-300 ease-out animate-modal-up">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Konfirmasi Keluar</h3>
              <p className="text-gray-600 mb-8">Apakah Anda yakin ingin keluar dari akun ini?</p>
              <div className="flex justify-center space-x-4">
                <button
                  onClick={cancelLogout}
                  className="px-6 py-3 bg-white text-gray-700 rounded-xl border-2 border-gray-200 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all duration-200 transform hover:scale-[1.02]"
                >
                  Batal
                </button>
                <button
                  onClick={confirmLogout}
                  className="px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl hover:from-red-700 hover:to-red-800 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all duration-200 transform hover:scale-[1.02]"
                >
                  Ya, Keluar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;