import React from "react";
import styles from "./Footer.module.css";
import logo from "../../Helper/Icons/logo.svg";
import facbook from "../../Helper/Icons/facebook-svgrepo-com.svg";
import twitter from "../../Helper/Icons/twitter-svgrepo-com.svg";
import phone from "../../Helper/Icons/phone-svgrepo-com.svg";
function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.middle}>
        <img className={styles.logo} src={logo} alt="logo" />
        <h1>Delicious</h1>
      </div>
      <ul className={styles.list}>
        <li>Home</li>
        <li>Menu</li>
        <li>Blog</li>
        <li>Contact</li>
      </ul>
      <div className={styles.inputContainer}>
        <input type="email" placeholder="Type your e-mail" />
        <button>Subscribe</button>
      </div>
      <div className={styles.contact}>
        <ul>
          <li>
            <img className={styles.face} src={facbook} />
          </li>
          <li>
            <img src={twitter} className={styles.face} />
          </li>
          <li>
            <img src={phone} className={styles.face} />
          </li>
        </ul>
        <p>© 2022 panpie. All Rights Reserved by RadiusTheme</p>
      </div>
    </div>
  );
}

export default Footer;
