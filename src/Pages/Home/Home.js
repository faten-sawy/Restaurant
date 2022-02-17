import React from "react";
import styles from "./Home.module.css";
import Category from "../../Components/Categories/Category";
import Slider from "../../Components/Slider/Slider";
import Offers from "../../Components/Offers/Offers";
import SpecialOffer from "../../Components/Offers2/SpecialOffer";
import Delivery from "../../Components/Delivery/Delivery";
function Home() {
  return (
    <>
      <Category />
      <Slider />
      <Offers />
      <SpecialOffer />
      <Delivery />
    </>
  );
}

export default Home;
