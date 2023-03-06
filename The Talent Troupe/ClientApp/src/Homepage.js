import './Homepage.css';
import React from 'react';
import picture1 from "./assets/picture1.png";

function HomePage() {
  return (
    <React.Fragment>
       <header className = "header">
         <span id = "talenttroupe">The Talent Troupe</span>
         <span id = "home">HOME</span>
         <span id = "retirement">RETIREMENT PLANNER</span>
         <span id = "big">BIG PURCHASE PLANNER</span>
         <span id = "contact">CONTACT US</span>
       </header>
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
            className= "test"
           />
       </div>
    </React.Fragment>
  
);
  
}

export default HomePage;
