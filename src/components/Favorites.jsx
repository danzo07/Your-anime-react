import React, { useContext } from "react";
import { CardContext } from "../CardContext";
import { GirdLayout, FavoriteBox } from "../style.styled";
import CardDetails from "./CardDetails";



function Favorites({}) {
  const { fav, addFavorite, removeFavorite } = useContext(CardContext);
  return (
    <FavoriteBox>
      <h1>Favorites</h1>
      <GirdLayout>
          {fav.length === 0 ? (
            <p>You haven't added any favorites yet.</p>
          ) : (
            fav.map((anime) => (
              <div   key={anime.animeId}>
                <CardDetails
                  anime={anime}
                  addFavorite={addFavorite}
                  removeFavorite={removeFavorite}
                />
              </div>
            ))
          )}
      </GirdLayout>
    </FavoriteBox>
  );
}

export default Favorites;
