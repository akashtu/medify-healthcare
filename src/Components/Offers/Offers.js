import React from "react";
import "./Offers.css";
import Image1 from "../../Assets/image 1 (1).png";
import Image2 from "../../Assets/image 1.png";
export const Offers = () => {
  return (
    <div>
      <div className="offers-component">
        <div>
          <img src={Image2} alt="" />
        </div>
        <div>
          <img src={Image1} alt="" />
        </div>
        <div>
          <img src={Image2} alt="" />
        </div>
      </div>
      <div className="dots-container">
        <div></div>
        <div className="innersDiv"></div>
        <div></div>
      </div>
    </div>
  );
};
