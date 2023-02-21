import { Link } from "react-router-dom";
import styled from "styled-components";

const backgroundColor = "#0E0E0E";
const SecondaryColor = "#1C1C1C";
const TextWhite = "#FFFFFF";
const TextGrey = "#a9a9a9";
const TextPurple = "#824ED5";

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
    width: 1400px;
    ${Flex("row", "space-between", "center")}
  }
`;
export const Favoritelink = styled(Link)`
  text-decoration: none;
  background-color: ${TextPurple};
  ${Flex("row", "center", "center")}
  gap: 5px;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  transition: 300ms all ease-in;
  svg {
    color: white;
    width: 25px;
    height: 25px;
  }
  p {
    color: ${TextWhite};
    font-weight: 500;
  }
  &:hover {
    background-color: ${TextWhite};
    svg {
      color: ${TextPurple};
    }
    p {
      color: ${TextPurple};
    }
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
  margin: 0 auto;
  width: 1400px;
  h1 {
    margin-bottom: 1rem;
  }
  .splide__slide {
    position: relative;
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
  grid-template-rows: 400px 100px;
  border-radius: 2rem;

  div {
    position: relative;
    overflow: hidden;
    svg {
      position: absolute;
      top: 1rem;
      right: 1rem;
      width: 50px;
      height: 50px;
      color: ${TextWhite};
      cursor: pointer;
      border-radius: 1rem;
      background-color: ${TextPurple};
      padding: 0.5rem;
      z-index: 50;
      box-shadow: 0px 0px 50px 0px rgba(0, 0, 0, 0.4);
      transition: 300ms all ease-in;
    }
    img {
      width: 100%;
      height: 100%;
      border-top-left-radius: 2rem;
      border-top-right-radius: 2rem;
    }
  }
`;
export const Cardlink = styled(Link)`
  ${Flex("column", "center", "center")}
  p {
    color: ${TextWhite};
    font-size: 1rem;
    text-align: center;
    font-weight: 500;
    padding: 1rem;
    transition: 300ms all ease-in;
  }
  &:hover {
    p {
      color: ${TextPurple};
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
    margin: 4rem 0rem;
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

export const FavoriteBox = styled.div`
  width: 1400px;
  margin: 0rem auto;
  padding: 4rem 0;
  .fav-box-1 {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;

    .download-fav {
      cursor: pointer;
      background-color: ${TextPurple};
      ${Flex("row", "center", "center")}
      gap: 5px;
      padding: 0.5rem 1rem;
      border-radius: 2rem;
      transition: 300ms all ease-in;
      svg {
        color: white;
        width: 25px;
        height: 25px;
      }
      p {
        color: ${TextWhite};
        font-weight: 500;
      }
      &:hover {
        background-color: ${TextWhite};
        svg {
          color: ${TextPurple};
        }
        p {
          color: ${TextPurple};
        }
      }
    }
  }
`;

export const GirdLayout = styled.div`

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 20px;
`;
