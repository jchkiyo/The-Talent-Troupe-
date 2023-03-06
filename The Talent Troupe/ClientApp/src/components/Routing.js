import { Routes, Route } from "react-router-dom";
import Retirementplanner from "./page/RetirementPlanner";
import About from "./page/About";
import Login from "./page/Login";
import Signup from "./page/Signup";
import Home from "./page/Home";
import Viewhdbprices from "./page/Viewhdbprices";
import Bigpurchaseplanner from "./page/Bigpurchaseplanner";
import Retirementplanner2 from "./page/retirementplanner2";

export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route exact path="/retirementplanner" element={<Retirementplanner />} />

      <Route path="/bigpurchaseplanner" element={<Bigpurchaseplanner />} />

      <Route path="/viewhdbprices" element={<Viewhdbprices />} />

      <Route path="/about" element={<About />} />
      
      <Route path="/login" element={<Login />} />

      <Route path="/signup" element={<Signup />} />

      <Route exact path="/retirementplanner2" element={<Retirementplanner2 />} />
      
    </Routes>
  );
}
