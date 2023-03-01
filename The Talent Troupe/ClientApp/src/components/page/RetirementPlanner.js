import React from 'react';
import picture1 from "../../assets/homepic.png";
import "./RetirementPlanner.css";

function HomePage() {
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
             <button id = "button1">START NOW</button>
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