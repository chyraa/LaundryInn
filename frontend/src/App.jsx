import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Orders from "./pages/Orders";
import OrderDetail from "./pages/OrderDetail";
import LaundryExpress from "./pages/LaundryExpress";
import CleanLaundry from "./pages/CleanLaundry";
import Navbar from "./components/Navbar";

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
        {/* other routes */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;