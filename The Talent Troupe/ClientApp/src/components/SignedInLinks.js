import React, { useEffect } from 'react'

import { NavLink, NavBtn } from './NavbarElements'
import {auth} from './sections/firebase'
import { isLoggedIn} from './session'




const logout = () => {
    
    return (e) => {
      
    e.preventDefault();
      auth.signOut()
        
        sessionStorage.removeItem();
        
        
      
    }
}


export const SignedInLinks = () => {
    
    useEffect(()=>{
        if(!isLoggedIn()){
           
        }
      
    
    });
    return (
        <>
        <NavLink to="/" >
            Home
        </NavLink>
        <NavLink to="/about" >
            About Us
        </NavLink>

        <NavLink to="/Retirementplanner" >
            Retirement Planner
        </NavLink>
        <NavLink to="/Bigpurchaseplanner" >
             Big Purchase Planner
        </NavLink>
        <NavBtn>
           <a onClick={logout} href="/">Log Out</a>
        </NavBtn>
       
       </>
     

    )
}

export default SignedInLinks