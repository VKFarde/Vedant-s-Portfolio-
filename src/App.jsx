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
import React, { useState, useEffect } from "react";
import LoadingAnimation from "./componands/Load/LoadingAnimation";
function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false); // Set isLoading to false when your data is ready
    }, 2000); // Simulating a 2-second loading time
  }, []);
  return (
    <>
      {isLoading ? (
        <LoadingAnimation />
      ) : (
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
      )}
    </>
  );
}

export default App;
