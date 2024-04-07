import React, { useState } from "react";
import "./Booking.css";
import { MyContext } from "../Modals/Context";
import { useContext, useEffect } from "react";
export const Booking = ({ id, details }) => {
  // const { setTime, setDate setId } = useContext(MyContext);

  // const [time, setTime] = useState("11:30");
  const [date, setDate] = useState("");

  // const [localdata, setLocalData] = useState([]);

  const existingData = JSON.parse(localStorage.getItem("bookings")) || [];

  const handleClick = (time) => {
    // Construct the new booking object with provided details and additional properties
    const newBooking = {
      ...details,
      bookingTime: time,
      bookingDate: date,
    };

    // Merge the new booking with existing data
    const updatedData = [...existingData, newBooking];

    // Store the updated data array in local storage
    localStorage.setItem("bookings", JSON.stringify(updatedData));

    // Optionally, you can update the UI or trigger any other necessary actions here
  };

  return (
    <div className="booking-component">
      <div>
        <div>
          <p onClick={() => setDate("Today")}>Today</p>
          <p>11 Slots Available</p>
        </div>
        <div>
          <p onClick={() => setDate("Tomorrow")}>Tomorrow</p>
          <p>17 Slots Available</p>
        </div>
        <div>
          <p onClick={() => setDate("Fri, 5 May")}>Fri, 5 May</p>
          <p>18 Slots Available</p>
        </div>
      </div>
      <div>
        <p>Morning</p>
        <button className="time-button" onClick={() => handleClick("11:30 AM")}>
          11:30 AM
        </button>
      </div>
      <div>
        <p>Afternoon</p>
        <button className="time-button" onClick={() => handleClick("12:00 AM")}>
          12:00 PM
        </button>
        <button className="time-button" onClick={() => handleClick("12:30 AM")}>
          12:30 PM
        </button>
        <button className="time-button" onClick={() => handleClick("1:30 AM")}>
          1:30 PM
        </button>
        <button className="time-button" onClick={() => handleClick("2:00 AM")}>
          2:00 PM
        </button>
        <button className="time-button" onClick={() => handleClick("2:30 AM")}>
          2:30 PM
        </button>
      </div>
      <div>
        <p>Evening</p>
        <button className="time-button" onClick={() => handleClick("6:00 AM")}>
          6:00 PM
        </button>
        <button className="time-button" onClick={() => handleClick("6:30 AM")}>
          6:30 PM
        </button>
        <button className="time-button" onClick={() => handleClick("7:00 AM")}>
          7:00 PM
        </button>
        <button className="time-button" onClick={() => handleClick("7:30 AM")}>
          7:30 PM
        </button>
      </div>
    </div>
  );
};
