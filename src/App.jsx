import Navbar from "./componands/Navbar/Navbar";
import "./App.css";
import Home from "./componands/Home/Home";
import AboutUs from "./componands/AboutUs/AboutUs";
import Experience from "./componands/Experience/Experience";
import Work from "./componands/Work/Work";
import Projects from "./componands/Projects/Project";
import Contact from "./componands/contact/Contact";
import Foto from "./componands/Footer/Foto";
import Left from "./componands/left/Left";
import Right from "./componands/Right/Right";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <AboutUs />
      <Experience />
      <Work />
      <Projects />
      <Contact />
      <Foto />
      <Left />
      <Right />
    </>
  );
}

export default App;
