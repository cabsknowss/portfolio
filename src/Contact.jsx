import React from "react";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";

const Contact = () => {
  return (
    <section
      id="contact"
      className="contact | bg-accent-400 text-neutral-100 padding-block-900"
    >
      <div className="container">
        <div className="even-columns">
          <div className="align-self-center">
            <h2 className="fs-secondary-heading fw-bold text-align-center">
              Contact
            </h2>
          </div>
          <div className="text-align-center flow">
            <p>
              <span>Email</span>: caboboskennethzxc@gmail.com
            </p>
            <p>
              <span>Contact no.</span>: +639453478092
            </p>

            <p>
              <span>Facebook</span>: cabsknows
            </p>
            <p>
              <span>Instagram</span>: cabsz
            </p>
            <p>
              <span>GitHub</span>: cabsknowss
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
