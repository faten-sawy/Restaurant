import React from "react";
import styles from "./Home.module.css";
import Category from "../../Components/Categories/Category";
import Slider from "../../Components/Slider/Slider";
import Offers from "../../Components/Offers/Offers";
import SpecialOffer from "../../Components/Offers2/SpecialOffer";
import Delivery from "../../Components/Delivery/Delivery";
import Footer from "../../Components/Footer/Footer";
import TopButton from "../../Components/TopButton/TopButton";
import Counter from "../../Components/Counter/Counter";
import Chefs from "../../Components/Chefs/Chefs";
function Home() {
  return (
    <>
      <TopButton />
      <Category />
      <Slider />
      <Offers />
      <SpecialOffer />
      <Counter />
      <Chefs />
      <Delivery />
      <Footer />
    </>
  );
}

export default Home;
