import React from "react";
import kyusitrip_project from "./img/project-kyusitrip.png";
import mongodb_icon from "./img/icons8-mongodb.png";
import expressjs_icon from "./img/icons8-expressjs.svg";
import reactjs_icon from "./img/icons8-reactjs.svg";
import nodejs_icon from "./img/icons8-nodejs.svg";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import CodeIcon from "@mui/icons-material/Code";

const Project = () => {
  return (
    <section className="projects">
      <div className="container">
        <h2 className="fs-secondary-heading fw-semi-bold">Projects</h2>
        <div className="even-columns">
          <div>
            <img src={kyusitrip_project} alt="kyusitrip" />
            <p>
              <span>KyusiTrip:</span> An Infoboard System for Public Transit
              Navigation in Quezon City
            </p>
            <div>
              <div>
                <img src={mongodb_icon} />
                <img src={expressjs_icon} />
                <img src={reactjs_icon} />
                <img src={nodejs_icon} />
              </div>
              <div>
                <button className="button">
                  <LiveTvIcon />
                  <p>Live Demo</p>
                </button>
                <button className="button">
                  <CodeIcon />
                  <p>Source Code</p>
                </button>
              </div>
            </div>
          </div>

          <div>
            <img src={kyusitrip_project} alt="kyusitrip" />
            <p>
              <span>KyusiTrip:</span> An Infoboard System for Public Transit
              Navigation in Quezon City
            </p>
            <div>
              <div>
                <img src={mongodb_icon} />
                <img src={expressjs_icon} />
                <img src={reactjs_icon} />
                <img src={nodejs_icon} />
              </div>
              <div>
                <button className="button">
                  <LiveTvIcon />
                  <p>Live Demo</p>
                </button>
                <button className="button">
                  <CodeIcon />
                  <p>Source Code</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
