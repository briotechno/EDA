import React, { useState } from "react";
import LoadingScreen from "./components/LoadingScreen";
import HeroSection from "./components/HeroSection";
import HeroSection2 from "./components/HeroSection2";
import { Box, CssBaseline } from "@mui/material";

const App = () => {
  const [loadingComplete, setLoadingComplete] = useState(false);

  return (
    <Box>
      <CssBaseline />
      {/* <HeroSection /> */}
      <HeroSection2 />
    </Box>
  );
};

export default App;
