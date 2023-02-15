import React from 'react'
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { AnimeInfo } from "../style.styled";

function AnimeDetails() {
  const [animecardinfo, setAnimecardinfo] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    getAnimdetailes();
  }, [id]);

  const getAnimdetailes = async () => {
    try {
      const res = await axios.get(
        `https://gogoanime.consumet.stream/anime-details/${id}`
      );
      setAnimecardinfo(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <AnimeInfo>
        <div className="container">
          <div className="anime__image">
            <img src={animecardinfo.animeImg} alt="anime-image" />
          </div>
          <div className="anime__details">
            <h1>{animecardinfo.animeTitle}</h1>
            <p>
              <span>Type : </span>
              {animecardinfo.type}
            </p>
            <p>
              <span>Release date : </span>
              {animecardinfo.releasedDate}
            </p>
            <p>
              <span>Status : </span>
              {animecardinfo.status}
            </p>
            <p>
              <span>Genres : </span>
              {`${animecardinfo.genres}`}
            </p>
            <p>
              <span>Episodes Avaliable : </span>
              {animecardinfo.episodesAvaliable}
            </p>
          </div>
          <div className="synopsis">
            <p>
              <span>Synopsis : </span>
              {animecardinfo.synopsis}
            </p>
          </div>
        </div>
      </AnimeInfo>
    </>
  );
}

export default AnimeDetails