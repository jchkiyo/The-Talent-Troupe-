import HeroImage from "../../../assets/pic4.png";
import "./Login.css";

export default function Login() {
  return (
    <header className="login-header">
      <img
        className="login-header-image"
        src={HeroImage}
        alt="Pic4"
      ></img>

      <div className="login-header-text-container">
        <div className="login-header-text">
          <h1>Login</h1>
        </div>
        {/* <div className="login-header-text">
          <h1>Sign up</h1>
        </div> */}
      </div>
    </header>
  );
}
