import React, { useState, useEffect } from "react";
import styles from "./SpecialOffer.module.css";
import List from "../Slider/List";
import arrowIcon from "../../Helper/Icons/right-arrow-svgrepo-com.svg";
import specialSrc from "../../Helper/Images/special-pro_1.png";
import shapeSrc from "../../Helper/Images/shape23.png";
import { isInViewport } from "../../Helper/helper";

function SpecialOffer() {
  const [hoverClass, setHoverClass] = useState("");

  return (
    <div className={`${styles.special_offer_container}`}>
      <div className={styles["left-section"]}>
        <img src={specialSrc} alt="pizza offer" />
      </div>
      <div id="right-section" className={`${styles.right_section}`}>
        <p>WE PUT 100% OF LOVE AND DEDICATION</p>
        <h1>Panpie, Burgers, And Best Pizzas in Town</h1>
        <p>
          Piorem ipsum dolor sit amet consectetur adipiscing eliturabitur
          venenatis, nisl in bib endum commodo, sapien justo cursus are urna,
          quis porta mauris elit finibus nulla.
        </p>
        <List />
        <button
          onMouseOver={() => setHoverClass("animate")}
          onMouseOut={() => setHoverClass("")}
        >
          know more
          <img
            src={arrowIcon}
            className={styles[hoverClass]}
            alt="arrow icon"
          />
        </button>
        <div>
          <img src={shapeSrc} alt="pizza shape" />
        </div>
      </div>
    </div>
  );
}

export default SpecialOffer;
