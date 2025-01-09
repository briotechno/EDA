import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./home";
import Datenschutz from "./menu_pages/Datenschutz";
const App = () => {


  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Datenschutz" element={<Datenschutz />} />
    </Routes>
  </BrowserRouter>
  );
};

export default App;
