import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <menu className="navigation-menu">

      <Link to="/">
        <img
          src={require("../assets/teamlogo.png")}
          alt="The Talent Troupe logo"
          className="navigation-menu-image"
        ></img>
      </Link>

      <Link className="hover-effect" to="/">
        <h2>Home</h2>
      </Link>

      <Link className="hover-effect" to="/about">
        <h2>About Us</h2>
      </Link>

      {/* <a
        className="hover-effect"
        href={require("../assets/menu.webp")}
        target="_blank"
        rel="noreferrer"
      >
        <h1>Menu</h1>
      </a> */}

      <Link className="hover-effect" to="/Retirementplanner">
        <h2>Retirement Planner</h2>
      </Link>

      <Link className="hover-effect" to="/Bigpurchaseplanner">
        <h2>Big Purchase Planner</h2>
      </Link>

      <Link className="hover-effect" to="/login">
        <h2>Login</h2>
      </Link>


    </menu>
  );
}
