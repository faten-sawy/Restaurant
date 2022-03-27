import React, { useState, useEffect } from "react";
import styles from "./NavBar.module.css";
import logo from "../../Helper/Icons/logo.svg";
import phone from "../../Helper/Icons/phone-svgrepo-com.svg";
import cart from "../../Helper/Icons/shopping-cart-svgrepo-com.svg";
import hamburger from "../../Helper/Icons/hamburger-menu-svgrepo-com.svg";
import useWindowWidth from "../../Helper/Hooks/windowDimensions";

function NavBar() {
  const [appear, setAppear] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const { width, height } = useWindowWidth();

  useEffect(() => {
    width <= 768 ? setAppear(true) : setAppear(false);
  }, [width]);

  const handleClicked = () => {
    setIsClicked(!isClicked);
  };
  return (
    <div className={styles["nav-bar"]} a>
      <div className={styles["nav-container"]}>
        <ul
          className={
            appear && isClicked ? styles.smallScreenUl : styles.largeScreenUl
          }
        >
          <li>Home</li>
          <li>Menu</li>
          <li>Blog</li>
          <li>Shop</li>
        </ul>
        <div className={styles["middle"]}>
          <img className={styles["logo"]} src={logo} alt="logo" />
          <h1>Delicious</h1>
        </div>
        <div className={styles["right-side"]}>
          <div className={styles["hot-line"]}>
            <div className={styles["phone-icon"]}>
              {" "}
              <img src={phone} alt="phone" />
            </div>

            <div>
              <p className={styles["hot-line-text"]}>
                {" "}
                <span>Hot Line</span> <br /> +304-658-322
              </p>
            </div>
          </div>
          <div className={styles["cart-icon"]}>
            <img src={cart} alt="cart" /> {/* <span>1</span> */}
          </div>
          <img
            onClick={handleClicked}
            className={styles.menu}
            src={hamburger}
            alt="menu"
          />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
