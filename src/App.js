import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./home";
import AGB from "./menu_pages/AGB";
import Datenschutz from "./menu_pages/Datenschutz";
import Impressum from "./menu_pages/Impressum";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Datenschutz" element={<Datenschutz />} />
        <Route path="/AGB" element={<AGB />} />
        <Route path="/Impressum" element={<Impressum />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
