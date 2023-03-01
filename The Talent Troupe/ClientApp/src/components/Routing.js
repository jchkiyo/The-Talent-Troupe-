import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/HomePage";
import Retirementplanner from "./pages/RetirementPlanner";
import About from "./pages/About";
import Order from "./pages/Order";
import Login from "./pages/Login";
import Confirmation from "./pages/Confirmation";

export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />

      <Route path="/retirementplanner" element={<Retirementplanner />} />

      <Route path="/about" element={<About />} />

      <Route path="/order" element={<Order />} />
      
      <Route path="/login" element={<Login />} />

      <Route path="/confirmation" element={<Confirmation />} />
    </Routes>
  );
}
