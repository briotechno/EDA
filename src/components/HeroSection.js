import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import Icon from "../assets/logo.png";
import VisionImage from "../assets/vision.png"; // Impo

const HeroSection = () => {
  const [relX, setRelX] = useState(600); // Initial X position
  const [relY, setRelY] = useState(300);
  const [fonttSize, setFontSize] = useState("12px");
  const [selectedLanguage, setSelectedLanguage] = useState("EN");
  const [selectedWork, setSelectedWork] = useState("AGB"); // Default selected language
  const [hoveringText, setHoveringText] = useState(false);
  const [screenDimensions, setScreenDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const imageWidth = screenDimensions.width * 0.35; // Convert "40%" to pixel value
  const imageHeight = screenDimensions.height * 0.31;

  const centerX = (screenDimensions.width - imageWidth) / 2;
  const centerY = (screenDimensions.height - imageHeight) / 2;

  const [dimensions, setDimensions] = useState({ width: "40%", height: "40%" });

  useEffect(() => {
    const updateDimensions = () => {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;

      // Set width and height as a percentage of the screen resolution
      const widthPercentage = 0.35 * screenWidth; // 35% of screen width
      const heightPercentage = 0.35 * screenHeight; // 35% of screen height

      setDimensions({
        width: `${(widthPercentage / screenWidth) * 100}%`,
        height: `${(heightPercentage / screenHeight) * 100}%`,
      });
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    return () => window.removeEventListener("resize", updateDimensions);
  }, []); // Stat  // Initial Y position

  useEffect(() => {
    const updateMousePosition = (event) => {
      const heroSection = document
        .querySelector(".hero-section")
        .getBoundingClientRect();
      const newRelX = event.clientX - heroSection.left;
      const newRelY = event.clientY - heroSection.top;
      setRelX(newRelX);
      setRelY(newRelY);

      // Animate polygons and lines with GSAP
      gsap.to(".line", {
        duration: 0.5,
        attr: { x2: newRelX, y2: newRelY },
        ease: "power3.out",
      });
      gsap.to(".polygon", {
        duration: 0.5,
        attr: {
          points: `0,0 ${newRelX},${newRelY} 0,${window.innerHeight}`,
        },
        ease: "power3.out",
      });
      gsap.to(".polygon2", {
        duration: 0.5,
        attr: {
          points: `0,0 ${newRelX},${newRelY} ${window.innerWidth},0`,
        },
        ease: "power3.out",
      });
      gsap.to(".polygon3", {
        duration: 0.5,
        attr: {
          points: `${newRelX},${newRelY} ${window.innerWidth},0 ${window.innerWidth},${window.innerHeight}`,
        },
        ease: "power3.out",
      });
      gsap.to(".polygon4", {
        duration: 0.5,
        attr: {
          points: `0,${window.innerHeight} ${newRelX},${newRelY} ${window.innerWidth},${window.innerHeight}`,
        },
        ease: "power3.out",
      });

      gsap.to(".custom-cursor", {
        duration: 0.2,
        left: `${newRelX}px`,
        top: `${newRelY}px`,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  useEffect(() => {
    const updateFontSize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setFontSize("6px"); // xs
      } else if (width < 1024) {
        setFontSize("6px"); // md
      } else {
        setFontSize("12px"); // lg
      }
    };

    updateFontSize();
    window.addEventListener("resize", updateFontSize);

    return () => window.removeEventListener("resize", updateFontSize);
  }, []);

  return (
    <div
      className="hero-section"
      style={{
        width: "100%",
        height: "100vh",
        position: "relative",
        overflow: "hidden",
        cursor: "none", // Disable default cursor
      }}
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
            height: "21px",
          }}
        />
        <span
          style={{
            marginLeft: "8px", // Space between icon and text

            color: "#E2CAA2",
            fontSize: "0.9rem",
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
          fontSize: "12px",
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
              fontWeight: selectedWork === lang ? "bold" : "normal",
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
          top: "calc(50% - 100px)", // Adjust position as needed
          left: "50%",
          transform: "translateX(-50%)",
          width: "15%", // Adjust size as needed
          zIndex: 500,
        }}
      />

      <svg
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        style={{ position: "absolute", top: 0, left: 0 }}
      >
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="20%" stopColor="#040F16" />
            <stop offset="60%" stopColor="#06242E" />
            <stop offset="100%" stopColor="#073845" />
          </linearGradient>
          <linearGradient id="gradient2" x1="100%" y1="100%" x2="0" y2="0">
            <stop offset="20%" stopColor="#040F16" />
            <stop offset="60%" stopColor="#06242E" />
            <stop offset="100%" stopColor="#073845" />
          </linearGradient>

          <clipPath id="clip-red">
            <polygon points={`0,0 ${relX},${relY} 0,${window.innerHeight}`} />
          </clipPath>
          <clipPath id="clip-green">
            <polygon points={`0,0 ${relX},${relY} ${window.innerWidth},0`} />
          </clipPath>
          <clipPath id="clip-yellow">
            <polygon
              points={`${relX},${relY} ${window.innerWidth},0 ${window.innerWidth},${window.innerHeight}`}
            />
          </clipPath>
          <clipPath id="clip-blue">
            <polygon
              points={`0,${window.innerHeight} ${relX},${relY} ${window.innerWidth},${window.innerHeight}`}
            />
          </clipPath>
        </defs>

        {/* Polygons */}
        <polygon
          className="polygon"
          points={`0,0 ${relX},${relY} 0,${window.innerHeight}`}
          fill="url(#gradient2)"
        />
        <polygon
          className="polygon2"
          points={`0,0 ${relX},${relY} ${window.innerWidth},0`}
          fill="url(#gradient2)"
        />
        <polygon
          className="polygon3"
          points={`${relX},${relY} ${window.innerWidth},0 ${window.innerWidth},${window.innerHeight}`}
          fill="url(#gradient)"
        />
        <polygon
          className="polygon4"
          points={`0,${window.innerHeight} ${relX},${relY} ${window.innerWidth},${window.innerHeight}`}
          fill="url(#gradient)"
        />

        {/* Dynamic Lines */}
        <line
          className="line"
          x1="0"
          y1="0"
          x2={relX}
          y2={relY}
          stroke="#0A5D8F"
          strokeWidth="1"
        />
        <line
          className="line"
          x1={window.innerWidth}
          y1="0"
          x2={relX}
          y2={relY}
          stroke="#0A5D8F"
          strokeWidth="1"
        />
        <line
          className="line"
          x1={window.innerWidth}
          y1={window.innerHeight}
          x2={relX}
          y2={relY}
          stroke="#0A5D8F"
          strokeWidth="1"
        />
        <line
          className="line"
          x1="0"
          y1={window.innerHeight}
          x2={relX}
          y2={relY}
          stroke="#0A5D8F"
          strokeWidth="1"
        />

        {/* Images with Clipping */}
        <image
          href={require("../assets/colortext.png")}
          width={dimensions.width}
          height={dimensions.height}
          x={centerX}
          y={centerY}
          style={{ clipPath: "url(#clip-red)" }}
        />
        <image
          href={require("../assets/colortext.png")}
          width={dimensions.width}
          height={dimensions.height}
          x={centerX}
          y={centerY}
          style={{ clipPath: "url(#clip-blue)" }}
        />
        <image
          href={require("../assets/colortext.png")}
          width={dimensions.width}
          height={dimensions.height}
          x={centerX}
          y={centerY}
          style={{ clipPath: "url(#clip-yellow)" }}
        />
        <image
          href={require("../assets/outlinetext.png")}
          width={dimensions.width}
          height={dimensions.height}
          x={centerX}
          y={centerY}
          style={{ clipPath: "url(#clip-green)" }}
        />
      </svg>

      <div
        className="custom-cursor"
        style={{
          position: "absolute",
          left: `${relX - 20}px`,
          top: `${relY - 20}px`,
          width: "20px",
          height: "20px",
          borderRadius: "50%",
          border: "1px solid #E2CAA2",
          pointerEvents: "none",
          zIndex: 9999,
        }}
      />
    </div>
  );
};

export default HeroSection;
