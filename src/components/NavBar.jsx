import React from 'react'
import { Nav__Bar, Favoritelink, Homelink } from "../style.styled";
import { BsBookmarkHeart } from "react-icons/bs";



function NavBar() {
  return (
    <Nav__Bar>
      <div className="main__div">
          <Homelink to={"/"}>
            <p>Your anime</p>
          </Homelink>
          <Favoritelink to={"/favorites-anime"}>
            <BsBookmarkHeart></BsBookmarkHeart>
            <p>Favorites</p>
          </Favoritelink>
      </div>
    </Nav__Bar>
  );
}

export default NavBar