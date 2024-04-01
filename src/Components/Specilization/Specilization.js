import React from "react";
import "./Specilization.css";
import Dentistry_image from "../../Assets/ae.png";
import Primary_image from "../../Assets/c.png";
import Cardiology_image from "../../Assets/Group (2).png";
import Mri_image from "../../Assets/t.png";
import Bloodtest_image from "../../Assets/ab.png";
import Psycologist_image from "../../Assets/Group (3).png";
import Xray_image from "../../Assets/Group (4).png";
export const Specilization = () => {
  return (
    <div className="specilization-container">
      <div className="text-div">
        <h1>Find By Specialisation</h1>
      </div>
      <div className="images-div">
        <div>
          <img src={Dentistry_image} alt="" />
          <p>Dentistry</p>
        </div>
        <div>
          <img src={Primary_image} alt="" />
          <p>Primary Care</p>
        </div>
        <div>
          <img src={Cardiology_image} alt="" />
          <p>Cardiology</p>
        </div>
        <div>
          <img src={Mri_image} alt="" />
          <p>MRI Resonance</p>
        </div>
        <div>
          <img src={Bloodtest_image} alt="" />
          <p>Blood Test</p>
        </div>
        <div>
          <img src={Psycologist_image} alt="" />
          <p>Pisologist</p>
        </div>
        <div>
          <img src={Dentistry_image} alt="" />
          <p>Laboratory</p>
        </div>
        <div>
          <img src={Xray_image} alt="" />
          <p>X-Ray</p>
        </div>
      </div>
      <div className="button-div">
        <button className="button">View All</button>
      </div>
    </div>
  );
};
