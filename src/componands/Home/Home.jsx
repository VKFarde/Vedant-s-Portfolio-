import "./home.css";
function Home() {
  return (
    <div className="home" id="#">
      <div className="home-con">
        <div className="home-con-head  ">
          <h3>Hi, my name is</h3>
        </div>
        <div className="home-con-name  ">
          <h1>Vedant Farde</h1>
        </div>
        <div className="home-con-head-h  ">
          <h1>I build things for the web.</h1>
        </div>
        <div className="home-con-head-p  ">
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
        <div className="home-con-button  ">
          <a href="https://github.com/VKFarde">
            <button>Check out my GitHub!</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
