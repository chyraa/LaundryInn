import React from "react";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="profile-page">
      <h1 className="profile-title">Profil Pengguna</h1>
      <p className="profile-subtitle">Lihat dan kelola data akun LaundryInn Anda</p>
      <div className="profile-card">
        <div className="profile-card-header">
          <img
            src="https://ui-avatars.com/api/?name=User"
            alt="User Avatar"
            className="profile-avatar"
          />
          <div>
            <h2>Nama Pengguna</h2>
            <p>laundryinsupport@gmail.com</p>
          </div>
        </div>
        <div className="profile-divider"></div>
        <div className="profile-info-row">
          <span className="profile-label">Nama</span>
          <span className="profile-value">Nama Pengguna</span>
        </div>
        <div className="profile-divider"></div>
        <div className="profile-info-row">
          <span className="profile-label">Email</span>
          <span className="profile-value">laundryinsupport@gmail.com</span>
        </div>
        <div className="profile-divider"></div>
        <div className="profile-info-row">
          <span className="profile-label">No. HP</span>
          <span className="profile-value">+62 852 7655 8890</span>
        </div>
        <div className="profile-divider"></div>
        <div className="profile-info-row">
          <span className="profile-label">Alamat</span>
          <span className="profile-value">Jl. Contoh No. 123, Jakarta</span>
        </div>
        <div className="profile-actions">
          <button>Edit Profil</button>
          <button>Keluar</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;