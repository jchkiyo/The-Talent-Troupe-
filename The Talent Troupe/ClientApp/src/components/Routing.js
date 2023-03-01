import { Routes, Route } from "react-router-dom";
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

      <Route path="/bigpurchaseplanner" element={<Bigpurchaseplanner />} />
      
    </Routes>
  );
}
