import { useRef } from "react";
import "./work.css";
import loo from "../../assets/sec.mp4";
import moo from "../../assets/cari.mp4";
import too from "../../assets/sex.png";
import doo from "../../assets/car.png";
import pop from "../../assets/pop.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import { FiGithub, FiSlack } from "react-icons/fi";

function Work() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const videoRef = useRef(null);
  const videodeRef = useRef(null);
  const handleMouseEnter = () => {
    videoRef.current.play();
  };

  const handleMouseLeave = () => {
    videoRef.current.pause();
  };
  const MouseEnter = () => {
    videodeRef.current.play();
  };

  const MouseLeave = () => {
    videodeRef.current.pause();
  };

  return (
    <div className="work" id="project">
      <div className="work-con">
        <h2 data-aos="fade-up">Some Things I’ve Built</h2>
        <ul className="work-con-lef">
          <li className="work-con-lef-f" data-aos="fade-up">
            <div
              className="work-video"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div>
                <a
                  href="https://sectorx-p5n6.onrender.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <video ref={videoRef} poster={too} width="600" loop>
                    <source src={loo} type="video/webm" />
                    <source src={loo} type="video/mp4" />
                  </video>
                </a>
              </div>
            </div>

            <div className="work-con-con" data-aos="fade-up">
              <div>
                <p>Featured Project</p>
                <h3>SectorX</h3>
                <div className="work-des">
                  <p>
                    A responsive web app using React.js and CSS. It integrates
                    real-time data from Coinbase API, displaying live
                    cryptocurrency graphs. Additionally, a dynamic news feed,
                    powered by a custom API, provides users with up-to-date
                    cryptocurrency news.
                  </p>
                </div>
                <ul className="work-tools">
                  <li>VS Code</li>
                  <li>React</li>
                  <li>Redux</li>
                  <li>Ant Design</li>
                  <li>Node.js</li>
                </ul>
                <div className="work-link">
                  <a
                    href="https://github.com/VKFarde/SectorX"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiGithub />
                  </a>
                  <a
                    href="https://sectorx-p5n6.onrender.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiSlack />
                  </a>
                </div>
              </div>
            </div>
          </li>
          <li className="work-con-ri" data-aos="zoom-in">
            <div className="work-r-video">
              <div>
                <a href="/">
                  <img src={pop} alt="portfolio" />
                </a>
              </div>
            </div>

            <div className="work-r-con-con">
              <div>
                <p>Featured Project</p>
                <h3>SectorX</h3>
                <div className="work-r-des">
                  <p>
                    Aa comprehensive web application entirely from scratch,
                    utilizing React for front-end development and creating
                    custom CSS for a unique, polished design. This project
                    showcases my ability to build a fully functional and
                    visually appealing website with a focus on a clean,
                    responsive, and user-friendly interface.
                  </p>
                </div>
                <ul className="work-r-tools">
                  <li>VS Code</li>
                  <li>React</li>
                  <li>css</li>
                  <li>React-routing</li>
                  <li>Git</li>
                  <li>Github</li>
                </ul>
                <div className="work-r-link">
                  <a
                    href="https://github.com/VKFarde"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiGithub />
                  </a>
                  <a href="/" target="_blank" rel="noopener noreferrer">
                    <FiSlack />
                  </a>
                </div>
              </div>
            </div>
          </li>
          <li className="work-con-lef-f" data-aos="zoom-in">
            <div
              className="work-video"
              onMouseEnter={MouseEnter}
              onMouseLeave={MouseLeave}
            >
              <div>
                <a
                  href="https://vkfarde.github.io/careerist/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <video ref={videodeRef} poster={doo} width="600" loop>
                    <source src={moo} type="video/webm" />
                    <source src={moo} type="video/mp4" />
                  </video>
                </a>
              </div>
            </div>

            <div className="work-con-con">
              <div>
                <p>Featured Project</p>
                <h3>Clone of Careerist</h3>
                <div className="work-des">
                  <p>
                    developed a full-stack application leveraging React.js and
                    Express.js. I seamlessly integrated MongoDB for efficient
                    data management. The project also features robust user
                    authentication capabilities, ensuring secure access for
                    users. Check out my portfolio for a detailed showcase of
                    this project.
                  </p>
                </div>
                <ul className="work-tools">
                  <li>React</li>
                  <li>Express.js</li>
                  <li>Put CSS</li>
                  <li>Node.js</li>
                  <li>Email.js</li>
                  <li>MongoDB</li>
                </ul>
                <div className="work-link">
                  <a
                    href="https://github.com/VKFarde/careerist"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiGithub />
                  </a>
                  <a
                    href="https://vkfarde.github.io/careerist/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiSlack />
                  </a>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Work;
