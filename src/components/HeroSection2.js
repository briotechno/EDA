import { Box, Typography } from "@mui/material";
import gsap from "gsap/all";
import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import Icon from "../assets/icon.png";
import VisionImage from "../assets/vision.png"; // Impo

// DynamicPolygon component
const DynamicPolygon = ({
  topLeftX,
  topLeftY,
  topRightX,
  topRightY,
  bottomLeftX,
  bottomLeftY,
  bottomRightX,
  bottomRightY,
  fill,
  imageSrc, // Add image source as a prop
}) => {
  // Create the points string for the polygon
  const createPolygonPoints = () => {
    return `${topLeftX},${topLeftY} ${topRightX},${topRightY} ${bottomRightX},${bottomRightY} ${bottomLeftX},${bottomLeftY}`;
  };

  // Create the highlight circles for the points
  const createHighlightPoints = () => {
    const points = [
      { x: topLeftX, y: topLeftY },
      { x: topRightX, y: topRightY },
      { x: bottomLeftX, y: bottomLeftY },
      { x: bottomRightX, y: bottomRightY },
    ];

    return points.map((point, index) => (
      <circle
        key={index}
        cx={point.x}
        cy={point.y}
        r="3"
        fill="transparent" // color of the highlighted points
      />
    ));
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100vh"
      style={{ position: "absolute", top: 0, left: 0 }}
    >
      {/* Draw the polygon */}
      <polygon
        points={createPolygonPoints()}
        fill={fill} // Gradient reference
        stroke="#0A5D8F"
        strokeWidth="1"
      />
      {imageSrc && (
        <image
          href={imageSrc}
          x="33%"
          y="43%"
          transform="translate(-50%, -50%)"
          width="40%"
          height="20%"
        />
      )}

      {/* Highlight the points with circles */}
      {createHighlightPoints()}
    </svg>
  );
};

