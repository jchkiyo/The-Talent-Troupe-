import { Routes, Route } from "react-router-dom";
//import Homepage from "./pages/HomePage";
import Retirementplanner from "./page/RetirementPlanner";
import About from "./page/About";
import Login from "./page/Login";
import Signup from "./page/Signup";
import Home from "./page/Home";
import Viewhdbprices from "./page/Viewhdbprices";
import PrivateRoutes from "../PrivateRoutes";
import BigPurchasePlanner from "./page/BigPurchasePlanner";
import MyProfile from "./page/MyProfile";
import Retirementplanner2 from "./page/retirementplanner2";
import HDBPrices from "./page/HDBPrices";
export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route exact element={<PrivateRoutes />}>
        <Route path="/retirementplanner" element={<Retirementplanner />} />
      </Route>
      <Route exact element={<PrivateRoutes />}>
        <Route path="/retirementplanner2" element={<Retirementplanner2 />} />
      </Route>

      <Route path="/about" element={<About />} />

      <Route path="/login" element={<Login />} />

      <Route path="/signup" element={<Signup />} />
      <Route exact element={<PrivateRoutes />}>
        <Route path="/viewhdbprices" element={<HDBPrices />} />
      </Route>
      <Route exact element={<PrivateRoutes />}>
        <Route path="/Myprofile" element={<MyProfile />} />
      </Route>
      <Route exact element={<PrivateRoutes />}>
        <Route path="/bigpurchaseplanner" element={<BigPurchasePlanner />} />
      </Route>
    </Routes>
  );
}
