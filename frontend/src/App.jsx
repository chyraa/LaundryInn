import React from "react";
import { BrowserRouter, Routes, Route, Outlet, Navigate } from "react-router-dom";

// 🔹 Komponen umum
import Navbar from "./components/Navbar";
import NavbarMitra from "./components/NavbarMitra";
import ProtectedRoute from "./components/ProtectedRoute";

// 🔹 Halaman umum
import Landing from "./pages/landing/landing";
import Login from "./pages/login/Login";
import FAQ from "./pages/faq/FAQ";
import Register from "./pages/register/Register";

// 🔹 Halaman User
import Home from "./pages/user/home/Home";
import Orders from "./pages/user/orders/Orders";
import OrderDetail from "./pages/user/orders/OrderDetail";
import ProfileUser from "./pages/user/profile/Profile";
import CustomOrders from "./pages/user/customOrders/customOrders";
import ConfirmOrders from "./pages/user/customOrders/confirmOrders";
import StatusOrders from "./pages/user/customOrders/statusOrders";

// 🔹 Halaman Mitra
import HomeMitra from "./pages/Mitra/home/Home";
import OrdersMitra from "./pages/Mitra/orders/Orders";
import ProfilMitra from "./pages/Mitra/profile/Profile";
import IClean from "./mitra/IClean";

// ==================== Layouts ====================

// 🔹 Layout untuk User
function UserLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

// 🔹 Layout untuk Mitra
function MitraLayout() {
  return (
    <>
      <NavbarMitra />
      <Outlet />
    </>
  );
}

// ==================== App ====================

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 🔸 Default route (Landing Page) */}
        <Route path="/" element={<Landing />} />

        {/* 🔸 Routing untuk USER */}
        <Route
          path="/user"
          element={
            <ProtectedRoute allowedRole="customer">
              <UserLayout />
            </ProtectedRoute>
          }
        >
          <Route path="home" element={<Home />} />
          <Route path="orders" element={<Orders />} />
          <Route path="orders/:id" element={<OrderDetail />} />
          <Route path="profile" element={<ProfileUser />} />
          <Route path="customOrders" element={<CustomOrders />} />
          <Route path="confirmOrders" element={<ConfirmOrders />} />
          <Route path="statusOrders" element={<StatusOrders />} />
        </Route>

        {/* 🔸 Routing untuk MITRA */}
        <Route
          path="/mitra"
          element={
            <ProtectedRoute allowedRole="mitra">
              <MitraLayout />
            </ProtectedRoute>
          }
        >
          <Route path="home" element={<HomeMitra />} />
          <Route path="orders" element={<OrdersMitra />} />
          <Route path="profile" element={<ProfilMitra />} />
          <Route path="iclean" element={<IClean />} />
        </Route>

        {/* 🔸 Auth Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/faq" element={<FAQ />} />

        {/* 🔸 Fallback untuk route yang tidak ditemukan */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
