import React, { useEffect } from "react";
import styles from "./CustomCard.module.css";
import FoodCard from "../../Cards";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { card } from "../../../Helper/animations";
function CustomCard({ food }) {
  const { id, price, url, name, rating } = food;
  const [ref, inView] = useInView();
  const animation = useAnimation();
  const route = useNavigate();

  useEffect(() => {
    inView ? animation.start(card.animate) : animation.start(card.initial);
  });
  const handleNavigate = () => {
    route("details");
  };

  return (
    <motion.div className={styles.container} ref={ref} animate={animation}>
      <FoodCard className={styles.card}>
        <div
          style={{
            backgroundColor: "#FAF7F2",
          }}
        >
          <FoodCard.Image src={url} alt={name} {...style.image} />
        </div>
        <div>
          <FoodCard.Price {...style.price}>{`$ ${price}`}</FoodCard.Price>
          <FoodCard.Rating rating={rating} />
        </div>
        <FoodCard.Name {...style.name}>{name}</FoodCard.Name>
        <FoodCard.Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing
        </FoodCard.Description>
        <FoodCard.Button onClick={handleNavigate} {...style.button}>
          View options
        </FoodCard.Button>
      </FoodCard>
    </motion.div>
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
