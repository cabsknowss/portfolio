import React from "react";
import api_service from "./img/service-api.png";
import webdev_service from "./img/service-webdev.png";

const Service = () => {
  return (
    <section className="service">
      <div className="container">
        <h2 className="fs-secondary-heading fw-semi-bold">Services</h2>
        <div className="even-columns">
          <div>
            <img src={webdev_service} alt="service-webdev" />
            <div>
              <h3 className="fs-sub-heading fw-semi-bold">Web Development</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id,
                iste exercitationem ea beatae unde cumque.
              </p>
            </div>
          </div>
          <div>
            <img src={api_service} alt="service-api" />
            <div>
              <h3 className="fs-sub-heading fw-semi-bold">API Integration</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis,
                nihil assumenda quibusdam odio sunt error.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
