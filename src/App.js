import React, { useState } from "react";
import LoadingScreen from "./components/LoadingScreen";
import HeroSection from "./components/HeroSection";

const App = () => {
  const [loadingComplete, setLoadingComplete] = useState(false);

  return (
    <div>
        <HeroSection/>
    </div>
  );
};

export default App;
