import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

const CardContext = createContext();


const CardContextProvider = ({ children }) => {
  const [popular, setPopular] = useState([]);
    const [fav, setFavorites] = useState(() => {
      // retrieve favorites from local storage
      const storedFavorites = localStorage.getItem("favorites");
      return storedFavorites ? JSON.parse(storedFavorites) : [];
    });

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    try {
      const res = await axios.get(
        "https://gogoanime.consumet.stream/popular?page=1"
      );
      setPopular(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  const addFavorite = (anime) => {
    setFavorites([...fav, anime]);
    localStorage.setItem("favorites", JSON.stringify([...fav, anime]));
  };

  const removeFavorite = (anime) => {
    const updatedFavorites = fav.filter((favAnime) => {
      return favAnime.animeId !== anime.animeId;
    });
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <CardContext.Provider
      value={{ popular, getPopular, fav, addFavorite, removeFavorite }}
    >
      {children}
    </CardContext.Provider>
  );
};

export   { CardContext, CardContextProvider };




