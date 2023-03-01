import './Bigpurchase.css';
import React from 'react';
import hdbpic from "../../assets/hdb.jpg";
import carpic from "../../assets/car.jpg";
import { Link } from "react-router-dom";


export default function Bigpurchaseplanner() {
  return (
    <>
      <div className = "parent">
          <Link to = "/hdbplanner">
            <img  className = "hdb"src={hdbpic} alt = "" height = "700" width = "750"/>
          </Link >
          <Link to = "/carplanner">
            <img  className = "car"src={carpic} alt = "" height = "700" width = "750"/>
          </Link>
      </div>
      <h1 id = "texthdb">HDB purchase planner</h1>
      <h1 id = "textcar">Car depreciation calculator</h1>
    </>
  );
}
