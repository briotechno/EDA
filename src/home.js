import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import HeroSection2 from "./components/HeroSection2";
import HeroSmall from "./components/HeroSmall";
import CookieConsent from "react-cookie-consent";
const Home = () => {
  // Media query to detect screen width below 960 pixels
  const isSmallScreen = useMediaQuery({ maxWidth: 820 });

  return (
    <div>
      {isSmallScreen ? <HeroSmall /> : <HeroSection2 />}
      <CookieConsent
        location="bottom"
        buttonText="Accept"
        cookieName="EDA "
        style={{ background: "#040F16", zIndex: 1111 }}
        buttonStyle={{ background: "#E2CAA2", fontSize: "16px" }}
        expires={150}
      >
        This website uses cookies to enhance the user experience.{" "}
      </CookieConsent>
    </div>
  );
};

export default Home;
