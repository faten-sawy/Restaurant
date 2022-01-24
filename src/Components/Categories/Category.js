import React from "react";
import styles from "./Category.module.css";
import chicken from "../../Helper/Icons/chicken-leg-svgrepo-com.svg";
import pizza from "../../Helper/Icons/pizza-slice-pizza-svgrepo-com.svg";
import pasta from "../../Helper/Icons/pasta-serving-svgrepo-com.svg";
import donut from "../../Helper/Icons/doughnut-svgrepo-com.svg";
import sandwich from "../../Helper/Icons/thick-sandwich-svgrepo-com.svg";
import drinks from "../../Helper/Icons/cola-can-svgrepo-com.svg";
const category = [
  { name: "chicken", src: chicken },
  { name: "pizza", src: pizza },
  { name: "pasta", src: pasta },
  { name: "donut", src: donut },
  { name: "sandwich", src: sandwich },
  { name: "drinks", src: drinks },
];
function Category() {
  return (
    <div className={styles["category-container"]}>
      <ul>
        {category.map((item) => (
          <li>
            <div className={styles["test"]}>
              <img src={item.src} alt={item.name} />
            </div>
            <p>{item.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Category;
