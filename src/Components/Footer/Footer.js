import React from "react";
import styles from "./Footer.module.css";
import logo from "../../Helper/Icons/logo.svg";
import arrow from "../../Helper/Icons/caret-right-svgrepo-com.svg";
import Contact from "../ContactList/Contact";
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
          <Contact width={"30px"} height={"30px"} imgWidth={"15px"} />
        </div>
        <div>
          <h3>Hot Menus</h3>
          <ul>
            {list.map((item) => (
              <li>
                <img src={arrow} alt="arrow" />
                {item.text}
              </li>
            ))}
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
      </div>
    </div>
  );
}
const list = [
  { text: "Burger Kingo" },
  { text: "Chessey Pizza" },
  { text: "Chocolate Donuts" },
  { text: "Chicken Sandwich" },
];

export default Footer;
