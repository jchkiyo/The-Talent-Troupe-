
import React, { useState, useContext, useEffect } from "react";
import { auth, dbs } from "./sections/firebase";
import { signOut } from "firebase/auth";
import {  NavBtn, NavBtnLink, NavLink } from './NavbarElements'
import { AuthContext } from './AuthProvider'
import { useNavigate } from "react-router-dom";
import { ref, onValue } from "firebase/database";
import { endSession } from "./session";


function SignedOutLinks() {
    const { currentUser } = useContext(AuthContext);
    const [username, setUsername] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
      if (currentUser) {
        const starCountRef = ref(dbs, "users/" + currentUser.uid);
        onValue(starCountRef, (snapshot) => {
          if (snapshot.exists()) {
            //var data = snapshot.val();
            const username= (snapshot.val() && snapshot.val().username)
            
            setUsername(username);

           
          }
        });
      }
    }, [currentUser]);
    const clickLogin = () => {
        if (currentUser) {
          signOut(auth);
          endSession();
          navigate("/");
         
          console.log("access token", sessionStorage.getItem("accessToken"))
        
        } else {
           
           navigate("/login");
          
           
      
            
          
        }
      };
      
    
    return (
        <>
        <NavLink to="/" >
            Home
        </NavLink>
        <NavLink to="/about" >
            About Us
        </NavLink>
        {currentUser && <NavLink to='/Retirementplanner'>Retirement Planner</NavLink>}
        {currentUser && <NavLink to='/Bigpurchaseplanner'>Big Purchase Planner</NavLink>}
        {currentUser && <NavLink to='/Myprofile'>My Profile</NavLink>}
        <div className="buttons">
       <a onClick={clickLogin} href="/" >
        <NavBtn>
        <NavBtnLink>
          {currentUser ? "Log Out" : "Login"}
        </NavBtnLink>
        </NavBtn>
        </a>
        </div>
        {!currentUser && <NavLink to='/Signup'>Sign Up</NavLink>}

      
        {currentUser && <p>Welcome, {username}</p>}
       </>
     

    )
}

export default SignedOutLinks;