import React from "react";
import {useContext } from "react";
import { PopularBox } from "../style.styled";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css";
import { CardContext } from "../CardContext";
import CardDetails from "./CardDetails";

function Popular() {
  const { popular, addFavorite, removeFavorite } = useContext(CardContext);

  return (
    <PopularBox>
      <h1>Trending Anime</h1>
      <Splide
        options={{
          perPage: 4,
          gap: ".9rem",
          arrows: true,
          pagination: false,
          drag: "free",
        }}
      >
        {popular.map((anime) => {
          return (
            <SplideSlide key={anime.animeId}>
              <CardDetails
                anime={anime}
                addFavorite={addFavorite}
                removeFavorite={removeFavorite}
              />
            </SplideSlide>
          );
        })}
      </Splide>
    </PopularBox>
  );
}

export default Popular;
