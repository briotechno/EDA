import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import Icon from "../assets/icon.png";
import { useMediaQuery } from "react-responsive";

const HeroSection = () => {
  const [relX, setRelX] = useState(600); // Initial X position
  const [relY, setRelY] = useState(300);
  const [fonttSize, setFontSize] = useState("12px");
  const [selectedLanguage, setSelectedLanguage] = useState("EN");
  const [selectedWork, setSelectedWork] = useState("AGB"); // Default selected language
  const [hoveringText, setHoveringText] = useState(false);
  const [dimensions, setDimensions] = useState({ width: "50%", height: "50%" });
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
        setFontSize("9px"); // xs
      } else if (width < 1024) {
        setFontSize("12px"); // md
      } else {
        setFontSize("12px"); // lg
      }
    };

    updateFontSize();
    window.addEventListener("resize", updateFontSize);

    return () => window.removeEventListener("resize", updateFontSize);
  }, []);

  let bottomValue = "50px";
  if (isSm) bottomValue = "45px";
  if (isMd) bottomValue = "40px";
  if (isLg) bottomValue = "30px";
  if (isXl) bottomValue = "20px";

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
            width: "22px", // Adjust size as needed
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
          ...(window.innerWidth < 800
            ? {
                left: "50%",
                bottom: "2%",
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
          bottom: bottomValue,
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

      <svg
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        style={{ position: "absolute", top: 0, left: 0 }}
      >
        {/* Define colored areas */}
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
        </defs>

        {/* Apply gradients to polygons */}
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

        {/* Draw dynamic lines */}
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
          x1="100%"
          y1="0"
          x2={relX}
          y2={relY}
          stroke="#0A5D8F"
          strokeWidth="1"
        />
        <line
          className="line"
          x1="100%"
          y1="100%"
          x2={relX}
          y2={relY}
          stroke="#0A5D8F"
          strokeWidth="1"
        />
        <line
          className="line"
          x1="0"
          y1="100%"
          x2={relX}
          y2={relY}
          stroke="#0A5D8F"
          strokeWidth="1"
        />

        {/* Render text with clipping */}
        <defs>
          {/* Green Section Clip */}
          <clipPath id="green-clip">
            <polygon points={`0,0 ${relX},${relY} ${window.innerWidth},0`} />
          </clipPath>
          {/* Yellow Section Clip */}
          <clipPath id="yellow-clip">
            <polygon
              points={`${relX},${relY} ${window.innerWidth},0 ${window.innerWidth},${window.innerHeight}`}
            />
          </clipPath>
          {/* Red Section Clip */}
          <clipPath id="red-clip">
            <polygon points={`0,0 ${relX},${relY} 0,${window.innerHeight}`} />
          </clipPath>
          {/* Blue Section Clip */}
          <clipPath id="blue-clip">
            <polygon
              points={`0,${window.innerHeight} ${relX},${relY} ${window.innerWidth},${window.innerHeight}`}
            />
          </clipPath>
        </defs>
        <image
          className="text-vision"
          x={px}
          y={py}
          href={require("../assets/vision.png")} // Replace with your actual path
          width={vx}
          height={vy}
        />
        <svg x={x} y={y}>
          <image
            href={require("../assets/colortext.png")} // Replace with your actual path
            width={ix}
            height={iy}
            style={{
              clipPath: "url(#red-clip)",
            }}
          />

          <image
            href={require("../assets/outlinetext.png")} // Replace with your actual path
            width={ix}
            height={iy}
            style={{
              clipPath: "url(#green-clip)",
            }}
          />

          <image
            href={require("../assets/outlinetext.png")} // Replace with your actual path
            width={ix}
            height={iy}
            style={{
              clipPath: "url(#yellow-clip)",
            }}
          />

          <image
            href={require("../assets/outlinetext.png")} // Replace with your actual path
            width={ix}
            height={iy}
            style={{
              clipPath: "url(#blue-clip)",
            }}
          />
        </svg>
      </svg>

      {/* Custom Cursor */}
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
