import { Routes, Route, useParams } from "react-router-dom";
import Retirementplanner from "../page/RetirementPlanner";
import Login from "../page/Login";
import Signup from "../page/Signup";
import Home from "../page/Home";
import PrivateRoutes from "./PrivateRoutes";
import Bigpurchaseplanner from "../page/BigPurchasePlanner";
import MyProfile from "../page/MyProfile";
import Retirementplanner2 from "../page/retirementplanner2";
import HDBPrices from "../page/HDBPrices";
export default function Routing() {
  const {id} = useParams();
  console.log(id);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route exact element={<PrivateRoutes />}>
        <Route path="/retirementplanner" element={<Retirementplanner />} />
      </Route>
      <Route exact element={<PrivateRoutes />}>
        <Route path="/retirementplanner2" element={<Retirementplanner2 />} />
      </Route>

      <Route path="/login" element={<Login />} />

      <Route path="/signup" element={<Signup />} />
      <Route exact element={<PrivateRoutes />}>
        <Route path="/viewhdbprices" element={<HDBPrices />} />
      </Route>
      <Route exact element={<PrivateRoutes />}>
        <Route path="/Myprofile/:uid" component={id} element={<MyProfile />} />
      </Route>
      <Route exact element={<PrivateRoutes />}>
        <Route path="/bigpurchaseplanner" element={<Bigpurchaseplanner />} />
      </Route>
    </Routes>
  );
}
