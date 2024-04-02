import React from "react";
import "./Download.css";
import Applestore_image from "../../Assets/apple_store.png.png";
import Google_image from "../../Assets/google_play.png.png";
import Seekpng_image1 from "../../Assets/SeekPng 1.png";
import Seekpng_image2 from "../../Assets/SeekPng 2.png";
import Image2 from "../../Assets/image 2.png";
import Vector from "../../Assets/Vector (5).png";
export const Download = () => {
  return (
    <div className="download-component">
      <div className="download-sub">
        <div className="download-left">
          <img src={Seekpng_image1} alt="" className="image1" />
          <img src={Seekpng_image2} alt="" className="image2" />
          <img src={Image2} alt="" className="image3" />
          <img src={Image2} alt="" className="image4" />
        </div>
        <div className="download-right">
          <h1>Download the</h1>
          <h1>
            <span>Medify</span> App
          </h1>
          <p>Get the link to download the app</p>
          <div>
            <input type="number" placeholder="Enter phone number" />
            <button className="button">send SMS</button>
          </div>
          <div>
            <img src={Applestore_image} alt="" />
            <img src={Google_image} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
