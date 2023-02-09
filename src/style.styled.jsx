import styled from "styled-components";

const backgroundColor = "#373747";
const SecondaryColor = "#252837";
const TextWhite = "#FFFFFF";
const TextGrey = "#CDCDCD";
const TextPurple = "#A166FF";
const Flex = (flexdirection, justifycontent, alignitems) => {
  return `
    display: flex;
    flex-direction: ${flexdirection};
    justify-content: ${justifycontent};
    align-items: ${alignitems};
  `;
};

export const Body = styled.div`
  margin-top: 82px;
  height: 100vh;
  height: 100dvh;
  background-color: ${backgroundColor};
`;

export const Nav__Bar = styled.div`
  z-index: 100;
  position: fixed;
  top: 0;
  right: 0;
  padding: 20px;
  width: 100%;
  background-color: ${SecondaryColor};
  ${Flex("row", "center", "center")}

  .main__div {
    width: 70%;
    ${Flex("row", "space-between", "center")}

    .left--div {
      p {
        color: ${TextWhite};
        font-size: 1.5rem;
        font-weight: 600;
        &::first-letter {
          color: ${TextPurple};
          font-size: 1.8rem;
        }
      }
    }
    .right--div {
      p {
        color: ${TextWhite};
      }
    }
  }
`;

export const PopularBox = styled.div`
  color: white;
  padding: 4rem 0rem;
  margin: auto;
  width: 70%;
  h1 {
    margin-bottom: 1rem;
  }
  .splide__arrow {
    background: ${TextPurple};
    border: 0;
    border-radius: 50%;
    height: 3em;
    justify-content: center;
    opacity: 1;
    padding: 0;
    width: 3em;
    svg{
      fill: white;
    }
  
  }
`;
export const Box = styled.div`
  background-color: ${SecondaryColor};
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 80%;
  }

  div {
    padding: 0.5rem 0.5rem;
    ${Flex("column", "center", "center")}
    height: 20%;
    p {
      color: white;
      font-size: 0.9rem;
      text-align: center;
      font-weight: 500;
    }
  }
`;
