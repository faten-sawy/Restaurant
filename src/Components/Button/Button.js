import React from "react";
import styled, { keyframes } from "styled-components";

function Button({ pro }) {
  const { text, icon } = pro.data;
  console.log(pro);
  return (
    <ButtonComponent {...pro.style}>
      <Icon src={icon} />
      {text}
    </ButtonComponent>
  );
}
export const move = keyframes`
from{
  margin-right:1vw;
}
to{
  margin-right:0.5vw
}`;
const Icon = styled.img`
  margin-right: 0.4rem;
  filter: brightness(0) invert(1);
`;
const ButtonComponent = styled.button`
  background: ${({ background }) => background || null};
  background-size: 200% 100%;
  background-position: right bottom;
  color: ${({ color }) => color || "white"};
  width: 170px;
  height: 45px;
  border: none;
  transition: all 0.5s ease-out;
  font-size: 1em;
  font-weight: 900;
  border-radius: 35px;
  margin-top: 1rem;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  margin-left: ${({ marginLeft }) => marginLeft};
  position: relative;
  top: ${({ top }) => top};
  transform: ${({ transform }) => transform};
  left: ${({ left }) => left};

  &:hover {
    background-position: left bottom;
    color: white;
    ${Icon} {
      animation: ${move} 1s forwards;
    }
  }
`;

export default Button;
