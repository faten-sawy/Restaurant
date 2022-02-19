import React from "react";
import styles from "./Counter.module.css";
import Ingredients from "../../Helper/Icons/spa-bowl-to-mix-treatments-ingredients-svgrepo-com.svg";
import clint from "../../Helper/Icons/person-svgrepo-com.svg";
/* import src from "../../Helper/Icons/work.svg";
 */ import heart from "../../Helper/Icons/heart-svgrepo-com.svg";
import team from "../../Helper/Icons/teamwork-svgrepo-com.svg";

/* import work from "../../Helper/Icons/work-item-svgrepo-com.svg";
 */ /* import Experience from "../../Helper/Icons/secure-svgrepo-com.svg";
 */

function Counter() {
  const list = [
    {
      icon: Ingredients,
      maxNumber: 105,
      text: "Ingredients",
    },
    {
      icon: clint,
      maxNumber: 500,
      text: "Clients Daily",
    },
    {
      icon: team,
      maxNumber: 50,
      text: "Years of Experience",
    },
    {
      icon: heart,
      maxNumber: 100,
      text: "Fresh & Halal",
    },
  ];
  return (
    <div className={styles.container}>
      {list.map((item) => (
        <div className={styles.box}>
          <img src={item.icon} alt="icon" />
          <p>{item.maxNumber}</p>
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  );
}

export default Counter;
