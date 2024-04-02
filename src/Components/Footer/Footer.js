import React from "react";
import "./Footer.css";
import Facebook_icon from "../../Assets/facebook.png";
import Twitter_icon from "../../Assets/twitter.png";
import Youtube_icon from "../../Assets/youtube.png";
import Circle_icon from "../../Assets/circle.png";
import Right_icon from "../../Assets/Vector (1).png";
import RightArrow_icon from "../../Assets/rightarrow.png";
export const Footer = () => {
  return (
    <div className="footer-component">
      <div className="footer-top">
        <div className="footer-top1">
          <div>
            <div>
              <img src={Right_icon} alt="" />
            </div>
            <p>Medify</p>
          </div>
          <div>
            <div>
              <img src={Facebook_icon} alt="" />
            </div>
            <div>
              <img src={Twitter_icon} alt="" />
            </div>
            <div>
              <img src={Youtube_icon} alt="" />
            </div>
            <div>
              <img src={Circle_icon} alt="" />
            </div>
          </div>
        </div>
        <div className="footer-top2">
          <ul>
            <li>
              <img src={RightArrow_icon} alt="" />
              <p>About us</p>
            </li>
            <li>
              <img src={RightArrow_icon} alt="" />
              <p>Our Pricing</p>
            </li>
            <li>
              <img src={RightArrow_icon} alt="" />
              <p>Our Gallery</p>
            </li>
            <li>
              <img src={RightArrow_icon} alt="" />
              <p>Appointment</p>
            </li>
            <li>
              <img src={RightArrow_icon} alt="" />
              <p>Privacy Policy</p>
            </li>
          </ul>
        </div>
        <div className="footer-top2">
          <ul>
            <li>
              <img src={RightArrow_icon} alt="" />
              <p>Orthology</p>
            </li>
            <li>
              <img src={RightArrow_icon} alt="" />
              <p>Neurology</p>
            </li>
            <li>
              <img src={RightArrow_icon} alt="" />
              <p>Dental Care</p>
            </li>
            <li>
              <img src={RightArrow_icon} alt="" />
              <p>Opthalmology</p>
            </li>
            <li>
              <img src={RightArrow_icon} alt="" />
              <p>Cardiology</p>
            </li>
          </ul>
        </div>
        <div className="footer-top2">
          <ul>
            <li>
              <img src={RightArrow_icon} alt="" />
              <p>About us</p>
            </li>
            <li>
              <img src={RightArrow_icon} alt="" />
              <p>Our Pricing</p>
            </li>
            <li>
              <img src={RightArrow_icon} alt="" />
              <p>Our Gallery</p>
            </li>
            <li>
              <img src={RightArrow_icon} alt="" />
              <p>Appointment</p>
            </li>
            <li>
              <img src={RightArrow_icon} alt="" />
              <p>Privacy Policy</p>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p>Copyright ©2023 Surya Nursing Home.com. All Rights Reserved</p>
      </div>
    </div>
  );
};
