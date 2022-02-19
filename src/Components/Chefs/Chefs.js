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
  const [isOverlay, setIsOverlay] = useState(false);

  const handleOverlay = () => {
    setIsOverlay(true);
  };
  const handleNoOverlay = () => {
    setIsOverlay(false);
  };
  return (
    <div className={styles.chefsContainer}>
      {list.map((item) => (
        <div
          style={{
            backgroundImage: `url(${item.bg})`,
            width: "20vw",
            height: "40vh",
          }}
          onMouseOver={handleOverlay}
          onMouseOut={handleNoOverlay}
          className={styles.zeft}
        >
          <div className={isOverlay ? styles.overlay : styles.withNoOverlay}>
            <ul>
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
          <div></div>
        </div>
      ))}
    </div>
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
