import React from "react";
import "./Home.css";
import { Hero } from "../Hero/Hero";
import { Search } from "../Search/Search";
import { Offers } from "../Offers/Offers";
export const Home = () => {
  return (
    <div>
      <Hero />
      <Search />
      <Offers />
    </div>
  );
};
