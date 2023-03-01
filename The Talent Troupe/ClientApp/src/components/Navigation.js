import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <menu className="navigation-menu">

      <Link to="/">
        <img
          src={require("../assets/teamlogo.png")}
          alt="The Talent Troupe logo"
          className="nav-image"
        ></img>
      </Link>

      <Link className="hover-effect" to="/">
        <h1>Home</h1>
      </Link>

      <Link className="hover-effect" to="/about">
        <h1>About Us</h1>
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
        <h1>Retirement Planner</h1>
      </Link>

      <Link className="hover-effect" to="/Retirementplanner">
        <h1>Big Purchase Planner</h1>
      </Link>

      <Link className="hover-effect" to="/login">
        <h1>Login</h1>
      </Link>

      <Link className="hover-effect" to="/login">
        <h1>Contact Us</h1>
      </Link>

    </menu>
  );
}
