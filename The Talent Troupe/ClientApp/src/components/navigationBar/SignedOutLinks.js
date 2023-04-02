
import React, { useState, useContext, useEffect } from "react";
import { auth, db } from "../sections/firebase";
import { signOut } from "firebase/auth";
import {  NavBtn, NavBtnLink, NavLink } from './NavbarElements';
import { AuthContext } from '../AuthProvider';
import { useNavigate } from "react-router-dom";
//import { query } from "firebase/database";
import { endSession } from "../session";
//import { async } from "@firebase/util"
import { collection , getDocs, where, query} from "firebase/firestore";


function SignedOutLinks() {
    const { currentUser } = useContext(AuthContext);
    const [info, setInfo]= useState("");
    const navigate = useNavigate();

   const getuser= async()=>{
      const docRef= query(collection(db, "users"),where("userid", "==", currentUser.uid));
      const doc= await getDocs(docRef);
      doc.forEach((docu)=>{
      
      setInfo(docu.data());
    });
        
      };
    useEffect(() => {
     
       getuser();
      
       
    }, );
    
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
        <NavLink to="/" style={{ textDecoration: 'none' }}>
            Home
        </NavLink>
        {currentUser && <NavLink to='/retirementplanner2' style={{ textDecoration: 'none' }} state={{data: currentUser.uid}}>Retirement Planner</NavLink>}
        {currentUser && <NavLink to='/Bigpurchaseplanner' style={{ textDecoration: 'none' }} state={{data: currentUser.uid}}>Big Purchase Planner</NavLink>}
        {currentUser && <NavLink to='/Myprofile' style={{ textDecoration: 'none' }} state={{data: currentUser.uid}}>My Profile</NavLink>}
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

      {
       
         currentUser && <p style={{color: "white"}}>Hi, {info.username}</p>
        
      }
       
       </>
     

    )
}

export default SignedOutLinks;