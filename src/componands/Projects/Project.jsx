import React from "react";
import { useState, useEffect } from "react";
import data from "../../data/data";
import { FiFolder, FiGithub } from "react-icons/fi";
import "./project.css";

function Project() {
  const [activeMenu, setActiveMenu] = useState(3);
  const [active, setActive] = useState(false);
  const [screenSize, setScreenSize] = useState(undefined);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();
    setActiveMenu(2);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 760) {
      setActiveMenu(2);
    } else {
      setActiveMenu(3);
    }
  }, [screenSize]);
  return (
    <div className="project">
      <div className="pro-con">
        <div>
          <h2>Other Noteworthy Projects</h2>

          <a
            href="https://github.com/VKFarde"
            target="_blank"
            rel="noopener noreferrer"
          >
            View my Github
          </a>
        </div>
        <div className="pro-con-c">
          {active
            ? data.map((e) => (
                <div className="card" key={e.link}>
                  <div className="card-head">
                    <div className="card-floder">
                      <FiFolder />
                    </div>
                    <div className="card-git">
                      <a href={e.link}>
                        <FiGithub />
                      </a>
                    </div>
                  </div>

                  <h3 className="card-title">
                    <a href={e.link}>{e.heading}</a>
                  </h3>

                  <div className="card-des">
                    <p>{e.des}</p>
                  </div>
                  <ul className="card-tech">
                    {e.tech.map((tech, index) => (
                      <li key={index}>{tech.language}</li>
                    ))}
                  </ul>
                </div>
              ))
            : data
                .map((e) => (
                  <div className="card" key={e.link}>
                    <div className="card-head">
                      <div className="card-floder">
                        <FiFolder />
                      </div>
                      <div className="card-git">
                        <a href={e.link}>
                          <FiGithub />
                        </a>
                      </div>
                    </div>

                    <h3 className="card-title">
                      <a href={e.link}>{e.heading}</a>
                    </h3>

                    <div className="card-des">
                      <p>{e.des}</p>
                    </div>
                    <ul className="card-tech">
                      {e.tech.map((tech, index) => (
                        <li key={index}>{tech.language}</li>
                      ))}
                    </ul>
                  </div>
                ))
                .splice(0, activeMenu)}
        </div>
      </div>
      <div className="pro-but">
        <button
          onClick={() => {
            setActive(!active);
          }}
        >
          {active ? "show less" : "Take a look of other Project"}
        </button>
      </div>
    </div>
  );
}

export default Project;
