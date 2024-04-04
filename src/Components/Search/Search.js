import React, { useEffect, useState } from "react";
import "./Search.css";
import search_icon from "../../Assets/Icon (4).png";
import Doctors_icon from "../../Assets/u.png";
import Labs_icon from "../../Assets/ae.png";
import Hospitals_icon from "../../Assets/Group.png";
import Medicine_icon from "../../Assets/e.png";
import Ambulance_icon from "../../Assets/Group (1).png";
import { Link } from "react-router-dom";
import { MyContext } from "../Modals/Context";
import { useContext } from "react";
import axios from "axios";
export const Search = () => {
  const { states, statename, setStateName, setCityName } =
    useContext(MyContext);
  const [city, setCity] = useState([]);
  const [showstate, setShowState] = useState(false);
  const [showcity, setShowCity] = useState(false);
  // const [statename, setStateName] = useState("Alaska");
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
  // console.log(states);

  return (
    <div>
      <div className="search-component">
        <div className="search-top">
          <form className="form-section">
            <div onClick={() => setShowState(!showstate)}>
              <img src={search_icon} alt="search-icon" />
              <input type="text" placeholder="state" />
            </div>

            <div onClick={() => setShowCity(!showcity)}>
              <img src={search_icon} alt="search-icon" />
              <input type="text" placeholder="city" />
            </div>
            <Link to="/search">
              <button className="button search-button">
                <img src={search_icon} alt="search-icon" />
                search
              </button>
            </Link>
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
      <div className={`${showstate ? "states-component" : ""}`}>
        {showstate &&
          states.map((state, index) => {
            return (
              <p keys={index} onClick={() => setStateName(state)}>
                {state}
              </p>
            );
          })}
      </div>
      <div className={`${showcity ? "city-component" : ""}`}>
        {showcity &&
          city.map((cities, index) => {
            return (
              <p keys={index} onClick={() => setCityName(cities)}>
                {cities}
              </p>
            );
          })}
      </div>
    </div>
  );
};
