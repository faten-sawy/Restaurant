import React from "react";
import styles from "./TopButton.module.css";
import arrow from "../../Helper/Icons/double-up-arrow-svgrepo-com.svg";

function TopButton() {
  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className={styles.topButton} onClick={handleScrollTop}>
      <img src={arrow} />
      <p>Top</p>
    </div>
  );
}

export default TopButton;
