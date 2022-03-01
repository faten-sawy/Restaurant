import React, { useState } from "react";
import styles from "./Chefs.module.css";
import chef1 from "../../Helper/Images/team04-400x400.jpg";
import chef2 from "../../Helper/Images/team02-370x435.jpg";
import chef3 from "../../Helper/Images/team03-370x435.jpg";

import facebook from "../../Helper/Icons/facebook-svgrepo-com.svg";
import twitter from "../../Helper/Icons/twitter-svgrepo-com.svg";
import linkedin from "../../Helper/Icons/linkedin-svgrepo-com.svg";
import pinterest from "../../Helper/Icons/pinterest-svgrepo-com.svg";

function Chefs() {
  return (
    <>
      <h1 className={styles.header}>Our Special Chefs</h1>
      <div className={styles.chefsContainer}>
        {list.map((item) => (
          <div
            style={{
              backgroundImage: `url(${item.bg})`,
            }}
            className={styles.zeft}
          >
            {/* className={isOverlay ? styles.overlay : styles.withNoOverlay} */}
            <div className={styles.overlay}>
              <ul className={styles.lis}>
                <li>
                  <img src={facebook} alt="icon" />
                </li>
                <li>
                  <img src={twitter} alt="icon" />
                </li>
                <li>
                  <img src={linkedin} alt="icon" />
                </li>
                <li>
                  <img src={pinterest} alt="icon" />
                </li>
              </ul>
            </div>
            <div className={styles.footer}>
              <p>{item.name}</p>
              <p>{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
const list = [
  {
    bg: chef1,
    name: "Dave Buskshemy",
    title: "Taste Bud",
  },
  {
    bg: chef2,
    name: "Mike Dickey",
    title: "Meals Specialist",
  },
  {
    bg: chef3,
    name: "James Gandolfini",
    title: "Buffet Manager",
  },
];

export default Chefs;
