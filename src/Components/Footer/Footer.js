import React from "react";
import styles from "./Footer.module.css";
import logo from "../../Helper/Icons/logo.svg";
import facbook from "../../Helper/Icons/facebook-svgrepo-com.svg";
import twitter from "../../Helper/Icons/twitter-svgrepo-com.svg";
import phone from "../../Helper/Icons/phone-svgrepo-com.svg";
import arrow from "../../Helper/Icons/caret-right-svgrepo-com.svg";
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
      <div className={styles.body}>
        <div>
          <h3>Our Story</h3>
          <p>
            There are many variations of passager of lorem ipsum available, but
            the majority have is in some from.
          </p>
          <ul>
            <li>
              <img className={styles.face} src={facbook} alt="facebook icon" />
            </li>
            <li>
              <img src={twitter} className={styles.face} alt=" twitter icon" />
            </li>
            <li>
              <img src={phone} className={styles.face} alt="phone icon" />
            </li>
          </ul>
        </div>
        <div>
          <h3>Hot Menus</h3>
          <ul>
            <li>
              {" "}
              <img src={arrow} alt="arrow" />
              Burger Kingo
            </li>
            <li>
              {" "}
              <img src={arrow} alt="arrow" />
              Chessey Pizza{" "}
            </li>
            <li>
              {" "}
              <img src={arrow} alt="arrow" />
              Chocolate Donuts
            </li>
            <li>
              {" "}
              <img src={arrow} alt="arrow" />
              Chicken Sandwich
            </li>
          </ul>
        </div>
        <div>
          <h3>Contact & Reservation</h3>
          <p>48 Via Rosella, Kacchi Hots Brother Ta-107, Newyork City </p>

          <p>+88-269-730-777 </p>
          <p>hello@pizzaw.com</p>
        </div>
        <div>
          <h3>Opening Hours</h3>
          <p className={styles.openingHours}>
            Monday: 8am - 4pm <br />
            Tuesday: 9pm - 12am <br />
            Wednesday: 9am - 5pm <br />
            Sunday: <span>Closed</span>
          </p>
        </div>
        {/* <div>
          <h3>Subscribe to our mail list</h3>
           <div className={styles.inputContainer}>
            <input type="email" placeholder="Type your e-mail" />
            <button>Subscribe</button>
          </div>
        </div> */}
      </div>
      {/* <div className={styles.inputContainer}>
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
      </div> */}
    </div>
  );
}

export default Footer;
