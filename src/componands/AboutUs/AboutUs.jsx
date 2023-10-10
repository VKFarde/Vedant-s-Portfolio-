import "./about.css";
import lal from "../../assets/profile.jpg";

function AboutUs() {
  return (
    <div className="about" id="aboutus">
      <div className="about-con">
        <h2>About</h2>
        <div className="about-con-c">
          <div className="about-data">
            <div className="about-data-info">
              <p>
                Hello! My name is vedant and I enjoy creating things that live
                on the internet. My interest in web development started back in
                2022 when I decided to complete my college project &nbsp;
                <a
                  href="https://sectorx-p5n6.onrender.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SectorX
                </a>
                &nbsp;&nbsp;&nbsp; - turns out Dynamic data integration taught
                me a lot about about React.js & CSS!
              </p>
              <p>
                Fast-forward to today, and I&rsquo;ve had the privilege of
                working at&nbsp;
                <a
                  href="https://konverge.ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  a start-up{" "}
                </a>
                &nbsp;and&nbsp;
                <a
                  href="https://www.heedsfoundation.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  a Ngo.
                </a>
                &nbsp; My main focus these days is building accessible,
                inclusive products for a variety of clients.
              </p>
              <p>
                I also recently completed my Protfolio website using Node &
                React. To build such web app you can refer my GitHub account.
              </p>
              <p>
                Here are a few technologies I&rsquo;ve been working with
                recently:
              </p>
            </div>
            <div className="about-skills">
              <ul>
                <li>JavaScript (ES6+)</li>
                <li>React.js</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>MySql</li>
                <li>MongoDB</li>
                <li>Next.js</li>
                <li>CSS</li>
              </ul>
            </div>
          </div>
          <div className="about-pic">
            <div className="about-pic-con">
              <img src={lal} alt="profile-pic" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
