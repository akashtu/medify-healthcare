import React from "react";
import "./Page2.css";
// import { Navbar } from "../Navbar1/Navbar";
// import { Details } from "../Details/Details";
import { Navbar } from "../Navbar2/Navbar2";
import { Details } from "../Details2/Details";
export const Page2 = () => {
  return (
    <div className="page2-container">
      <Navbar />
      <Details />
    </div>
  );
};
