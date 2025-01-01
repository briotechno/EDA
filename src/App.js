import React, { useState } from "react";
import LoadingScreen from "./components/LoadingScreen";
import HeroSection from "./components/HeroSection";
import HeroSection2 from "./components/HeroSection2";

const App = () => {
  const [loadingComplete, setLoadingComplete] = useState(false);

  return (
    <div>
      <HeroSection />
      {/* <HeroSection2 /> */}
    </div>
  );
};

export default App;
