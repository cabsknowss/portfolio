import React from "react";
import Header from "./Header";
import About from "./About";
import Service from "./Service";
import Project from "./Project";
import Skill from "./Skill";
import Contact from "./Contact";
import Footer from "./Footer";

import cabsz from "./img/cabsz.png";
import api_service from "./img/service-api.png";
import webdev_service from "./img/service-webdev.png";
import kyusitrip_project from "./img/project-kyusitrip.png";
import mongodb_icon from "./img/icons8-mongodb.png";
import expressjs_icon from "./img/icons8-expressjs.svg";
import reactjs_icon from "./img/icons8-reactjs.svg";
import nodejs_icon from "./img/icons8-nodejs.svg";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import CodeIcon from "@mui/icons-material/Code";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";

const App = () => {
  return (
    <>
      <Header />
      <About />
      <Service />
      <Project />
      <Skill />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
