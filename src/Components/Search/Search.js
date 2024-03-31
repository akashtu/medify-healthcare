import React from "react";
import "./Search.css";
import search_icon from "../../Assets/Icon (4).png";
import Doctors_icon from "../../Assets/u.png";
import Labs_icon from "../../Assets/ae.png";
import Hospitals_icon from "../../Assets/Group.png";
import Medicine_icon from "../../Assets/e.png";
import Ambulance_icon from "../../Assets/Group (1).png";
export const Search = () => {
  return (
    <div className="search-component">
      <div className="search-top">
        <form className="form-section">
          <div>
            <img src={search_icon} alt="search-icon" />
            <input type="text" placeholder="state" />
          </div>
          <div>
            <img src={search_icon} alt="search-icon" />
            <input type="text" placeholder="city" />
          </div>
          <button className="button search-button">
            <img src={search_icon} alt="search-icon" />
            search
          </button>
        </form>
      </div>
      <div className="search-middle">
        <h1>You may be looking for</h1>
      </div>
      <div className="search-bottom">
        <div>
          <img src={Doctors_icon} alt="" />
          <p>Doctors</p>
        </div>
        <div>
          <img src={Labs_icon} alt="" />
          <p>Labs</p>
        </div>
        <div>
          <img src={Hospitals_icon} alt="" />
          <p>Hospitals</p>
        </div>
        <div>
          <img src={Medicine_icon} alt="" />
          <p>Medical Store</p>
        </div>
        <div>
          <img src={Ambulance_icon} alt="" />
          <p>Ambulance</p>
        </div>
      </div>
    </div>
  );
};
