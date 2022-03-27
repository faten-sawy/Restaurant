import React from "react";
import styles from "./Chefs.module.css";
import chef1 from "../../Helper/Images/team04-400x400.jpg";
import chef2 from "../../Helper/Images/team02-370x435.jpg";
import chef3 from "../../Helper/Images/team03-370x435.jpg";
import Team from "../../Components/Team/Team";

function Chefs() {
  return (
    <>
      <h1 className={styles.header}>Our Special Chefs</h1>
      <Team list={list} />
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
