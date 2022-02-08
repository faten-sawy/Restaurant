import React from "react";
import styles from "./Home.module.css";
import Category from "../../Components/Categories/Category";
import Slider from "../../Components/Slider/Slider";
import Offers from "../../Components/Offers/Offers";
import SpecialOffer from "../../Components/Offers2/SpecialOffer";
function Home() {
  return (
    <div>
      {" "}
      <Category />
      <Slider />
      <Offers />
      <SpecialOffer />
    </div>
  );
}

export default Home;
