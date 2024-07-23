import React from "react";

const Header = () => {
  return (
    <header className="primary-header">
      <div className="container">
        <div className="nav-wrapper">
          <div>
            <h2 className="fw-semi-bold fs-secondary-heading">Kenneth</h2>
          </div>
          <nav className="primary-navigation">
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
        </div>
      </div>
    </header>
  );
};

export default Header;
