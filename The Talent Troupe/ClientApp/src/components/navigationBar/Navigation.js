import { Nav, NavLink, Bars, NavMenu } from "./NavbarElements";

import SignedOutLinks from "./SignedOutLinks";
import React from "react";
import { AuthProvider } from "../AuthProvider";

const Navigation = () => {
  return (
    <AuthProvider>
      <Nav>
        <NavLink to="/">
          <img
            src={require("../../assets/teamlogo.png")}
            alt="The Talent Troupe logo"
            className="navigation-menu-image"
          ></img>
        </NavLink>
        <Bars />
        <NavMenu>
          <SignedOutLinks />
        </NavMenu>
      </Nav>
    </AuthProvider>
  );
};

export default Navigation;
