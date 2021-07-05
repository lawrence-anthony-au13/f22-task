import React from "react";
import image from "../images/jonathan.png";
import "./Startestimonial.css";

function Startestimonial() {
  return (
    <div>
      <div className="pt-5"></div>
      <div className="hnWhsI">
        <div className="container">
          <div className="align-items-center justify-content-center position-relative row">
            <div className="col-xl-10 col-lg-12">
              <div className="brleOg">
                <div
                  data-aos="zoom-in"
                  data-aos-duration="750"
                  data-aos-delay="500"
                  data-aos-once="true"
                  className="gVSvPg aos-init aos-animate"
                >
                  <img
                    src={image}
                    alt=""
                    className="img-fluid"
                    style={{ height: "104px" }}
                  />
                </div>
                <div
                  data-aos="fade-right"
                  data-aos-duration="750"
                  data-aos-delay="500"
                  data-aos-once="true"
                  className="daRRxv aos-init aos-animate"
                >
                  <p color="dark" className="cosdhs font-italic">
                    “OMG! I cannot believe that I have got a brand new landing
                    page after getting Omega. It was super easy to edit and
                    publish.”
                  </p>
                  <h4 color="heading" className="jCexaA">
                    Jonathan Taylor
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Startestimonial;
