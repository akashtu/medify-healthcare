import React from "react";
import "./Hero.css";
import Doctors_image from "../../Assets/NicePng_doctor-png_336282 1.png";
import { Navbar } from "../Navbar/Navbar";
import Shield_icon from "../../Assets/Shield check.png";
export const Hero = () => {
  return (
    <div className="hero-container">
      <Navbar />
      <div>
        <div className="hero-sub">
          <div className="hero-left">
            <p>Skip the travel! Find Online</p>
            <p>
              <span>Medical </span>
              <span className="centi">Centers</span>
            </p>
            <p>
              Connect instantly with a 24x7 specialist or choose to video visit
              a particular doctor.
            </p>
            <button className="button">Find Ceners</button>
          </div>
          <div className="hero-right">
            <img src={Doctors_image} alt="Doctors_image" />
            <div>
              <img src={Shield_icon} alt="" />
              <p>Regular Checkup</p>
            </div>
          </div>
        </div>
        <div className="dot-container">
          <div></div>
          <div>
            {" "}
            <div className="innerDiv"></div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};
