import logo from "../assets/logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Navbar = () => {
  return (
    <>
      <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
          {/* <img className="mx-2 w-10" src={logo} alt="logo" /> */}
          <span className="text-4xl tracking-tight">JN</span>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
          <a
            className="hover:scale-110 transform transition-transform"
            href="https://www.linkedin.com/in/jahangir-naseer-8a6330248/"
          >
            <FaLinkedin />
          </a>
          <a
            className="hover:scale-110 transform transition-transform"
            href="https://github.com/jahngir/"
          >
            <FaGithub />
          </a>
          <a
            className="hover:scale-110 transform transition-transform"
            href="https://www.instagram.com/jahangir.naseer/"
          >
            <FaInstagram />
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
