import axios from "axios";
import React, { useEffect, useState } from "react";
import CustomCard from "./Card/CustomCard";
import styles from "./PopularFood.module.css";
function PopularFood() {
  const [menu, setMenu] = useState();
  useEffect(() => {
    axios.get("http://localhost:3000/popularFood").then((items) => {
      setMenu(items.data.filter((item) => item.rating === 5));
    });
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
            <CustomCard food={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default PopularFood;
