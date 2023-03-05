import { Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Retirementplanner from "./page/RetirementPlanner";
import About from "./page/About";
import Login from "./page/Login";
import Confirmation from "./page/Confirmation";
import Bigpurchaseplanner from "./page/Bigpurchaseplanner";
import Retirementplanner2 from "./page/retirementplanner2";

export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route exact path="/retirementplanner" element={<Retirementplanner />} />

      <Route path="/about" element={<About />} />
      
      <Route path="/login" element={<Login />} />

      <Route path="/bigpurchaseplanner" element={<Bigpurchaseplanner />} />

      <Route path="/confirmation" element={<Confirmation />} />

      <Route exact path="/retirementplanner2" element={<Retirementplanner2 />} />
    </Routes>
  );
}
