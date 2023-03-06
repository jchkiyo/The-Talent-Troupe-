import Heading from "../pagesections/home/Heading";
import Ourservices from "../pagesections/home/Ourservices";
import Ourreviews from "../pagesections/home/Ourreviews";
import About from "../pagesections/home/About";
import "./Home.css";


 

export default function Homepage() {
  
  return (
    <>
      <Heading />

      <main>
        <Ourservices />
        <Ourreviews />
        <About />
       
        
      </main>
      
    </>
  );
}
