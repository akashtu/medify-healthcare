import React from "react";
import "./Navbar2.css";
import Search_icon from "../../Assets/Icon (4).png";
import Location_icon from "../../Assets/Icon (5).png";
import Vector_img from "../../Assets/Vector (1).png";
import { Link } from "react-router-dom";
import { MyContext } from "../Modals/Context";
import { useContext } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
export const Navbar = () => {
  const { states, statename, setStateName, setCityName } =
    useContext(MyContext);
  const [city, setCity] = useState([]);
  const [showstate, setShowState] = useState(false);
  const [showcity, setShowCity] = useState(false);

  const setNameFunction = (state) => {
    setStateName(state);
    setShowState(false);
  };

  const setCityFunction = (cities) => {
    setCityName(cities);
    setShowCity(false);
  };

  useEffect(() => {
    const fetchCity = async () => {
      const response = await axios.get(
        `https://meddata-backend.onrender.com/cities/${statename}`
      );
      const data = response.data;
      setCity(data);
      console.log(data);
    };
    fetchCity();
  }, [statename]);
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <div className="header-container">
              <div className="header-icon">
                <img src={Vector_img} alt="" />
              </div>
              <p className="heading">Medify</p>
            </div>
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
            <Link to="/mybookings">
              <button className="btn btn-outline-success" type="submit">
                My Bookings
              </button>
            </Link>
          </div>
        </div>
      </nav>
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <div className="last-div">
                <div>My Bookings</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="container">
          <div className="row justify-content-sm-end">
            <div className="col-sm-12 col-md-8 display-property">
              <div className="search-section1">
                <div>
                  <input type="search" placeholder="Search By Hospital" />
                </div>
                <div>
                  <button className="button">Search</button>
                </div>
              </div>
            </div>
          </div>
          <div className={`${showstate ? "state-component" : ""}`}>
            {showstate &&
              states.map((state, index) => {
                return (
                  <p keys={index} onClick={() => setNameFunction(state)}>
                    {state}
                  </p>
                );
              })}
          </div>
          <div className={`${showcity ? "cities-component" : ""}`}>
            {showcity &&
              city.map((cities, index) => {
                return (
                  <p keys={index} onClick={() => setCityFunction(cities)}>
                    {cities}
                  </p>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};
