import React from "react";
import "./Navbar.css";
import Search_icon from "../../Assets/Icon (4).png";
import Location_icon from "../../Assets/Icon (5).png";
export const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Medify
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0 creating-margin">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Find Doctors
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Hospitals
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Medicines
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Surgeries
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Software for Provider
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Facilities
                </a>
              </li>
            </ul>
            <button className="btn btn-outline-success" type="submit">
              My Bookings
            </button>
          </div>
        </div>
      </nav>
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <div className="last-div"></div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="container-fluid">
          <div className="row justify-content-sm-center">
            <div className="col-sm-8 display-property">
              <div className="search-section">
                <div>
                  <img src={Location_icon} alt="" />
                  <input type="text" placeholder="state" />
                </div>
                <div>
                  <img src={Location_icon} alt="" />
                  <input type="text" placeholder="city" />
                </div>
                <div>
                  <button className="button">
                    <img src={Search_icon} alt="" />
                    search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
