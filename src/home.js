import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import HeroSection2 from "./components/HeroSection2";
import SmallView from "./components/SmallView";
import CookieConsent from "react-cookie-consent";
const Home = () => {
  // Media query to detect screen width below 960 pixels
  const isSmallScreen = useMediaQuery({ maxWidth: 820 });

  return (
    <div>
     
      {isSmallScreen ? <SmallView/> : <HeroSection2 />}
      
    </div>
  );
};

export default Home;
