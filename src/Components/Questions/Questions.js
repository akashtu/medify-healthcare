import React from "react";
import "./Questions.css";
import Image1 from "../../Assets/Image-21-1.png.png";
import Plus_icon from "../../Assets/.png";
import ClipPath_icon from "../../Assets/Clip path group.png";
import Smile_icon from "../../Assets/svg.h2d-63a39c21.png";
export const Questions = () => {
  return (
    <div className="questions-component">
      <div className="questions-sub">
        <div className="questionsub-top">
          <p>Get Your Answer</p>
          <h1>Frequently Asked Questions</h1>
        </div>
        <div className="questionsub-bottom">
          <div>
            <div className="questionsub-bottom1">
              <img src={ClipPath_icon} alt="" />
            </div>
            <div className="questionsub-bottom2">
              <div>
                <img src={Smile_icon} alt="" />
              </div>
              <div>
                <p className="para1">84k+</p>
                <p className="para2">Happy Patients</p>
              </div>
            </div>
            <img src={Image1} alt="" className="docotors_image" />
          </div>
          <div>
            <div>
              <p>Why choose our medical for your family?</p>
              <img src={Plus_icon} alt="" />
            </div>
            <div>
              <p>Why we are different from others?</p>
              <img src={Plus_icon} alt="" />
            </div>
            <div>
              <p>Trusted & experience senior care & love</p>
              <img src={Plus_icon} alt="" />
            </div>
            <div>
              <p>How to get appointment for emergency cases?</p>
              <img src={Plus_icon} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
