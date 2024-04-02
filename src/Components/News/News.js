import React from "react";
import "./News.css";
import Detox_image from "../../Assets/demo4-postimg3-370x300.jpg.png";
import Doctor_image from "../../Assets/doctor2-80x80.jpg.png";
export const News = () => {
  return (
    <div className="news-component">
      <div className="news-top">
        <p>Blog & News</p>
        <h1>Read Our Latest News</h1>
      </div>
      <div className="news-bottom">
        <div className="newsbottom-sub">
          <img src={Detox_image} alt="" />
          <div className="newsbottom-innerdiv">
            <div>
              <p>Medical</p>
              <p>|</p>
              <p>March 31, 2022</p>
            </div>
            <div>
              <h2>6 Tips to protect your Mental Health When you're sick</h2>
            </div>
            <div>
              <img src={Doctor_image} alt="" />
              <h3>Rebecca Lee</h3>
            </div>
          </div>
        </div>
        <div className="newsbottom-sub">
          <img src={Detox_image} alt="" />
          <div className="newsbottom-innerdiv">
            <div>
              <p>Medical</p>
              <p>|</p>
              <p>March 31, 2022</p>
            </div>
            <div>
              <h2>6 Tips to protect your Mental Health When you're sick</h2>
            </div>
            <div>
              <img src={Doctor_image} alt="" />
              <h3>Rebecca Lee</h3>
            </div>
          </div>
        </div>
        <div className="newsbottom-sub">
          <img src={Detox_image} alt="" />
          <div className="newsbottom-innerdiv">
            <div>
              <p>Medical</p>
              <p>|</p>
              <p>March 31, 2022</p>
            </div>
            <div>
              <h2>6 Tips to protect your Mental Health When you're sick</h2>
            </div>
            <div>
              <img src={Doctor_image} alt="" />
              <h3>Rebecca Lee</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
