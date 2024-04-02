import React from "react";
import "./Families.css";
import Image1 from "../../Assets/div.elementor-widget-container.png";
import Image2 from "../../Assets/div.elementor-widget-container (1).png";
import Image3 from "../../Assets/div.elementor-widget-container (2).png";
import Image4 from "../../Assets/div.elementor-widget-container (3).png";
export const Families = () => {
  return (
    <div className="families-component">
      <div className="familiessub-component">
        <div className="families-left">
          <p>CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.</p>
          <h1>Our Families</h1>
          <p>
            We will work with you to develop individualised care plans,
            including management of chronic diseases. If we cannot assist, we
            can provide referrals or advice about the type of practitioner you
            require. We treat all enquiries sensitively and in the strictest
            confidence.
          </p>
        </div>
        <div className="families-right">
          <div className="families-right-div1">
            <img src={Image1} alt="" className="imageclass1" />
            <img src={Image3} alt="" className="imageclass2" />
          </div>
          <div className="families-right-div2">
            <img src={Image2} alt="" className="imageclass3" />
            <img src={Image4} alt="" className="imageclass4" />
          </div>
        </div>
      </div>
    </div>
  );
};
