import React from "react";
import "./Home.css";
import { Hero } from "../Hero/Hero";
import { Search } from "../Search/Search";
import { Offers } from "../Offers/Offers";
import { Specilization } from "../Specilization/Specilization";
import { OurMedical } from "../OurMedical/OurMedical";
import { Caring } from "../Caring/Caring";
import { News } from "../News/News";
import { Families } from "../Families/Families";
export const Home = () => {
  return (
    <div>
      <Hero />
      <Search />
      <Offers />
      <Specilization />
      <OurMedical />
      <Caring />
      <News />
      <Families />
    </div>
  );
};
