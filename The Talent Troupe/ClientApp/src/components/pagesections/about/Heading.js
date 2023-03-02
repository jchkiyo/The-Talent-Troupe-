import Pic4 from "../../../assets/pic4.png";
import "./Heading.css";

export default function Heading() {
  return (
    <header className="about-header">
      <img
        className="about-header-image"
        src={Pic4}
        alt="Pic4"
      ></img>
      <div className="about-header-text">
        <h1>About Our Creators</h1>
      </div>
    </header>
  );
}
