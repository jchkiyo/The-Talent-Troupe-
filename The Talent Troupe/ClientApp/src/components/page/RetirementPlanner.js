import React from 'react';
import picture1 from "../../assets/homepic.png";
import "./RetirementPlanner.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function HomePage() {

   let location = useLocation()
   const userID = location.state?.data;
   console.log(userID);

  return (
    <React.Fragment>
       <div className = "body">
          <div className = "orange">
             Make 
             <br></br>
             Retirement
             <br></br>
             planning 
             <br></br>
             easier
             <br></br>
             <Link to = "/retirementplanner2">
               <button id = "button1">START NOW</button>
             </Link>
            </div>
            <img
               alt=""
               src={picture1}
               className= "home-pic"
            />
         </div>
    </React.Fragment>
  
);
  
}

export default HomePage;