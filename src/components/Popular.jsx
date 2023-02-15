import React from "react";
import { useEffect, useContext } from "react";
import { PopularBox, Box } from "../style.styled";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css";
import { CardContext } from "../CardContext";
import { Link } from "react-router-dom";

function Popular() {
  const { popular, getPopular } = useContext(CardContext);

  useEffect(() => {
    getPopular();
  }, []);

  return (
    <PopularBox>
      <h1>Trending Anime</h1>
      <Splide
        options={{
          perPage: 4,
          gap: ".7rem",
          arrows: true,
          pagination: false,
          drag: "free",
        }}
      >
        {popular.map((anime) => {
          return (
            <SplideSlide key={anime.animeId}>
              <Link
                to={"/anime-details/" + anime.animeId}
                style={{ textDecoration: "none" }}
              >
                <Box>
                  <div>
                    <img src={anime.animeImg} alt="" />
                  </div>
                  <div>
                    <p>{anime.animeTitle}</p>
                  </div>
                </Box>
              </Link>
            </SplideSlide>
          );
        })}
      </Splide>
    </PopularBox>
  );
}

export default Popular;
