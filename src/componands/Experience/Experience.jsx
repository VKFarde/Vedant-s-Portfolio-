import { useState, useEffect } from "react";
import "./experience.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Experience() {
  const [value, setvalue] = useState(100);
  const [active, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(undefined);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

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
  return (
    <div className="experience" id="experience">
      <div className="experience-con">
        <h2 data-aos="zoom-up-in">Where I’ve Worked</h2>
        <div className="experience-con-con">
          <div>
            <div className="experience-con-button" data-aos="fade-right">
              <button
                style={{
                  borderLeft:
                    !active && value === 100
                      ? "1.2px solid var(--green)"
                      : "none",
                  borderBottom:
                    active && value === 100
                      ? "1.2px solid var(--green)"
                      : "none",
                }}
                onClick={() => setvalue(100)}
              >
                <span>Konverge.ai</span>
              </button>
              <button
                style={{
                  borderLeft:
                    !active && value === 200
                      ? "1.2px solid var(--green)"
                      : "none",
                  borderBottom:
                    active && value === 200
                      ? "1.2px solid var(--green)"
                      : "none",
                }}
                onClick={() => setvalue(200)}
              >
                <span>Heeds Foundation NGO</span>
              </button>
            </div>
          </div>
          <div className="experience-con-data" data-aos="zoom-in">
            {value === 100 && (
              <>
                <h3>
                  Softwere Developer Intern &nbsp;
                  <a
                    href="https://konverge.ai/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @Konverge.ai
                  </a>
                </h3>
                <p>January - July 2023</p>
                <div className="experience-con-data-list">
                  <ul>
                    <li>
                      Collaborate with designers, project managers, and other
                      engineers to transform creative concepts into production
                      realities for clients and stakeholders
                    </li>
                    <li>
                      Work alongside creative directors to lead the research,
                      development, and architecture of technical solutions to
                      fulfill business requirements
                    </li>
                    <li>
                      Collaborated on a responsive web app using React.js for
                      customer spending analysis, targeting shopping mall
                      executives. Developed front-end components with CSS for an
                      intuitive user interface.
                    </li>
                    <li>
                      Implemented CRUD operations to enhance user data
                      management, utilizing Express.js on the backend.Integrated
                      real-time analysis results into an admin dashboard,
                      offering actionable insights to executives. Utilized
                      PostgreSQL for efficient data storage, retrieval, and
                      management.Engaged in agile sprints for adaptability to
                      project dynamics, while documenting code changes and using
                      Git/GitHub for collaboration.
                    </li>
                  </ul>
                </div>
              </>
            )}
            {value === 200 && (
              <>
                <h3>
                  React Advisor&nbsp;
                  <a
                    href="https://www.heedsfoundation.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @heedsfoundation
                  </a>
                </h3>
                <p>December 2022 - January 2023</p>
                <div className="experience-con-data-list">
                  <ul>
                    <li>
                      Collaborating on a web application to generate responsive
                      and user-friendly solutions that showcase all the work
                      done by an NGO to stakeholders and clients.
                    </li>
                    <li>
                      Collaborate with designers and fellow engineers to bring
                      creative concepts to life, turning them into tangible,
                      production-ready solutions for clients and stakeholders.
                    </li>
                    <li>
                      Advice to a co-worker on the fundamental website design
                      and structure, along with guidance on React component
                      implementation.
                    </li>
                  </ul>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Experience;
