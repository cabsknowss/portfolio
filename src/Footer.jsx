import React from "react";

const Footer = () => {
  return (
    <footer className="primary-footer">
      <div className="container">
        <div className="even-columns">
          <div>
            <h2 className="fw-semi-bold fs-secondary-heading">Kenneth</h2>
          </div>

          <nav className="footer-navigation">
            <ul className="nav-lists">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Projects</a>
              </li>
              <li>
                <a href="#">Skills</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>

          <button className="button">Check GitHub</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
