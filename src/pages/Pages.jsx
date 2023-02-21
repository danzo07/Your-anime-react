import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Favorites from "../components/Favorites";
import AnimeDetails from "./AnimeDetails";
import Home from "./Home";

function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/favorites-anime/" element={<Favorites />} />
      <Route path="/favorites-anime/:id" element={<Favorites />} />
      <Route path="/anime-details/" element={<AnimeDetails />} />
      <Route path="/anime-details/:id" element={<AnimeDetails />} />
    </Routes>
  );
}

export default Pages;
