import { Routes, Route } from "react-router-dom";
<<<<<<< HEAD
import Homepage from "./pages/HomePage";
import Retirementplanner from "./pages/RetirementPlanner";
import About from "./pages/About";
import Order from "./pages/Order";
import Login from "./pages/Login";
import Confirmation from "./pages/Confirmation";
import Bigpurchaseplanner from "./pages/Bigpurchaseplanner";
=======
import Home from "./page/Home";
import Retirementplanner from "./page/RetirementPlanner";
import About from "./page/About";
import Login from "./page/Login";
import Confirmation from "./page/Confirmation";
>>>>>>> main

export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/retirementplanner" element={<Retirementplanner />} />

      <Route path="/about" element={<About />} />
      
      <Route path="/login" element={<Login />} />

      <Route path="/bigpurchaseplanner" element={<Bigpurchaseplanner />} />

      <Route path="/confirmation" element={<Confirmation />} />
    </Routes>
  );
}
