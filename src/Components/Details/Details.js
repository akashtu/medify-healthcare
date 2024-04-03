import React from "react";
import "./Details.css";
import Hospital_icon from "../../Assets/image 22.png";
export const Details = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-8">
            <div className="box-component">
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
                              <p>Fortis Hospital Richmond Road</p>
                              <p>Banglore, Karnataka</p>
                              <p>
                                Smilessence Center for Advanced Dentistry + 1
                                more
                              </p>
                              <p>
                                <span className="text-color">FREE</span>{" "}
                                <span className="text-line">$500</span>{" "}
                                Consultation fee at clinic
                              </p>
                              <hr />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="box-inner2">
                      <p>Available Today</p>
                      <button className="button">Book FREE Center Visit</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
