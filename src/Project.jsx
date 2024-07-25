import React from "react";
import kyusitrip_project from "./img/project-kyusitrip.png";
import mongodb_icon from "./img/icons8-mongodb.png";
import expressjs_icon from "./img/icons8-expressjs.svg";
import reactjs_icon from "./img/icons8-reactjs.svg";
import nodejs_icon from "./img/icons8-nodejs.svg";
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
            <img src={kyusitrip_project} alt="kyusitrip" />
            <p>
              <span className="fw-bold text-primary-400">KyusiTrip:</span> An
              Infoboard System for Public Transit Navigation in Quezon City
            </p>
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
                  href="https://cabsknows.github.io/kyusitrip-frontend-github/"
                >
                  <button className="button" data-width="small">
                    <LiveTvIcon style={muiIconStyle} />
                    <p>Live Demo</p>
                  </button>
                </a>
                <a
                  target="_blank"
                  href="https://github.com/cabsknowss/kyusitrip-frontend"
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
