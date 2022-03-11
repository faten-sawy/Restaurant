import React from "react";
import styles from "./CustomCard.module.css";
import FoodCard from "../../Cards";
import pizza from "../../../Helper/Icons/shape21.png";
import ions from "../../../Helper/Icons/shape22.png";

function CustomCard({ food }) {
  const { id, price, url, name, rating } = food;
  console.log(rating);
  return (
    <FoodCard className={styles.card}>
      <div style={{ backgroundColor: "#FAF7F2" }}>
        {/* <img src={ions} alt="icon" /> */}
        <FoodCard.Image src={url} alt={name} {...style.image} />
        {/* <img src={pizza} alt="icon" /> */}
      </div>
      <div>
        <FoodCard.Price
          {...style.price}
          className={styles.title}
        >{`$ ${price}`}</FoodCard.Price>
        <FoodCard.Rating rating={rating} />
      </div>
      <FoodCard.Name {...style.name}>{name}</FoodCard.Name>
      <FoodCard.Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing
      </FoodCard.Description>
      <FoodCard.Button {...style.button}>View options</FoodCard.Button>
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
    fontSize: "1.5em",
  },
  button: {
    background: "linear-gradient(to right,#fcb302 50%, #f43127  50%)",
  },
};

export default CustomCard;
