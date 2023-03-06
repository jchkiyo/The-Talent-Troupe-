import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer>
      <menu>
        <li className="img-footer">
          <img
            src={require("../assets/teamlogo.png")}
            alt="The Talent Troupe logo"
          ></img>
        </li>
        <li className="contact">
          <h1 className="footer-header">Navigation</h1>
          <ul className="footer-links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            {/* <a
              href={require("../assets/menu.webp")}
              target="_blank"
              rel="noreferrer"
            >
              Menu
            </a> */}
            <Link to="/Retirementplanner">Retirement Planner</Link>
            <Link to="/Retirementplanner">Big Purchase Planner</Link>
            <Link to="/login">Contact Us</Link>
          </ul>
        </li>

        <li>
          <h1 className="footer-header">Contact</h1>
          <ul className="footer-links">
            <li>50 Nanyang Avenue,</li>
            <li>639798</li>
            <br></br>
            <li>(+65)-67612345</li>
            <br></br>
            <a
              href="mailto: info@littlelemon.com"
              target="_blank"
              rel="noreferrer"
            >
              contactus@TheTalentTroupe.com
            </a>
          </ul>
        </li>

        
            
        <li>
          <h1 className="footer-header">Connect</h1>

          <ul className="footer-links">
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noreferrer"
            >
              Google Us !
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
            >
              Instagram Us !
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
            >
              Join us!
            </a>
          </ul>
        </li>


      </menu>
    </footer>
  );
}
