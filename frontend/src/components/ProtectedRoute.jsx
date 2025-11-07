import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase"; // pastikan path firebase-mu benar

const ProtectedRoute = ({ children }) => {
  const [user, setUser] = useState(undefined); // undefined artinya “belum tahu”
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  // 🔹 Tampilkan loading saat Firebase masih memeriksa status login
  if (user === undefined) {
    return (
      <div style={{ textAlign: "center", marginTop: "100px" }}>
        <h3>Loading...</h3>
      </div>
    );
  }

  // 🔹 Jika belum login → arahkan ke /login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // 🔹 Jika sudah login → tampilkan halaman yang diminta
  return children;
};

export default ProtectedRoute;
