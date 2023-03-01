import Heading from "../pagesections/home/Heading";
import Specials from "../pagesections/home/Specials";
import Testimonials from "../pagesections/home/Testimonials";
import About from "../pagesections/home/About";
import "./Home.css";

export default function Homepage() {
  return (
    <>
      <Heading />

      <main>
        <Specials />
        <Testimonials />
        <About />
      </main>
      
    </>
  );
}
