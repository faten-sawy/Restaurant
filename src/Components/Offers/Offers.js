import React, { useState } from "react";
import styles from "./Offers.module.css";
import Src_1 from "../../Helper/Images/offer-pro_1.png";
import Src_2 from "../../Helper/Images/offer-pro_2.png";
import Src_3 from "../../Helper/Images/offer-pro_3.png";
import cart from "../../Helper/Icons/shopping-cart-svgrepo-com.svg";
import Button from "../Button/Button";
function Offers() {
  return (
    <>
      <h1>best deal we offer</h1>
      <div className={styles["offer"]}>
        <div className={styles["left-section"]}>
          <img src={Src_1} alt="pizza" />
          <Button pro={leftButton} />
        </div>
        <div className={styles["right-section"]}>
          <div>
            <img src={Src_2} alt="sandwich" />
            <Button pro={rightButtons.top} />
          </div>
          <div>
            <img src={Src_3} alt="burger sandwich" />
            <Button pro={rightButtons.bottom} />
          </div>
        </div>
      </div>
    </>
  );
}
const leftButton = {
  data: {
    text: "order now",
    icon: cart,
  },
  style: {
    background: "linear-gradient(to right,#fcb302  50%, #f43127 50%)",
    top: "90%",
    transform: "translateY(-100%)",
    left: "10%",
  },
};
const rightButtons = {
  top: {
    data: {
      text: "order now",
      icon: cart,
    },
    style: {
      background: "linear-gradient(to right,#f43127  50%, #fcb302 50%)",
      top: "30%",
      transform: "translateY(100%)",
      marginLeft: "3.5rem",
    },
  },
  bottom: {
    data: {
      text: "order now",
      icon: cart,
    },
    style: {
      background: "#f43127",
      top: "30%",
      transform: "translateY(100%)",
    },
  },
};

export default Offers;
