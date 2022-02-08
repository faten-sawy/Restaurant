import React from "react";
import styles from "./NavBar.module.css";
import logo from "../../Helper/Icons/logo.svg";
import phone from "../../Helper/Icons/phone-svgrepo-com.svg";
import cart from "../../Helper/Icons/shopping-cart-svgrepo-com.svg";

function NavBar() {
  return (
    <div className={styles["nav-container"]}>
      <ul>
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
          <img src={cart} alt="cart" /> <span>1</span>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
