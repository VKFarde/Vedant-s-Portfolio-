import "./left.css";
import { FiFacebook, FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";
function Left() {
  return (
    <>
      <ul className="lfcon">
        <li>
          <a href="https://www.linkedin.com/in/vedant-farde-899116193/">
            <FiLinkedin />
          </a>
        </li>
        <li>
          <a href="https://github.com/VKFarde">
            <FiGithub />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/profile.php?id=100027011512103">
            <FiInstagram />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/vedantfarde/">
            <FiFacebook />
          </a>
        </li>
      </ul>
    </>
  );
}

export default Left;
