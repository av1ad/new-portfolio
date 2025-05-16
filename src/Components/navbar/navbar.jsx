import { useState, useRef, useEffect } from "react";
import "../../assets/css/navbar.css";
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import { Box, User, Zap } from "react-feather";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const ref = useRef();

  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleLinkClick = () => {
    if (window.innerWidth < 768) {
      setNavbarOpen(false);
    }
  };
  useEffect(() => {
    const handleResize = () => {
      setNavbarOpen(window.innerWidth >= 768);
    };

    if (window.innerWidth >= 768) {
      setNavbarOpen(true);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handler = (event) => {
      event.preventDefault();
      if (navbarOpen && ref.current) {
        if (window.innerWidth < 768) {
          setNavbarOpen(false);
        }
      }
    };
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, [navbarOpen]);

  return (
    <nav ref={ref} className="navbar">
      <button
        aria-label="Toggle navigation drawer"
        className="toggle"
        onClick={() => setNavbarOpen((prev) => !prev)}
      >
        {navbarOpen ? (
          <MdClose style={{ width: "24px", height: "24px" }} />
        ) : (
          <FiMenu style={{ width: "24px", height: "24px" }} />
        )}
      </button>

      <div className={`menu-nav${navbarOpen ? " show-menu" : ""}`}>
        <div className="inner-menu">
          <h3>Navigation</h3>
          <ul className="contact-links">
            <li role="button">
              <ScrollLink
                className="link-holder"
                to="about"
                spy={true}
                smooth={true}
                offset={-170}
                duration={500}
                activeClass="active-link"
                aria-label="About Section"
                onClick={handleLinkClick}
              >
                <span className="icon-wrapper">
                  <User size={16} />
                </span>
                <p>About</p>
              </ScrollLink>
            </li>
            <li role="button">
              <ScrollLink
                className="link-holder"
                to="skills"
                spy={true}
                smooth={true}
                offset={-170}
                duration={500}
                activeClass="active-link"
                aria-label="Skills Section"
                onClick={handleLinkClick}
              >
                <span className="icon-wrapper">
                  <Zap size={16} />
                </span>
                <p>Skills</p>
              </ScrollLink>
            </li>
            <li role="button">
              <ScrollLink
                className="link-holder"
                to="projects"
                spy={true}
                smooth={true}
                offset={-170}
                duration={500}
                activeClass="active-link"
                aria-label="Projects Section"
                onClick={handleLinkClick}
              >
                <span className="icon-wrapper">
                  <Box size={16} />
                </span>
                <p>Projects</p>
              </ScrollLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