const HeroSection2 = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("DE");
  const [selectedWork, setSelectedWork] = useState(""); // Default selected language
  const [hoveringText, setHoveringText] = useState(false);
  //todo--------------mediaQuery for mobile------------------------
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });
  //todo--------------mediaQuery for mobile------------------------
  // --------------------------------------------------------------
  //? -----------------track-mouse-position------------------------
  const [relX, setRelX] = useState(isMobile ? 250 : 600);
  const [relY, setRelY] = useState(300);
  // --------------------------------------------------------------
  useEffect(() => {
    const updateMousePosition = (event) => {
      const heroSection = document
        .querySelector("body")
        .getBoundingClientRect();
      const newRelX = event.clientX - heroSection.left;
      const newRelY = event.clientY - heroSection.top;
      setRelX(newRelX);
      setRelY(newRelY);

      gsap.to(".custom-cursor", {
        duration: 0.1,
        left: `${newRelX + 20}px`,
        top: `${newRelY + 20}px`,
        ease: "sine.out",
      });
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  //? -----------------track-mouse-position------------------------

  return (
    <Box
      position={"relative"}
      width={"100%"}
      height={"100vh"}
      display="flex"
      bgcolor={"#073845"}
      justifyContent="center"
      alignItems="center"
      sx={{ cursor: "none", overflow: "hidden" }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          position: "absolute",
          top: "20px",
          left: "20px",
          zIndex: 1000, // Ensure it stays above other elements
        }}
      >
        <img
          src={Icon}
          alt="Top Left Icon"
          style={{
            width: "56px", // Adjust size as needed
            height: "47px",
          }}
        />
        <span
          style={{
            marginLeft: "8px", // Space between icon and text

            color: "#E2CAA2",
            fontSize: "1.2rem",
          }}
        >
          E - D - A
        </span>
      </div>
      <div
        className="language-selector"
        style={{
          position: "absolute",
          top: "20px",
          right: "20px",
          display: "flex",
          gap: "20px",
          zIndex: 1000,
          color: "#E2CAA2",
          fontSize: "16px",
        }}
      >
        {["DE", "EN", "AR"].map((lang) => (
          <span
            key={lang}
            onMouseEnter={() => setHoveringText(true)}
            onMouseLeave={() => setHoveringText(false)}
            onClick={() => setSelectedLanguage(lang)}
            style={{
              cursor: "pointer",
              fontWeight: selectedLanguage === lang ? "bold" : "300",
            }}
          >
            {lang}
          </span>
        ))}
      </div>
      <div
        className="language-selector2"
        style={{
          position: "absolute",
          bottom: "30px", // Position it at the bottom
          right: "20px", // Position it at the right
          display: "flex",
          gap: "30px", // Space between language options
          zIndex: 1000,
          color: "#E2CAA2",
          fontSize: "16px",
          fontWeight: 300,
        }}
      >
        {["IMPRESSUM", "AGB", "DATENSCHUTZ"].map((lang) => (
          <span
            key={lang}
            onMouseEnter={() => setHoveringText(true)} // Set hover state
            onMouseLeave={() => setHoveringText(false)} // Reset hover state
            onClick={() => setSelectedWork(lang)} // Update selected language
            style={{
              cursor: "pointer",
              fontWeight: selectedWork === lang ? "bold" : "300",
            }}
          >
            {lang}
          </span>
        ))}
      </div>
      <div
        className="bottom-text"
        style={{
          position: "absolute",
          bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
          color: "#E2CAA2",
          fontSize: "12px",
          fontWeight: "900",
          lineHeight: "24px",
          letterSpacing: "0.06em",
          textUnderlinePosition: "from-font",
          textDecorationSkipInk: "none",
          zIndex: 1000,
        }}
      >
        <div>HOLD THE CLICK</div>
        <div
          style={{
            fontWeight: "900",
            textTransform: "uppercase",
            fontSize: "10px",
          }}
        >
          TO START
        </div>
      </div>
      <img
        src={VisionImage}
        alt="Vision Image"
        style={{
          position: "absolute",
          top: "calc(40% - 50px)", // Adjust position as needed
          left: "52%",
          transform: "translateX(-50%)",
          width: "15%", // Adjust size as needed
          zIndex: 500,
        }}
      />
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100vh">
        <defs>
          {/* Gradient Definitions */}
          <linearGradient id="gradient1" x1="100%" y1="100%" x2="0%" y2="0%">
            <stop offset="10%" stopColor="#040F16" />
            <stop offset="100%" stopColor="#073845" />
          </linearGradient>

          <linearGradient id="gradient2" x1="100%" y1="100%" x2="20%" y2="0%">
            <stop offset="20%" stopColor="#040F16" />
            <stop offset="60%" stopColor="#06242E" />
            <stop offset="100%" stopColor="#073845" />
          </linearGradient>

          <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="20%" stopColor="#040F16" />
            <stop offset="60%" stopColor="#06242E" />
            <stop offset="100%" stopColor="#073845" />
          </linearGradient>
        </defs>
        {/* Dynamic Polygon with gradient */}
        <DynamicPolygon //left
          fill="url(#gradient1)" // Apply gradient1
          topLeftX={0}
          topLeftY={0}
          topRightX={150}
          topRightY={0}
          bottomLeftX={0}
          bottomLeftY={window.innerHeight * 0.9}
          bottomRightX={relX}
          bottomRightY={relY}
          imageSrc={require("../assets/colortext.png")}
        />

        <DynamicPolygon
          fill="url(#gradient2)" // Apply gradient2
          topLeftX={relX}
          topLeftY={relY}
          topRightX={window.innerWidth - 0}
          topRightY={150}
          bottomLeftX={window.innerWidth - 250}
          bottomLeftY={window.innerHeight * 1}
          bottomRightX={window.innerWidth - 0}
          bottomRightY={window.innerHeight * 1}
          imageSrc={require("../assets/colortext.png")}
        />

        <DynamicPolygon
          fill="url(#gradient3)" // Apply gradient3
          topLeftX={0}
          topLeftY={window.innerHeight * 0.9}
          topRightX={relX}
          topRightY={relY}
          bottomLeftX={0}
          bottomLeftY={window.innerHeight * 1}
          bottomRightX={window.innerWidth - 250}
          bottomRightY={window.innerHeight * 1}
          imageSrc={require("../assets/outlinetext.png")}
        />

        <DynamicPolygon
          fill="url(#gradient1)" // Apply gradient1
          topLeftX={window.innerWidth - 0}
          topLeftY={0}
          topRightX={window.innerWidth - 0}
          topRightY={150}
          bottomLeftX={150}
          bottomLeftY={0}
          bottomRightX={relX}
          bottomRightY={relY}
          imageSrc={require("../assets/outlinetext.png")}
        />
        <defs></defs>
      </svg>

      {/* Text with filled color */}

      <Box
        className="custom-cursor"
        sx={{
          ...style.customCursor,
          left: `${relX}px`,
          top: `${relY}px`,
        }}
      />
    </Box>
  );
};

const style = {
  textFilled: {
    fontFamily: "lato",
    fontSize: "200px",
    position: "absolute",
    lineHeight: "240px",
    color: "#E2CAA2",
  },
  textOutlined: {
    fontFamily: "lato",
    fontSize: "200px",
    lineHeight: "240px",
    position: "absolute",
    color: "transparent",
    WebkitTextStroke: "2px #E2CAA2",
    textStroke: "2px #E2CAA2",
  },
  customCursor: {
    position: "absolute",
    width: "20px",
    height: "20px",
    borderRadius: "50%",
    border: "1px solid #E2CAA2",
    pointerEvents: "none",
    zIndex: 9999,
  },
};

export default HeroSection2;
