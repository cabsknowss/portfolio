import React from "react";
import cabsz from "./img/cabsz.png";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import myResume from "./My_Resume.pdf";

const About = () => {
  const muiIconStyle = { fontSize: "2rem" };

  return (
    <section id="about" className="about padding-block-900">
      <div className="container">
        <div className="about-wrapper">
          <div className="align-self-center about-details">
            <h1 className="| fw-bold fs-primary-heading">
              Hi, I am <span className="text-accent-400">Kenneth</span>
            </h1>
            <h2 className="| fw-semi-bold fs-subheading">
              Aspiring Software Engineer
            </h2>
            <p className="padding-block-500">
              I am a versatile web developer with knowledge in both frontend and
              backend technologies.
            </p>
            <div className="about-social-icons">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/kenneth-cabobos-a687ab121/"
              >
                <LinkedInIcon style={muiIconStyle} />
              </a>
              <a target="_blank" href="https://www.facebook.com/cabsknows/">
                <FacebookIcon style={muiIconStyle} />
              </a>
              <a target="_blank" href="https://github.com/cabsknowss">
                <GitHubIcon style={muiIconStyle} />
              </a>
            </div>
            <div className="padding-block-500">
              <a href={myResume} download="RESUME_Kenneth_Cabobos">
                <button className="button">Download CV</button>
              </a>
            </div>
          </div>
          <div className="about-pic justify-self-center">
            <img
              className="about-profile-pic"
              src={cabsz}
              alt="profile-picture"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
