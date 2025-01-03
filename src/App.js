import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import HeroSection from "./components/HeroSection";
import HeroSmall from "./components/HeroSmall";
import HeroSection2 from "./components/HeroSection2";

const App = () => {
  const [loadingComplete, setLoadingComplete] = useState(false);

  // Media query to detect screen width below 960 pixels
  const isSmallScreen = useMediaQuery({ maxWidth: 820 });

  return (
    <div>
      {isSmallScreen ? <HeroSmall /> : <HeroSection2 />}
    </div>
  );
};

export default App;
