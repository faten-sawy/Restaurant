import React from "react";
import styles from "./Team.module.css";
import Contact from "../ContactList/Contact";

function Team({ list }) {
  return (
    <div className={styles.chefsContainer}>
      {list.map((item) => (
        <div
          style={{
            backgroundImage: `url(${item.bg})`,
          }}
          className={styles.zeft}
        >
          <div className={styles.overlay}>
            <Contact width={"40px"} height={"40px"} imgWidth={"20px"} />
          </div>
          <div className={styles.footer}>
            <p>{item.name}</p>
            <p>{item.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Team;
