import React from "react";
import styles from "./Home.module.css";
import Category from "../../Layouts/Categories/Category";
import Slider from "../../Layouts/Slider/Slider";
import Offers from "../../Layouts/Offers/Offers";
import SpecialOffer from "../../Layouts/Offers2/SpecialOffer";
import Delivery from "../../Layouts/Delivery/Delivery";
import Footer from "../../Layouts/Footer/Footer";
import Counter from "../../Layouts/Counter/Counter";
import Chefs from "../../Layouts/Chefs/Chefs";
import PopularFood from "../../Layouts/PopularFood/PopularFood";
import Recommended from "../../Layouts/Recommended/Recommended";

import TopButton from "../../Components/TopButton/TopButton";

function Home() {
  return (
    <>
      <TopButton />
      {/*  <Category /> */}
      <Slider />
      <Offers />
      <SpecialOffer />

      <Recommended />
      <PopularFood />
      <Counter />
      <Chefs />
      <Delivery />
      <Footer />
    </>
  );
}

export default Home;
