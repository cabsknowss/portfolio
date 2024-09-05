import React from "react";
import kyusitrip_project from "./img/project-kyusitrip.png";
import calculator_project from "./img/project-calculator.png";
import portfolio_project from "./img/project-portfolio.png";
import financetrack_project from "./img/project-financetrack.png";
import mongodb_icon from "./img/icons8-mongodb.png";
import expressjs_icon from "./img/icons8-expressjs.svg";
import reactjs_icon from "./img/icons8-reactjs.svg";
import nodejs_icon from "./img/icons8-nodejs.svg";
import sass_icon from "./img/sass-icon.png";
import mysql_icon from "./img/mysql-icon.png";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import CodeIcon from "@mui/icons-material/Code";

const Project = () => {
  const muiIconStyle = { fontSize: "1.2rem" };

  return (
    <section id="project" className="projects padding-block-900">
      <div className="container">
        <h2 className="padding-bottom-500 text-align-center fs-secondary-heading fw-bold">
          Projects
        </h2>
        <div className="grid-wrap-2">
          <div className="project-card">
            <div>
              <img src={kyusitrip_project} alt="kyusitrip" />
              <p>
                <span className="fw-bold text-primary-400">KyusiTrip:</span> An
                Infoboard System for Public Transit Navigation in Quezon City
              </p>
            </div>
            <div className="project-details">
              <div className="project-tech-icons">
                <img src={mongodb_icon} />
                <img src={expressjs_icon} />
                <img src={reactjs_icon} />
                <img src={nodejs_icon} />
              </div>
              <div>
                <a
                  target="_blank"
                  href="https://drive.google.com/file/d/1uTrdTUOqNs_LJqNJjNAn_jUrOag4EKAS/view?usp=drive_link"
                >
                  <button className="button" data-width="small">
                    <LiveTvIcon style={muiIconStyle} />
                    <p>Video Demo</p>
                  </button>
                </a>
                <a
                  target="_blank"
                  href="https://github.com/cabsknows/kyusitrip-frontend-github"
                >
                  <button
                    className="button"
                    data-width="small"
                    data-type="inverted"
                  >
                    <CodeIcon style={muiIconStyle} />
                    <p>Source Code</p>
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div>
              <img src={calculator_project} alt="calculator" />
              <p>
                <span className="fw-bold text-primary-400">Calculator: </span>A
                versatile calculator with a numpad, BMI, TDEE, and additional
                calculators to be added soon.
              </p>
            </div>
            <div className="project-details">
              <div className="project-tech-icons">
                <img src={reactjs_icon} />
                <img src={sass_icon} />
              </div>
              <div>
                <a
                  target="_blank"
                  href="https://cabsknowss.github.io/calculator/"
                >
                  <button className="button" data-width="small">
                    <LiveTvIcon style={muiIconStyle} />
                    <p>Live Demo</p>
                  </button>
                </a>
                <a
                  target="_blank"
                  href="https://github.com/cabsknowss/calculator"
                >
                  <button
                    className="button"
                    data-width="small"
                    data-type="inverted"
                  >
                    <CodeIcon style={muiIconStyle} />
                    <p>Source Code</p>
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div>
              <img src={portfolio_project} alt="portfolio" />
              <p>
                <span className="fw-bold text-primary-400">Portfolio: </span>
                Explore to find information about my projects, skills, and
                experience.
              </p>
            </div>
            <div className="project-details">
              <div className="project-tech-icons">
                <img src={reactjs_icon} />
              </div>
              <div>
                <a
                  target="_blank"
                  href="https://cabsknowss.github.io/portfolio/"
                >
                  <button className="button" data-width="small">
                    <LiveTvIcon style={muiIconStyle} />
                    <p>Live Demo</p>
                  </button>
                </a>
                <a
                  target="_blank"
                  href="https://github.com/cabsknowss/portfolio"
                >
                  <button
                    className="button"
                    data-width="small"
                    data-type="inverted"
                  >
                    <CodeIcon style={muiIconStyle} />
                    <p>Source Code</p>
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div>
              <img src={financetrack_project} alt="financetrack" />
              <p>
                <span className="fw-bold text-primary-400">FinanceTrack: </span>
                A personal expenses tracker. Front-end and back-end development
                are still on-going.
              </p>
            </div>
            <div className="project-details">
              <div className="project-tech-icons">
                <img src={mysql_icon} />
                <img src={expressjs_icon} />
                <img src={reactjs_icon} />
                <img src={nodejs_icon} />
              </div>
              <div>
                <a
                  target="_blank"
                  href="https://cabsknowss.github.io/financetrack/"
                >
                  <button className="button" data-width="small">
                    <LiveTvIcon style={muiIconStyle} />
                    <p>Live Demo</p>
                  </button>
                </a>
                <a
                  target="_blank"
                  href="https://github.com/cabsknowss/financetrack"
                >
                  <button
                    className="button"
                    data-width="small"
                    data-type="inverted"
                  >
                    <CodeIcon style={muiIconStyle} />
                    <p>Source Code</p>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
