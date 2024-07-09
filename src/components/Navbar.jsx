import logo from "../assets/logo24.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Navbar = () => {
  return (
    <nav className="mb-10 flex items-center justify-between py-4">
      <div className="flex flex-shrink-0 items-center">
        <a href="#">
          <img className="ml-10 w-10 h-10" src={logo} alt="logo" />
        </a>
      </div>
      <div className="m-4 flex items-center justify-center gap-4 text-xl">
        <FaLinkedin
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/hemanth-d-908993267/",
              "_blank"
            )
          }
          style={{ cursor: "pointer" }}
        />
        <FaGithub
          onClick={() =>
            window.open("https://github.com/Hemanth-1323", "_blank")
          }
          style={{ cursor: "pointer" }}
        />
        <SiLeetcode
          onClick={() =>
            window.open(
              "https://leetcode.com/hemanthdhamodharan1323/",
              "_blank"
            )
          }
          style={{ cursor: "pointer" }}
        />
      </div>
    </nav>
  );
};

export default Navbar;
