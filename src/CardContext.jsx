import React, { createContext, useState } from "react";
import axios from "axios"

const CardContext = createContext();

const CardContextProvider = ({ children }) => {
  const [popular, setPopular] = useState([]);


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

  return (
    <CardContext.Provider value={{ popular, getPopular }}>
      {children}
    </CardContext.Provider>
  );
};

export { CardContext, CardContextProvider };

