import styled, { keyframes } from "styled-components";

export const move = keyframes`
from{
  margin-right:1vw;
}
to{
  margin-right:0.5vw
}`;

export const Container = styled.div`
  ${"" /* background-color: red; */}
`;
export const FoodImage = styled.img`
  width: ${({ width }) => width || "4vw"};
  position: relative;
  &:before {
    content: "";
    background-image: url("../../../Helper//Icons//shape21.png")
    position: absolute;
    width:100vw;
    height:100vh;
    ${
      "" /* top: 0;
    right: 5vw;
    height: 12vh; */
    }
    z-index: 1;
  }
`;
export const FoodTitle = styled.h4`
  font-weight: ${({ fontWeight }) => fontWeight};
  font-size: ${({ fontSize }) => fontSize};
  ${
    ""
    /*   font-family: "Caveat", cursive;
     */
  }
`;
export const FoodPrice = styled.p`
  color: ${({ color }) => color || null};
  font-size: ${({ fontSize }) => fontSize || "1em"};
`;
export const ButtonIcon = styled.img`
  filter: brightness(0) invert(1);
  margin-right: 1vw;
`;
export const FoodButton = styled.button`
  background: ${({ background }) => background || null};
  ${"" /*  background: linear-gradient(to right,,#fcb302 50%, #f43127 50%); */}
  background-size: 200% 100%;
  background-position: right bottom;
  color: white;
  width: 170px;
  height: 45px;
  border: none;
  transition: all 0.5s ease-out;
  font-size: 1em;
  font-weight: 900;
  border-radius: 35px;
  margin-top: 1rem;
  letter-spacing: 0.1rem;

  &:hover {
    background-position: left bottom;
    color: white;
  }
  &:hover ${ButtonIcon} {
    animation: ${move} 1s forwards;
  }
`;
