import "./navbar.css";
import loo from "../../assets/1.svg";
import { useState } from "react";
import { CgMenuGridO } from "react-icons/cg";
import { useEffect, useRef } from "react";
import { GiCrossMark } from "react-icons/gi";
import ved from "../../assets/VEDANT.pdf";

function Navbar() {
  const tt = useRef(null);
  const [click, setclick] = useState(false);
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(undefined);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();
    setActiveMenu(false);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 760) {
      setActiveMenu(true);
    } else {
      setActiveMenu(false);
    }
  }, [screenSize]);

  const handledownload = () => {
    const a = document.createElement("a");
    const url = ved;
    a.href = url;
    a.download = "vedant_resume.pdf";
    document.body.appendChild(a);
    a.click();
    a.remove();
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (tt.current && !tt.current.contains(event.target)) {
        setclick(false);
      }
    };
    if (click) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [click]);
  return (
    <>
      <header>
        <nav>
          <div className="nav-con">
            <a href="#">
              <img src={loo} alt="iconic-logo" />
            </a>
          </div>
          {!activeMenu ? (
            <div className="nav-menu">
              <ul>
                <li>
                  <a href="#aboutus">
                    <span>01.</span> About
                  </a>
                </li>
                <li>
                  <a href="#experience">
                    <span>02.</span> Experience
                  </a>
                </li>
                <li>
                  <a href="#project">
                    <span>03.</span> Project
                  </a>
                </li>
                <li>
                  <a href="#contact">
                    <span>04.</span> Contact
                  </a>
                </li>
                <li>
                  <button onClick={handledownload}>Resume</button>
                </li>
              </ul>
            </div>
          ) : (
            <div className="nav-menu-min">
              <div className="nav-menu-logo" onClick={() => setclick(!click)}>
                {click ? <GiCrossMark /> : <CgMenuGridO />}
              </div>
            </div>
          )}
        </nav>
      </header>
      {activeMenu && click && (
        <div className="h-menu" ref={tt}>
          <ul>
            <li>
              <a href="#aboutus">
                <span>01.</span> <h4>About</h4>
              </a>
            </li>
            <li>
              <a href="#experience">
                <span>02.</span> <h4>Experience</h4>
              </a>
            </li>
            <li>
              <a href="#project">
                <span>03.</span>
                <h4>Project</h4>
              </a>
            </li>
            <li>
              <a href="#contact">
                <span>04.</span>
                <h4>Contact</h4>
              </a>
            </li>
            <li>
              <button onClick={handledownload}>Resume</button>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Navbar;
