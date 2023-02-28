import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/HomePage";
import Home from "./pages/Home";
import About from "./pages/About";
import Order from "./pages/Order";
import Login from "./pages/Login";
import Confirmation from "./pages/Confirmation";

export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />

      <Route path="/home" element={<Home />} />

      <Route path="/about" element={<About />} />

      <Route path="/order" element={<Order />} />
      
      <Route path="/login" element={<Login />} />

      <Route path="/confirmation" element={<Confirmation />} />
    </Routes>
  );
}
