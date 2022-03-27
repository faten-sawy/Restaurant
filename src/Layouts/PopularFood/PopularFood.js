import axios from "axios";
import React, { useEffect, useState } from "react";
import FoodCard from "./Card/CustomCard";
import { getAllData } from "../../Helper/helper";

import styles from "./PopularFood.module.css";
function PopularFood() {
  const [menu, setMenu] = useState();
  useEffect(() => {
    getAllData().then((response) =>
      setMenu(response.filter((item) => item.rating === 5))
    );
  }, []);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <div className={styles.PopularFoodContainer}>
        <h1>Cooked with all love</h1>
        <div style={{ width: "100%" }}>
          {menu?.map((item) => (
            <FoodCard food={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default PopularFood;
