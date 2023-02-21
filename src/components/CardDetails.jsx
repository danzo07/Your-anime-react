import { useContext } from "react";
import { FaHeart } from "react-icons/fa";
import { Box, Cardlink } from "../style.styled";
import { CardContext } from "../CardContext";

function CardDetails({ anime, addFavorite, removeFavorite }) {
  const { fav } = useContext(CardContext);
  const isFavorite = fav.some((fav) => fav.animeId === anime.animeId);

  const handleFavoriteClick = () => {
    if (isFavorite) {
      removeFavorite(anime);
    } else {
      addFavorite(anime);
    }
  };

  return (
    <Box>
      <div>
        <FaHeart
          color={isFavorite ? "#E1306C" : "white"}
          onClick={handleFavoriteClick}
        />
        <img src={anime.animeImg} alt={anime.animeTitle} />
      </div>
      <Cardlink
        to={"/anime-details/" + anime.animeId}
        style={{ textDecoration: "none" }}
      >
        <p>{anime.animeTitle}</p>
      </Cardlink>
    </Box>
  );
}
export default CardDetails;
