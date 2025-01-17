import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./home";
import AGB from "./menu_pages/AGB";
import Datenschutz from "./menu_pages/Datenschutz";
import Impressum from "./menu_pages/Impressum";
import Work from "./components/shared/Work";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="work/Datenschutz" element={<Datenschutz />} />
        <Route path="work/AGB" element={<AGB />} />
        <Route path="work/Impressum" element={<Impressum />} />
      </Routes>
      <Work />
    </BrowserRouter>
  );
};

export default App;
