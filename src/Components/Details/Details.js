import React, { useState } from "react";
import "./Details.css";
import Hospital_icon from "../../Assets/image 22.png";
import { useContext } from "react";
import { MyContext } from "../Modals/Context";
import ThumbsUp_image from "../../Assets/thumbsup_image.png";
import { Booking } from "../Booking/Booking";

export const Details = () => {
  const { states, hospitalbystate } = useContext(MyContext);
  const [visibleBookings, setVisibleBookings] = useState({});

  // Function to toggle booking visibility for a specific hospital
  const toggleBookingVisibility = (hospitalId) => {
    setVisibleBookings((prevVisibility) => ({
      ...prevVisibility,
      [hospitalId]: !prevVisibility[hospitalId], // Toggle the visibility
    }));
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-8">
            <div className="outer-div">
              <h3>
                {hospitalbystate.length} medical centers available in{" "}
                {hospitalbystate[0] && hospitalbystate[0]["State"]}
              </h3>
              <p>
                Book appointments with minimum wait-time & verified doctor
                details
              </p>
            </div>
            {hospitalbystate.map((data) => {
              const hospitalId = data["Provider ID"];
              const isBookingVisible = visibleBookings[hospitalId];

              return (
                <div className="box-component" key={hospitalId}>
                  <div className="container">
                    <div className="row">
                      <div className="col-sm-8">
                        <div className="box-inner1">
                          <div className="container">
                            <div className="row">
                              <div className="col-sm-4">
                                <div className="image-container">
                                  <img src={Hospital_icon} alt="" />
                                </div>
                              </div>
                              <div className="col-sm-8">
                                <div className="text-container">
                                  <p>{data["Hospital Name"]}</p>
                                  <p>
                                    {data.City}, {data.State}
                                  </p>
                                  <p>{data.Address}</p>
                                  <p>
                                    Smilessence Center for Advanced Dentistry +
                                    1 more
                                  </p>
                                  <p>
                                    <span className="text-color">FREE</span>{" "}
                                    <span className="text-line">$500</span>{" "}
                                    Consultation fee at clinic
                                  </p>
                                  <hr />
                                  <div className="rating">
                                    <img src={ThumbsUp_image} alt="" />
                                    {Number(data["Hospital overall rating"])}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="box-inner2">
                          <p>Available Today</p>
                          <button
                            className="button"
                            onClick={() => toggleBookingVisibility(hospitalId)}
                          >
                            Book FREE Center Visit
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {isBookingVisible && <Booking details={data} />}
                </div>
              );
            })}
          </div>
          <div className="col-md-4 d-md-block d-sm-none">
            <div className="box-inner3">
              <p>This World Oral Health Day,</p>
              <p>Get a FREE Appointment* with Top Dentists.</p>
              <p>LIMITED PERIOD OFFER</p>
              <p>#BeSensitiveToOralHealth</p>
              <p>
                *T&C Apply - only consultation fee. Procedures/surgeries not
                covered
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
