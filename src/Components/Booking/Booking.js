import React from "react";
import "./Booking.css";
export const Booking = () => {
  return (
    <div className="booking-component">
      <div>
        <div>
          <p>Today</p>
          <p>11 Slots Available</p>
        </div>
        <div>
          <p>Tomorrow</p>
          <p>17 Slots Available</p>
        </div>
        <div>
          <p>Fri, 5 May</p>
          <p>18 Slots Available</p>
        </div>
      </div>
      <div>
        <p>Morning</p>
        <button className="time-button">11:30 AM</button>
      </div>
      <div>
        <p>Afternoon</p>
        <button className="time-button">12:00 PM</button>
        <button className="time-button">12:30 PM</button>
        <button className="time-button">1:30 PM</button>
        <button className="time-button">2:00 PM</button>
        <button className="time-button">2:30 PM</button>
      </div>
      <div>
        <p>Evening</p>
        <button className="time-button">6:00 PM</button>
        <button className="time-button">6:30 PM</button>
        <button className="time-button">7:00 PM</button>
        <button className="time-button">7:30 PM</button>
      </div>
    </div>
  );
};
