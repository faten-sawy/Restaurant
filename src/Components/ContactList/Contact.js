import React from "react";
import styles from "./Contact.module.css";
import facebook from "../../Helper/Icons/facebook-svgrepo-com.svg";
import twitter from "../../Helper/Icons/twitter-svgrepo-com.svg";
import linkedin from "../../Helper/Icons/linkedin-svgrepo-com.svg";
import pinterest from "../../Helper/Icons/pinterest-svgrepo-com.svg";

function Contact({ width, height, imgWidth }) {
  return (
    <ul className={styles.contactList}>
      {list.map((itemSrc) => (
        <li style={{ width, height }}>
          <img src={itemSrc} alt="icon" style={{ width: imgWidth }} />
        </li>
      ))}
    </ul>
  );
}
const list = [facebook, twitter, linkedin, pinterest];

export default Contact;
