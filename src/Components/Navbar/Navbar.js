import React from "react";
import "./Navbar.css";
import Yesicon from "../../Assets/Vector (1).png";
export const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="nav-left">
        <div className="nav-left-icon">
          <img src={Yesicon} alt="Yes Icon" />
        </div>
        <h1>Medify</h1>
      </div>
      <div className="nav-right">
        <ul>
          <li>Find Doctors</li>
          <li>Hospitals</li>
          <li>Medicines</li>
          <li>Surgeries</li>
          <li>Software for Provider</li>
          <li>Facilities</li>
          <li>
            <button className="button login">Login/Signup</button>
          </li>
        </ul>
      </div>
    </div>
  );
};
