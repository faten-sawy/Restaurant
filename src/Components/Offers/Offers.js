import React, { useState } from "react";
import styles from "./Offers.module.css";
import Src_1 from "../../Helper/Images/offer-pro_1.png";
import Src_2 from "../../Helper/Images/offer-pro_2.png";
import Src_3 from "../../Helper/Images/offer-pro_3.png";
import cart from "../../Helper/Icons/shopping-cart-svgrepo-com.svg";
import Button from "../Button/Button";
function Offers() {
  const [hover, setHover] = useState({
    first: "no-filter",
    second: "with-filter",
    third: "with-filter",
  });
  return (
    <div className={styles["offer-container"]}>
      <div className={styles["left-section"]}>
        <img src={Src_1} />
        <button
          onMouseOver={() => setHover({ ...hover, first: "with-filter" })}
          onMouseOut={() => setHover({ ...hover, first: "no-filter" })}
        >
          <img src={cart} className={styles[hover.first]} />
          order now
        </button>
      </div>
      <div className={styles["right-section"]}>
        <div>
          <img src={Src_2} />

          <button
            onMouseOver={() => setHover({ ...hover, second: "no-filter" })}
            onMouseOut={() => setHover({ ...hover, second: "with-filter" })}
          >
            <img src={cart} className={styles[hover.second]} />
            order now
          </button>
          {/*  <Button
            text="order now"
            bgColor="#fcb302"
            bgColorHover="white"
            filter={true}
            icon={cart}
          /> */}
        </div>
        <div>
          <img src={Src_3} />
          <button
            onMouseOver={() => setHover({ ...hover, third: "no-filter" })}
            onMouseOut={() => setHover({ ...hover, third: "with-filter" })}
          >
            <img src={cart} className={styles[hover.third]} />
            order now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Offers;
