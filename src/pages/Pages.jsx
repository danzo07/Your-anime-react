import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Home";

function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default Pages;
