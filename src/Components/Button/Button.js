import React, { useState } from "react";
import styled from "styled-components";
function Button({
  pro /* , isActive, text, bgColor, bgColorHover, icon, filter */,
}) {
  const { text, icon, filter } = pro;
  /*   const [isActive, setIsActive] = useState(true);
   */ const test = () => {
    /*     document.getElementById("ve").style.backgroundPosition = "left bottom";
     */
    /*     setIsActive(true);
     */
  };
  const testen = () => {
    /*     document.getElementById("ve").style.backgroundPosition = "right bottom";
     */
    /* setIsActive(false); */
  };
  console.log(filter);
  return (
    <ButtonComponent
      onMouseOver={test}
      onMouseOut={testen}
      id="ve"
      isActive
      filter={filter}
    >
      <Icon src={icon} />
      {text}
    </ButtonComponent>
  );
}
const Icon = styled.img`
  ${"" /*  filter: brightness(0) invert(1); */}
  filter: ${(props) => props.filter || null};
  margin-right: 0.4rem;
`;
const ButtonComponent = styled.button`
  width: 200px;
  height: 50px;
  border: none;
  transition: all 0.5s ease-out;
  font-size: 1em;
  text-transform: uppercase;
  font-weight: 900;
  border-radius: 35px;
  margin-top: 1rem;
  ${
    "" /*  background-position:${(props) =>
    props.isActive ? "right bottom" : "left bottom"} */
  }
  ${
    "" /* ${(props) => {
    if (props.isActive) {
      return background-position:left bottom;
    } else {
      return `background-position:right bottom`;
    }
  }} */
  }
  &:hover {
    color: black;

    ${Icon} {
      filter: ${(props) => props.filter === true && "none"};
    }
  }
`;

export default Button;
