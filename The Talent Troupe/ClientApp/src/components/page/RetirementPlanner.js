import picture1 from "../../assets/homepic.png";
import "./RetirementPlanner.css";
import { Link } from "react-router-dom";
import { AuthProvider, AuthContext } from "../AuthProvider";
import React, { useContext } from "react";

function HomePage() {
  return (
    <React.Fragment>
      <AuthProvider>
        <User />
      </AuthProvider>
    </React.Fragment>
  );
}

function User() {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);

  return (
    <div className="body">
      <div className="orange">
        Make
        <br />
        Retirement
        <br />
        planning
        <br />
        easier
        <br />
        {currentUser && (
          <Link to="/retirementplanner2" state={{ data: currentUser.uid }}>
            <button id="button1">START NOW</button>
          </Link>
        )}
      </div>
      <img alt="" src={picture1} className="home-pic" />
    </div>
  );
}

export default HomePage;
