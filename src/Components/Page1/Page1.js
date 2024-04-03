import React from "react";
import "./Page1.css";
import { Navbar } from "../Navbar1/Navbar";
import { Details } from "../Details/Details";
export const Page1 = () => {
  return (
    <div className="page-container">
      <Navbar />
      <Details />
    </div>
  );
};
