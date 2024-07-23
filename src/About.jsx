import React from "react";
import cabsz from "./img/cabsz.png";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="even-columns">
          <div>
            <img
              className="about-profle-pic"
              src={cabsz}
              alt="profile-picture"
            />
          </div>
          <div>
            <h1>Hi, I am Kenneth</h1>
            <h2>Aspiring Software Engineer</h2>
            <p>
              I am a versatile web developer with knowledge in both frontend and
              backend technologies.
            </p>
            <div className="about-social-icons">
              <LinkedInIcon />
              <FacebookIcon />
              <GitHubIcon />
            </div>
            <button className="button">Download CV</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
