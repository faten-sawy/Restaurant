import React, { useEffect, useState } from "react";
import styles from "./Slider.module.css";
import List from "./List";
import cart from "../../Helper/Icons/shopping-cart-svgrepo-com.svg";
import useMousePosition from "../../Hooks/MousePosition";
import { isInViewport } from "../../Helper/helper";
import Button from "../Button/Button";

function Slider() {
  const moveHandler = (e) => {
    const div = document.getElementById("test");
    const tomato_img = document.getElementById("tomato");
    let eventObj = e.nativeEvent;
    let position = { x: eventObj.clientX, y: eventObj.clientY };
    /*  console.log(position); */
    translateHandle(div, position.x, position.y);
    translateHandle(tomato_img, position.x, position.y);
  };
  const translateHandle = (element, x, y) => {
    element.style.transform = `translate(-${x * 0.02}px,-${y * 0.02}px)`;
  };
  return (
    <div id="slider" className={styles["slider"]} onMouseMove={moveHandler}>
      <img
        id="tomato"
        src="https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/uploads/2021/03/slider_shape_03.png"
        alt="tomato"
      />
      <div className={styles["left-section"]}>
        <div>
          <span>free home delivery 24 hours</span>{" "}
        </div>
        <h1 className={styles["title"]}> the Delight Sandwich</h1>
        <List />
        <Button pro={button} />
      </div>
      <div className={styles["right-section"]}>
        <img
          id="test"
          src="https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/uploads/2021/05/slide3_shape1.png"
          alt="img"
        />
        <img
          alt="img"
          src="https://radiustheme.com/demo/wordpress/themes/panpie/wp-content/uploads/2021/05/slide3_2.png"
        />
      </div>
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
