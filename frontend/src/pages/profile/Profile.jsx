import React, { useEffect, useState } from "react";
import "./Profile.css";
import { auth, db } from "../../firebase";
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

  if (!user) return <div className="profile-page">Loading...</div>;

  return (
    <div className="profile-page">
      <h1 className="profile-title">Profil Pengguna</h1>
      <p className="profile-subtitle">
        Lihat dan kelola data akun LaundryInn Anda
      </p>
      <div className="profile-card">
        <div className="profile-card-header">
          <img
            src={`https://ui-avatars.com/api/?name=${profile?.name || user.email}`}
            alt="User Avatar"
            className="profile-avatar"
          />
          <div>
            <h2>{profile?.name || user.displayName || "-"}</h2>
            <p>{profile?.email || user.email}</p>
          </div>
        </div>
        <div className="profile-divider"></div>
        <div className="profile-info-row">
          <span className="profile-label">Nama</span>
          <span className="profile-value">{profile?.name || "-"}</span>
        </div>
        <div className="profile-divider"></div>
        <div className="profile-info-row">
          <span className="profile-label">Email</span>
          <span className="profile-value">
            {profile?.email || user.email || "-"}
          </span>
        </div>
        <div className="profile-divider"></div>
        <div className="profile-info-row">
          <span className="profile-label">No. HP</span>
          <span className="profile-value">{profile?.phone || "-"}</span>
        </div>
        <div className="profile-divider"></div>
        <div className="profile-info-row">
          <span className="profile-label">Alamat</span>
          <span className="profile-value">{profile?.address || "-"}</span>
        </div>
        <div className="profile-actions">
          <button onClick={handleEdit}>Edit Profil</button>
          <button onClick={handleLogout}>Keluar</button>
        </div>
      </div>
      {editing && (
        <div className="edit-popup-overlay">
          <div className="edit-popup">
            <h3>Edit Profil</h3>
            <form onSubmit={handleSave}>
              <div className="edit-form-row">
                <label>Nama</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="edit-form-row">
                <label>No. HP</label>
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="edit-form-row">
                <label>Alamat</label>
                <input
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                />
              </div>
              <div className="edit-popup-actions">
                <button type="submit">Simpan</button>
                <button type="button" onClick={() => setEditing(false)}>
                  Batal
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {showLogoutPopup && (
        <div className="logout-popup-overlay">
          <div className="logout-popup">
            <p>Apakah Anda yakin ingin keluar?</p>
            <button onClick={confirmLogout}>Ya, Keluar</button>
            <button onClick={cancelLogout}>Batal</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;