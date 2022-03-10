import React, { useEffect, useState } from "react";
import styles from "./Slider.module.css";
import List from "./List";
import cart from "../../Helper/Icons/shopping-cart-svgrepo-com.svg";
import tomato from "../../Helper/Images/slider_shape_03.png";
import useMousePosition from "../../Helper/Hooks/MousePosition";
import { isInViewport } from "../../Helper/helper";
import Button from "../Button/Button";

function Slider() {
  const moveHandler = (e) => {
    const tomato_img = document.getElementById("tomato");
    let eventObj = e.nativeEvent;
    let position = { x: eventObj.clientX, y: eventObj.clientY };

    translateHandle(tomato_img, position.x, position.y);
  };
  const translateHandle = (element, x, y) => {
    element.style.transform = `translate(-${x * 0.02}px,-${y * 0.02}px)`;
  };
  return (
    <div id="slider" className={styles["slider"]} onMouseMove={moveHandler}>
      <div className={styles["left-section"]}>
        <div>
          <span>free home delivery 24 hours</span>{" "}
        </div>
        <h1 className={styles["title"]}> meet, eat & enjoy the true taste</h1>
        <List />
        <Button pro={button} />
      </div>
      <img id="tomato" src={tomato} alt="tomato" />
    </div>
  );
}
const button = {
  data: {
    icon: cart,
    text: "order now",
  },
  style: {
    background: "linear-gradient(to right, #fcb302 50%, #f43127 50%)",
  },
};

export default Slider;
