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
  text-align: left;
  padding-left: 2rem;
`;
export const FoodPrice = styled.p`
  color: ${({ color }) => color || null};
  font-size: ${({ fontSize }) => fontSize || "1em"};
  margin-right: 0.5rem;
`;
export const RatingValue = styled.div`
  padding-top: 0.5rem ${"" /* ${(props) => props.paddingTop || "normal"} */};
  padding-bottom: ${(props) => props.paddingBottom || "normal"};
  width: ${(props) => props.width || null};
  margin: ${(props) => props.margin || null};
  height: 30px;
  padding-left: ${(props) => props.paddingLeft || null}
    ${"" /*   background-color: ${(props) => props.backgroundColor}; */};
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
  width: 150px;
  height: 35px;
  border: none;
  transition: all 0.5s ease-out;
  font-size: 1em;
  font-weight: 900;
  border-radius: 35px;
  margin-top: 1rem;
  letter-spacing: 1px;
  margin-left: 1.8rem;

  &:hover {
    background-position: left bottom;
    color: white;
  }
  &:hover ${ButtonIcon} {
    animation: ${move} 1s forwards;
  }
`;
export const FoodDescription = styled.p`
  margin-bottom: 0;
  padding-top: ${(props) => props.paddingTop || null};
  font-size: 1em;
  text-align: left;
  padding-left: 2rem;
  color: #8d8d8f;
  letter-spacing: 1px
    ${
      "" /* display: -webkit-box;
  -webkit-line-clamp: ${(props) => props.linesNumber || 2};
  -webkit-box-orient: vertical;
  overflow: hidden; */
    };
`;
