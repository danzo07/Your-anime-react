import React, { useContext } from "react";
import { CardContext } from "../CardContext";
import { GirdLayout, FavoriteBox, Favoritelink } from "../style.styled";
import CardDetails from "./CardDetails";
import { jsPDF } from "jspdf";
import { HiOutlineDocumentDownload } from "react-icons/hi";

function Favorites({}) {
  const { fav, addFavorite, removeFavorite } = useContext(CardContext);

  const downloadAnimeTitlesAsPdf = () => {
    // Retrieve the data from local storage
    const data = JSON.parse(localStorage.getItem("favorites"));
    const animeTitles = data.map((anime) => anime.animeTitle);
    // Generate a PDF document with the anime titles
    const doc = new jsPDF();
    animeTitles.forEach((title, index) => {
      doc.text(`${index + 1}. ${title}`, 10, 10 + index * 10);
    });
    const pdfData = doc.output();

    // Create a new Blob object from the PDF data
    const blob = new Blob([pdfData], { type: "application/pdf" });
    // Create a download URL for the blob
    const url = URL.createObjectURL(blob);
    // Create a link element with the download URL and click it programmatically to trigger the download
    const link = document.createElement("a");
    link.href = url;
    link.download = "Favorite-anime-list.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <FavoriteBox>
      <div className="fav-box-1">
        <h1>Favorites</h1>
        <div className="download-fav" onClick={downloadAnimeTitlesAsPdf}>
          <HiOutlineDocumentDownload />
          <p>Download </p>
        </div>
      </div>

      <GirdLayout>
        {fav.length === 0 ? (
          <p>You haven't added any favorites yet.</p>
        ) : (
          fav.map((anime) => (
            <div key={anime.animeId}>
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
