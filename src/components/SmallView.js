import { Box, Typography } from "@mui/material";
import gsap from "gsap/all";
import React, { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import Icon from "../assets/logo.png";
import VisionImage from "../assets/vision.png";
import { useNavigate } from "react-router-dom"; // Im // Impo

// // DynamicPolygon component
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
          x="26%"
          y="31.5%"
          transform="translate(-50%, -50%)"
          width="60%"
          height="40%"
        />
      )}

      {/* Highlight the points with circles */}
      {createHighlightPoints()}
    </svg>
  );
};

const SmallView = () => {
  const [ACP, setACP] = useState({ x: 600, y: 300 });
  const [cursorPos, setCursorPos] = useState({ x: 300, y: 150 });
  const [polygonPos, setPolygonPos] = useState({ x: 150, y: 75 });
  const [selectedLanguage, setSelectedLanguage] = useState("DE");
  const [selectedWork, setSelectedWork] = useState(""); // Default selected language
  const [hoveringText, setHoveringText] = useState(false);
  const isXs = useMediaQuery({ query: "(max-width: 576px)" });
  const isSm = useMediaQuery({
    query: "(min-width: 577px) and (max-width: 768px)",
  });
  const isMd = useMediaQuery({
    query: "(min-width: 769px) and (max-width: 1024px)",
  });
  const isLg = useMediaQuery({
    query: "(min-width: 1025px) and (max-width: 1200px)",
  });
  const isXl = useMediaQuery({ query: "(min-width: 1201px)" });

  // Define x and y based on screen size
  const x = isXs ? "22%" : "32%";
  const y = isXs ? "20%" : "30%";

  const ix = isXs ? "60%" : "40%";
  const iy = isXs ? "65%" : "45%";

  const vx = isXl ? "18%" : "28%";
  const vy = isXl ? "18%" : "28%";

  const px = isXl ? "42%" : "38%";
  const py = isXl ? "20%" : "32%";
  const navigate = useNavigate(); // I
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
    const updatePositions = () => {
      gsap.to(cursorPos, {
        x: ACP.x / 2,
        y: ACP.y / 2,
        duration: 0.5,
        onUpdate: () => {
          setCursorPos({
            x: gsap.getProperty(cursorPos, "x"),
            y: gsap.getProperty(cursorPos, "y"),
          });
        },
      });

      gsap.to(polygonPos, {
        x: ACP.x / 4,
        y: ACP.y / 4,
        duration: 0.5,
        onUpdate: () => {
          setPolygonPos({
            x: gsap.getProperty(polygonPos, "x"),
            y: gsap.getProperty(polygonPos, "y"),
          });
        },
      });
    };

    updatePositions();
  }, [ACP]);
  useEffect(() => {
    // const updateMousePosition = (event) => {
    //   const heroSection = document
    //     .querySelector("body")
    //     .getBoundingClientRect();
    //   const newRelX = event.clientX - heroSection.left;
    //   const newRelY = event.clientY - heroSection.top;
    //   setRelX(newRelX);
    //   setRelY(newRelY);

    //   gsap.to(".custom-cursor", {
    //     duration: 0.1,
    //     left: `${newRelX}px`,
    //     top: `${newRelY}px`,
    //     ease: "sine.out",
    //   });
    // };
    const updateMousePosition = (event) => {
      setACP({ x: event.clientX, y: event.clientY });
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
          top: "30px",
          left: "20px",
          zIndex: 1000, // Ensure it stays above other elements
        }}
      >
        <img
          src={Icon}
          alt="Top Left Icon"
          style={{
            width: "180px", // Adjust size as needed
            height: "30px",
          }}
        />
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
          fontSize: "10px",
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
              fontWeight: selectedLanguage === lang ? "bold" : "normal",
            }}
          >
            {lang}
          </span>
        ))}
      </div>
      {/* <div
        className="language-selector2"
        style={{
          position: "absolute",
          bottom: "30px", // Position it at the bottom
          right: "20px", // Position it at the right
          display: "flex",
          gap: "30px", // Space between language options
          zIndex: 1000,
          color: "#E2CAA2",
          fontSize: "12px",
          ...(window.innerWidth < 800
            ? {
                left: "50%",
                bottom: "4%",
                fontSize: "14px",
                transform: "translateX(-50%)", // Center align it horizontally
                right: "auto", // Reset the right positioning
              }
            : {}),
        }}
      >
        {["IMPRESSUM", "AGB", "DATENSCHUTZ"].map((lang) => (
          <span
            key={lang}
            onMouseEnter={() => setHoveringText(true)} // Set hover state
            onMouseLeave={() => setHoveringText(false)} // Reset hover state
            onClick={() => {
              setSelectedWork(lang); // Update selected language
              if (lang === "DATENSCHUTZ") {
                navigate("/Datenschutz"); // Navigate to /DATENSCHUTZ
              } else if (lang === "AGB") {
                navigate("/AGB"); // Navigate to /AGB
              } else if (lang === "IMPRESSUM") {
                navigate("/Impressum"); // Navigate to /Impressum
              }
            }}
            style={{
              cursor: "pointer",
              fontWeight: selectedWork === lang ? "bold" : "300",
            }}
          >
            {lang}
          </span>
        ))}
      </div> */}

      <img
        src={VisionImage}
        alt="Vision Image"
        style={{
          position: "absolute",
          top: window.innerWidth < 500 ? "calc(48%)" : "calc(50% - 5%)", // Adjust position as needed
          left: "52%",
          transform: "translateX(-50%)",
          width: window.innerWidth < 500 ? "10%" : "8%", // Adjust size as needed
          zIndex: 500,
        }}
      />
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100vh">
        <defs xmlns="http://www.w3.org/2000/svg">
          <linearGradient
            id="top"
            x1="1033.5"
            y1="-23"
            x2="976"
            y2="413"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#073845" />
            <stop offset="1" stop-color="#040F16" />
          </linearGradient>
        </defs>
        <defs xmlns="http://www.w3.org/2000/svg">
          <linearGradient
            id="bottom"
            x1="1418"
            y1="534"
            x2="1250"
            y2="91"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#073845" />
            <stop offset="0.415" stop-color="#06242E" />
            <stop offset="1" stop-color="#040F16" />
          </linearGradient>
        </defs>
        <defs xmlns="http://www.w3.org/2000/svg">
          <linearGradient
            id="left"
            x1="100"
            y1="394"
            x2="1370"
            y2="576.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#073845" />
            <stop offset="1" stop-color="#040F16" />
          </linearGradient>
        </defs>
        <defs xmlns="http://www.w3.org/2000/svg">
          <linearGradient
            id="right"
            x1="900"
            y1="1100"
            x2="800"
            y2="300"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#073845" />
            <stop offset="0.684416" stop-color="#062934" />
            <stop offset="1" stop-color="#040F16" />
          </linearGradient>
        </defs>
        {/* <defs>
      
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
        </defs> */}
        {/* Dynamic Polygon with gradient */}

        <DynamicPolygon //left
          fill="url(#left)" // Apply gradient1
          topLeftX={0}
          topLeftY={0}
          topRightX={150}
          topRightY={0}
          bottomLeftX={0}
          bottomLeftY={window.innerHeight * 0.9}
          bottomRightX={cursorPos.x * 2}
          bottomRightY={cursorPos.y * 2}
          imageSrc={require("../assets/colortext.png")}
        />

        <DynamicPolygon //right
          fill="url(#right)" // Apply gradient2
          topLeftX={cursorPos.x * 2}
          topLeftY={cursorPos.y * 2}
          topRightX={window.innerWidth - 0}
          topRightY={150}
          bottomLeftX={window.innerWidth - 250}
          bottomLeftY={window.innerHeight * 1}
          bottomRightX={window.innerWidth - 0}
          bottomRightY={window.innerHeight * 1}
          imageSrc={require("../assets/colortext.png")}
        />
        <DynamicPolygon //top
          fill="url(#top)" // Apply gradient1
          topLeftX={window.innerWidth - 0}
          topLeftY={0}
          topRightX={window.innerWidth - 0}
          topRightY={150}
          bottomLeftX={150}
          bottomLeftY={0}
          bottomRightX={cursorPos.x * 2}
          bottomRightY={cursorPos.y * 2}
          imageSrc={require("../assets/outlinetext.png")}
        />

        <DynamicPolygon //bottom
          fill="url(#bottom)" // Apply gradient3
          topLeftX={0}
          topLeftY={window.innerHeight * 0.9}
          topRightX={cursorPos.x * 2}
          topRightY={cursorPos.y * 2}
          bottomLeftX={0}
          bottomLeftY={window.innerHeight * 1}
          bottomRightX={window.innerWidth - 250}
          bottomRightY={window.innerHeight * 1}
          imageSrc={require("../assets/outlinetext.png")}
        />

        <defs></defs>
      </svg>

      {/* Text with filled color */}

      <Box
        className="custom-cursor"
        sx={{
          ...style.customCursor,
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y + 200}px`,
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

export default SmallView;
