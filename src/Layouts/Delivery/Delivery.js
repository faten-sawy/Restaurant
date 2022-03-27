import React from "react";
import styless from "./Delivery.module.css";
import phone from "../../Helper/Icons/phone-svgrepo-com.svg";
import bike from "../../Helper/Images/bike.png";
import smoke from "../../Helper/Images/smoke.png";

function Delivery() {
  return (
    <div className={styless.container}>
      <div>
        <div className={styless.images}>
          <img src={smoke} alt="smoke" />
          <img src={bike} alt="bike" />
        </div>
        <div className={styless.middleSection}>
          <h1>Get Free Delivery!</h1>
          <p>
            As well known and we are very busy all days beforeso we can
            guarantee your seat.
          </p>
        </div>
        <button className={styless.call}>
          <span>
            <img src={phone} alt="phone icon" />
          </span>
          Call: +1234567899
        </button>
      </div>
    </div>
  );
}

export default Delivery;
