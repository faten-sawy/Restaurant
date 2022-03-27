import React, { useState, useEffect } from "react";
import styles from "./Menu.module.css";
import CategoryList from "../../Components/CategoryList/CategoryList";
import { getAllData } from "../../Helper/helper";

function Menu() {
  const [category, setCategory] = useState();
  const [displayedCategory, setDisplayedCategory] = useState();

  useEffect(() => {
    getAllData().then((response) =>
      setDisplayedCategory(handleDisplayed(response))
    );
  }, [category]);
  console.log(displayedCategory);
  const handleDisplayed = (data) =>
    data.filter((item) => item.category === category);

  /* pass value from child to parent */
  const handleCategory = (returnCategory) => {
    setCategory(returnCategory);
  };
  category && console.log(category);

  return (
    <div className={styles.container}>
      <CategoryList handleFilter={handleCategory} />
    </div>
  );
}

export default Menu;
