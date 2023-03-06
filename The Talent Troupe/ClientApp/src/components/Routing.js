import { Routes, Route} from "react-router-dom";
//import Homepage from "./pages/HomePage";
import Retirementplanner from "./page/RetirementPlanner";
import About from "./page/About";
//import Order from "./pages/Order";
import Login from "./page/Login";
import Signup from "./page/Signup";
import Home from "./page/Home";
import Bigpurchaseplanner from "./page/Bigpurchaseplanner";
import PrivateRoutes from "../PrivateRoutes";
export default function Routing() {
  return (
   
    <Routes>
      <Route path="/" element={<Home />} />
      <Route exact element={<PrivateRoutes  />}>
      <Route path="/retirementplanner" element={<Retirementplanner />} />
      </Route>

      <Route path="/about" element={<About />} />
      
      <Route path="/login" element={<Login />} />

      <Route path="/signup" element={<Signup />} />
      <Route exact element={<PrivateRoutes  />}>
      <Route path="/bigpurchaseplanner" element={<Bigpurchaseplanner />} />
      </Route>

    </Routes>
   
    
  );
}
