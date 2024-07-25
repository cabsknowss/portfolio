import React from "react";
import myResume from "./My_Resume.pdf";
import { Link } from "react-scroll";

const Footer = () => {
  const navLists = [
    { text: "About", id: "about" },
    { text: "Skills", id: "skill" },
    { text: "Projects", id: "project" },
    { text: "Contact", id: "contact" },
  ];

  return (
    <footer className="primary-footer | padding-block-500 bg-neutral-900 text-neutral-100">
      <div className="container">
        <div className="footer-wrapper">
          <div className="footer-logo align-self-center">
            <Link
              to="header"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              <h3 className="ff-mono fw-semi-bold fs-subheading">Kenneth</h3>
            </Link>
          </div>

          <div className="align-self-center">
            <nav className="footer-navigation">
              <ul className="footer-nav-lists">
                {navLists.map((navList, index) => (
                  <li key={index}>
                    <Link
                      to={navList.id}
                      spy={true}
                      smooth={true}
                      offset={0}
                      duration={500}
                    >
                      {navList.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="justify-self-end footer-button">
            <a target="_blank" href="https://github.com/cabsknowss">
              <button
                className="button"
                data-type="inverted"
                data-width="small"
              >
                GitHub
              </button>
            </a>

            <a href={myResume} download="RESUME_Kenneth_Cabobos">
              <button className="button" data-width="small">
                Download CV
              </button>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
