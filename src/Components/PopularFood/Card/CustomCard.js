import React from "react";
import styles from "./CustomCard.module.css";
import FoodCard from "../../Cards";
import pizza from "../../../Helper/Icons/shape21.png";
import ions from "../../../Helper/Icons/shape22.png";

function CustomCard({ food }) {
  const { id, price, url, name } = food;
  console.log(price);
  return (
    <FoodCard className={styles.card}>
      <div>
        {" "}
        <img src={ions} alt="icon" />
        <FoodCard.Image src={url} alt={name} {...style.image} />
        <img src={pizza} alt="icon" />
      </div>
      <FoodCard.Price
        {...style.price}
        className={styles.title}
      >{`$ ${price}`}</FoodCard.Price>
      <FoodCard.Name {...style.name}>{name}</FoodCard.Name>
      {/*       <FoodCard.Button {...style.button}>View options</FoodCard.Button>
       */}{" "}
    </FoodCard>
  );
}
const style = {
  card: {},
  image: {
    width: "60%",
  },
  price: {
    fontSize: "1.8em",
    color: "#f43127",
  },
  name: {
    fontWeight: "bolder",
    fontSize: "1.8em",
  },
  button: {
    background: "linear-gradient(to right, #fcb302 50%, #f43127 50%)",
  },
};

export default CustomCard;
