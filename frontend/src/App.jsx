import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Orders from "./pages/Orders";
import OrderDetail from "./pages/OrderDetail";
import LaundryExpress from "./pages/LaundryExpress";
import CleanLaundry from "./pages/CleanLaundry";
import Navbar from "./components/Navbar";
import Profile from "./pages/Profile"; // Tambahkan di bagian import
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/orders/:id" element={<OrderDetail />} />
        <Route path="/laundry-express" element={<LaundryExpress />} />
        <Route path="/clean-laundry" element={<CleanLaundry />} />
        <Route path="/profile" element={<Profile />} /> {/* Tambahkan ini */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* other routes */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;