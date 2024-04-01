import React from "react";
import "./OurMedical.css";
import Ahmad_image from "../../Assets/PngItem_1939059 1.png";
import Heena_image from "../../Assets/toppng 1.png";
import Ankur_image from "../../Assets/kindpng_1018785 1.png";
export const OurMedical = () => {
  return (
    <div className="ourmedical-component">
      <div className="ourmedical-top">
        <h1>Our Medical Specialist</h1>
      </div>
      <div className="ourmedical-middle">
        <div>
          <div className="ourmedical-div">
            <div className="ourmedical-innerdiv">
              <img src={Ahmad_image} alt="" />
            </div>
          </div>
          <div className="ourmedical-textdiv">
            <p>Dr. Ahmad Khan</p>
            <p>Neurologist</p>
          </div>
        </div>
        <div>
          <div className="ourmedical-div">
            <div className="ourmedical-innerdiv">
              <img src={Heena_image} alt="" />
            </div>
          </div>
          <div className="ourmedical-textdiv">
            <p>Dr. Heena Sachdeva</p>
            <p>Orthopadics</p>
          </div>
        </div>
        <div>
          <div className="ourmedical-div">
            <div className="ourmedical-innerdiv">
              <img src={Ankur_image} alt="" />
            </div>
          </div>
          <div className="ourmedical-textdiv">
            <p>Dr. Ankur Sharma</p>
            <p>Medicine</p>
          </div>
        </div>
      </div>
      <div className="ourmedical-bottom">
        <div></div>
        <div className="ourmedical-inner"></div>
        <div></div>
      </div>
    </div>
  );
};
