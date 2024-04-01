import React from "react";
import "./Caring.css";
import Image1 from "../../Assets/image-02-1.png.png";
import Image2 from "../../Assets/image-01-1.png.png";
import Righticon_image from "../../Assets/Group (5).png";
import Phone_image from "../../Assets/Vector.png";
export const Caring = () => {
  return (
    <div className="caring-component">
      <div className="caringinner-component">
        <div className="caring-left">
          <div>
            <img src={Image1} alt="" />
          </div>
          <div>
            <img src={Image2} alt="" />
          </div>
          <div className="caringleft-div">
            <div>
              <div className="phoneimage">
                <img src={Phone_image} alt="" />
              </div>
              <h3>Free Consultation</h3>
            </div>
            <div>
              <p>Consultation with the best</p>
            </div>
          </div>
        </div>
        <div className="caring-right">
          <p>HELPING PATIENTS FROM AROUND THE GLOBE!!</p>
          <h1>
            Patient <span>Caring</span>
          </h1>
          <p>
            Our goal is to deliver quality of care in a courteous, respectful,
            and compassionate manner. We hope you will allow us to care for you
            and strive to be the first and best choice for healthcare.
          </p>
          <div>
            <img src={Righticon_image} alt="" />
            <p>Stay Updated About Your Health</p>
          </div>
          <div>
            <img src={Righticon_image} alt="" />
            <p>Check Your Results Online</p>
          </div>
          <div>
            <img src={Righticon_image} alt="" />
            <p>Manage Your Appointments</p>
          </div>
        </div>
      </div>
    </div>
  );
};
