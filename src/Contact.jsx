import React from "react";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";

const Contact = () => {
  return (
    <section className="contact">
      <div className="container">
        <h2 className="fs-secondary-heading fw-semi-bold">Contact</h2>
        <div className="even-columns">
          <div>
            <CallIcon />
            <p>09453478092</p>
          </div>
          <div>
            <EmailIcon />
            <p>caboboskennethzxc@gmail.com</p>
          </div>
          <div>
            <ConnectWithoutContactIcon />
            <div>
              <p>
                <span>Facebook</span>: cabsknows
              </p>
              <p>
                <span>Instagram</span>: cabsz
              </p>
              <p>
                <span>Github</span>: cabsknowss
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
