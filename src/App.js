import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./home";
import Datenschutz from "./menu_pages/Datenschutz";
import AGB from "./menu_pages/AGB";
const App = () => {


  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Datenschutz" element={<Datenschutz />} />
      <Route path="/AGB" element={<AGB />} />
    </Routes>
  </BrowserRouter>
  );
};

export default App;
