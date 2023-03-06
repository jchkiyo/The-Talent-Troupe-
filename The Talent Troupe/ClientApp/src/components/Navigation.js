
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './NavbarElements'


export default function Navigation() {
  return (
    <>
    <Nav>
            <NavLink to="/">
            <img
          src={require("../assets/teamlogo.png")}
          alt="The Talent Troupe logo"
          className="navigation-menu-image"
        ></img>

            </NavLink>
            <Bars/>
            <NavMenu>
                <NavLink to="/" activestyle>
                    Home
                </NavLink>
                <NavLink to="/about" activestyle>
                    About Us
                </NavLink>
                <NavLink to="/Viewhdbprices" activestyle>
                    View HDB Prices
                </NavLink>
                <NavLink to="/Retirementplanner" activestyle>
                    Retirement Planner
                </NavLink>
                <NavLink to="/Bigpurchaseplanner" activestyle>
                    Big Purchase Planner
                </NavLink>
                <NavLink to="/Signup" activestyle>
                    Sign Up
                </NavLink>
                <NavBtn>
                <NavBtnLink to='/login'>Sign In</NavBtnLink>
            </NavBtn>
           
            </NavMenu>
           
        </Nav>
   </>
  );
}