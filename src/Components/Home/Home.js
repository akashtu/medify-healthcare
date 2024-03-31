import React from "react";
import "./Home.css";
import { Hero } from "../Hero/Hero";
import { Search } from "../Search/Search";
export const Home = () => {
  return (
    <div>
      <Hero />
      <Search />
    </div>
  );
};
