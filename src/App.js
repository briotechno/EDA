import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./home";
import AGB from "./menu_pages/AGB";
import Datenschutz from "./menu_pages/Datenschutz";
import Impressum from "./menu_pages/Impressum";
import Work from "./components/shared/Work";
import AnimatedCursor from "react-animated-cursor";
import CookieBannerComponent from "./components/shared/CookieBanner";
import WorkSmall from "./components/shared/WorkSmall";
import { useMediaQuery } from "react-responsive";
const App = () => {
  const isSmallScreen = useMediaQuery({ maxWidth: 820 });
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="work/Datenschutz" element={<Datenschutz />} />
        <Route path="work/AGB" element={<AGB />} />
        <Route path="work/Impressum" element={<Impressum />} />
      </Routes>
      <CookieBannerComponent />
      {isSmallScreen?<WorkSmall/>:<Work />}
      <AnimatedCursor
        innerSize={4}
        outerSize={30}
        innerScale={1}
        outerScale={1}
        outerAlpha={0}
        hasBlendMode={true}
        showSystemCursor={true}
        innerStyle={{
          backgroundColor: "transperant",
        }}
        outerStyle={{
          border: "2px solid #E2CAA2",
        }}
        trailingSpeed={30}
      />
    </BrowserRouter>
  );
};

export default App;
