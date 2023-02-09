import React from "react";
import { useEffect, useState } from "react";
import { PopularBox, Box } from "../style.styled";
import axios from "axios";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css";

function Popular() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    try {
      const res = await axios.get("https://gogoanime.consumet.stream/popular?page=1");
      setPopular(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <PopularBox>
      <h1>Trending Anime</h1>
      <Splide
        options={{
          perPage: 4,
          gap: "2rem",
          arrows: true,
          pagination: false,
          drag: "free"
          
        }}
      >
        {popular.map((anime) => {
          return (
            <SplideSlide key={anime.animeId}>
              <Box>
                <img src={anime.animeImg} alt="" />
                <div>
                  <p>{anime.animeTitle}</p>
                </div>
              </Box>
            </SplideSlide>
          );
        })}
      </Splide>
    </PopularBox>
  );
}

export default Popular;
