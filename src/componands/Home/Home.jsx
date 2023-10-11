import "./home.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function Home() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div
      className="home"
      id="#"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
    >
      <div className="home-con">
        <div className="home-con-head " data-aos="zoom-in">
          <h3>Hi, my name is</h3>
        </div>
        <div className="home-con-name  " data-aos="zoom-in">
          <h1>Vedant Farde</h1>
        </div>
        <div className="home-con-head-h  " data-aos="zoom-in">
          <h1>I build things for the web.</h1>
        </div>
        <div className="home-con-head-p  " data-aos="zoom-in">
          <p>
            I&rsquo;m a software engineer specializing in building (and
            occasionally
            <br />
            designing). Currently, I&rsquo;m focused on building accessible,
            <br />
            human-centered products and UpSkill my Skills through
            <br /> various projects.
          </p>
        </div>
        <div className="home-con-button  " data-aos="zoom-in">
          <a href="https://github.com/VKFarde">
            <button>Check out my GitHub!</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
