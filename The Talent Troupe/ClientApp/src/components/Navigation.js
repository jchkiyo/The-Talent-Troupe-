import { Link } from "react-router-dom";

export default function Navigation(props) {
  return (
    <menu className={`navbar-menu ${props.device}`}>
      <Link className="hover-effect" to="/">
        <h1>HomePage</h1>
      </Link>
      <Link className="hover-effect" to="/home">
        <h1>Home</h1>
      </Link>
      <Link className="hover-effect" to="/about">
        <h1>About</h1>
      </Link>
      <a
        className="hover-effect"
        href={require("../assets/menu.webp")}
        target="_blank"
        rel="noreferrer"
      >
        <h1>Menu</h1>
      </a>
      <Link className="hover-effect" to="/reservations">
        <h1>Retirement Planner</h1>
      </Link>
      <Link className="hover-effect" to="/order">
        <h1>Big Purchase Planner</h1>
      </Link>
      <Link className="hover-effect" to="/login">
        <h1>Contact Us</h1>
      </Link>
    </menu>
  );
}
