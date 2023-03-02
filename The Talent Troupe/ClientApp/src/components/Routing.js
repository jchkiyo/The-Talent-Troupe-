import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/HomePage";
import Retirementplanner from "./pages/RetirementPlanner";
import About from "./pages/About";
import Order from "./pages/Order";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Confirmation from "./pages/Confirmation";
import Home from "./page/Home";
import Retirementplanner from "./page/RetirementPlanner";
import About from "./page/About";
import Login from "./page/Login";
import Bigpurchaseplanner from "./page/Bigpurchaseplanner";

export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/retirementplanner" element={<Retirementplanner />} />

      <Route path="/about" element={<About />} />
      
      <Route path="/login" element={<Login />} />

      <Route path="/signup" element={<Signup />} />

      <Route path="/confirmation" element={<Confirmation />} />
      <Route path="/bigpurchaseplanner" element={<Bigpurchaseplanner />} />
      
    </Routes>
  );
}
