import React from "react";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-scroll";

const Header = () => {
  const navLists = [
    { text: "About", id: "about" },
    { text: "Skills", id: "skill" },
    { text: "Projects", id: "project" },
    { text: "Contact", id: "contact" },
  ];
  const [navShow, setNavShow] = useState(false);

  return (
    <header id="header" className="primary-header">
      <div className="container">
        <div className="nav-wrapper">
          <h2 className="fw-bold fs-subheading">Kenneth</h2>

          <div className="mobile-nav-btn">
            {navShow ? (
              <CloseIcon
                style={{
                  color: "white",
                  position: "fixed",
                  right: "25px",
                  top: "50px",
                }}
                onClick={() => setNavShow(!navShow)}
              />
            ) : (
              <MenuIcon onClick={() => setNavShow(!navShow)} />
            )}
          </div>

          <nav
            className={
              navShow ? "primary-navigation nav-show" : "primary-navigation"
            }
          >
            <ul className="nav-lists">
              {navLists.map((navList, index) => (
                <li key={index}>
                  <Link
                    to={navList.id}
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    onClick={() => {
                      if (navShow) {
                        setNavShow(!navShow);
                      }
                    }}
                  >
                    {navList.text}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
