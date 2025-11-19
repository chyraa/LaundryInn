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

  if (!user)
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        Loading...
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-28">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-gray-900">
            Profil Pengguna
          </h1>
          <p className="mt-2 text-lg text-gray-600">
            Lihat dan kelola data akun LaundryInn Anda
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-6 sm:p-8">
            <div className="flex items-center space-x-5">
              <img
                src={`https://ui-avatars.com/api/?name=${
                  profile?.name || user.email
                }&background=0D8ABC&color=fff&size=128`}
                alt="User Avatar"
                className="w-20 h-20 rounded-full border-4 border-cyan-500"
              />
              <div>
                <h2 className="text-2xl font-bold text-gray-800">
                  {profile?.name || user.displayName || "-"}
                </h2>
                <p className="text-gray-500">{profile?.email || user.email}</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200">
            <dl>
              <div className="bg-gray-50 px-6 py-4 grid grid-cols-3 gap-4">
                <dt className="text-sm font-medium text-gray-500">Nama</dt>
                <dd className="mt-1 text-sm text-gray-900 col-span-2">
                  {profile?.name || "-"}
                </dd>
              </div>
              <div className="bg-white px-6 py-4 grid grid-cols-3 gap-4">
                <dt className="text-sm font-medium text-gray-500">Email</dt>
                <dd className="mt-1 text-sm text-gray-900 col-span-2">
                  {profile?.email || user.email || "-"}
                </dd>
              </div>
              <div className="bg-gray-50 px-6 py-4 grid grid-cols-3 gap-4">
                <dt className="text-sm font-medium text-gray-500">No. HP</dt>
                <dd className="mt-1 text-sm text-gray-900 col-span-2">
                  {profile?.phone || "-"}
                </dd>
              </div>
              <div className="bg-white px-6 py-4 grid grid-cols-3 gap-4">
                <dt className="text-sm font-medium text-gray-500">Alamat</dt>
                <dd className="mt-1 text-sm text-gray-900 col-span-2">
                  {profile?.address || "-"}
                </dd>
              </div>
            </dl>
          </div>
          <div className="p-6 bg-gray-50 flex justify-end space-x-4">
            <button
              onClick={handleEdit}
              className="px-6 py-2 bg-cyan-600 text-white font-semibold rounded-lg shadow-md hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 transition"
            >
              Edit Profil
            </button>
            <button
              onClick={handleLogout}
              className="px-6 py-2 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition"
            >
              Keluar
            </button>
          </div>
        </div>
      </div>
      {editing && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full">
            <h3 className="text-xl font-bold mb-6 text-center">Edit Profil</h3>
            <form onSubmit={handleSave}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Nama
                  </label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-cyan-500 focus:border-cyan-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    No. HP
                  </label>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-cyan-500 focus:border-cyan-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Alamat
                  </label>
                  <input
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-cyan-500 focus:border-cyan-500"
                  />
                </div>
              </div>
              <div className="mt-8 flex justify-center space-x-4">
                <button
                  type="submit"
                  className="px-5 py-2 bg-cyan-600 text-white font-semibold rounded-lg shadow-md hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 transition"
                >
                  Simpan
                </button>
                <button
                  type="button"
                  onClick={() => setEditing(false)}
                  className="px-5 py-2 bg-gray-200 text-gray-800 font-semibold rounded-lg shadow-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 transition"
                >
                  Batal
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {showLogoutPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-8 text-center max-w-sm w-full">
            <p className="text-lg font-medium mb-6">
              Apakah Anda yakin ingin keluar?
            </p>
            <div className="flex justify-center space-x-4">
              <button
                onClick={confirmLogout}
                className="px-6 py-2 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition"
              >
                Ya, Keluar
              </button>
              <button
                onClick={cancelLogout}
                className="px-6 py-2 bg-gray-200 text-gray-800 font-semibold rounded-lg shadow-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 transition"
              >
                Batal
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;