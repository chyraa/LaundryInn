import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Orders from "./pages/orders/Orders";
import OrderDetail from "./pages/orders/OrderDetail";
import Navbar from "./components/Navbar";
import Profile from "./pages/profile/Profile"; 
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import IClean from "./mitra/IClean";
import ProtectedRoute from "./components/ProtectedRoute";
import LoginMitra from "./pages/Mitra/loginMitra/LoginMitra";
import RegisterMitra from "./pages/Mitra/registerMitra/RegisterMitra";
import HomeMitra from "./pages/Mitra/homeMitra/HomeMitra";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/orders/:id" element={<OrderDetail />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/mitra" element={<HomeMitra />} />
        <Route path="/login-mitra" element={<LoginMitra />} />
        <Route path="/register-mitra" element={<RegisterMitra />} />
        {/* other routes */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;