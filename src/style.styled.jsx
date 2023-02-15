import { Link } from "react-router-dom";
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

  }
`;
export const Favoritelink = styled(Link)`
  text-decoration: none;
  background-color: ${TextPurple};
  ${Flex("row", "center", "center")}
  gap: 5px;
  padding: .5rem 1rem;
  border-radius: 2rem;
  svg{
    color: white;
    width: 25px;
    height: 25px;
  }
  p {
    color: ${TextWhite};
  }
`;
export const Homelink = styled(Link)`
  text-decoration: none;
  p {
    color: ${TextWhite};
    font-size: 1.5rem;
    font-weight: 600;
    &::first-letter {
      color: ${TextPurple};
      font-size: 1.8rem;
    }
  }
`;

export const PopularBox = styled.div`
  color: ${TextWhite};
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
    svg {
      fill: ${TextWhite};
    }
  }
`;
export const Box = styled.div`
  background-color: ${SecondaryColor};
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 400px 1fr;
  border-radius: 2rem;

  div {
    img {
      width: 100%;
      height: 100%;
      border-top-left-radius: 2rem;
      border-top-right-radius: 2rem;
    }
  }

  div {
    ${Flex("column", "center", "center")}
    p {
      color: ${TextWhite};
      font-size: 0.9rem;
      text-align: center;
      font-weight: 500;
      padding: 1rem;
    }
  }
`;

export const AnimeInfo = styled.div`
  ${Flex("column", "center", "center")}

  .container {
    display: grid;
    grid-template-areas:
      "img info"
      "des des";
    grid-template-columns: 300px 1fr;
    margin: 4rem;
    gap: 2rem;
    width: 70%;
    .anime__image {
      grid-area: img;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .anime__details {
      grid-area: info;
      h1 {
        color: ${TextWhite};
        margin-bottom: 1rem;
      }
      p {
        color: ${TextGrey};
        span {
          color: ${TextPurple};
          font-weight: 500;
        }
      }
    }
    .synopsis {
      grid-area: des;
      p {
        color: ${TextGrey};
        span {
          color: ${TextPurple};
          font-weight: 500;
        }
      }
    }
  }
`;
