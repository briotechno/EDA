import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import Icon from "../assets/icon.png";
import { useMediaQuery } from "react-responsive";
const HeroSection = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });
 
  const [relX, setRelX] = useState(isMobile ? 250 : 600);  
  const [relY, setRelY] = useState(300);
  const [selectedLanguage, setSelectedLanguage] = useState("EN");
  const [selectedWork, setSelectedWork] = useState("AGB"); // Default selected language
  const [setHoveringText] = useState(false); // Stat  // Initial Y position
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
  }, []); //
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
            width: "56.84px", // Adjust size as needed
            height: "47.5px",
          }}
        />
        <span
          style={{
            marginLeft: "8px", // Space between icon and text
            fontFamily: "lato",
            color: "#E2CAA2",
            fontSize: "20px",
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
          lineHeight: "19.2px",
          fontSize: "16px",
          fontFamily: "lato",
        }}
      >
        {["DE", "EN", "AR"].map((lang) => (
          <span
            key={lang}
            // onMouseEnter={() => setHoveringText(true)}
            // onMouseLeave={() => setHoveringText(false)}
            onClick={() => setSelectedLanguage(lang)}
            style={{
              cursor: "pointer",
              fontWeight: selectedLanguage === lang ? "900" : "300",
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
          bottom: "50px", // Position it at the bottom
          right: "20px", // Position it at the right
          display: "flex",
          gap: "30px", // Space between language options
          fontWeight: "300",
          zIndex: 1000,
          color: "#E2CAA2",
          lineHeight: "19.2px",
          fontSize: "16px",
          fontFamily: "lato",
        }}
      >
        {["IMPRESSUM", "AGB", "DATENSCHUTZ"].map((lang) => (
          <span
            key={lang}
            // onMouseEnter={() => setHoveringText(true)} // Set hover state
            // onMouseLeave={() => setHoveringText(false)} // Reset hover state
            onClick={() => setSelectedWork(lang)} // Update selected language
            style={{
              cursor: "pointer",
              fontWeight: selectedWork === lang ? "900" : "300",
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
          bottom: "50px",
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
          color: "#E2CAA2",
          fontSize: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "14px",
          fontWeight: "900",
          lineHeight: "24px",
          letterSpacing: "0.06em",
          textUnderlinePosition: "from-font",
          textDecorationSkipInk: "none",
          zIndex: 1000,
          fontFamily: "lato",
        }}
      >
        <div>HOLD THE CLICK</div>
        <div
          style={{
            fontWeight: "900",
            textTransform: "uppercase",
            fontSize: "14px",
            lineHeight: "16.8px",
            fontFamily: "lato",
          }}
        >
          TO START
        </div>
      </div>

      <div>
        <svg
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
          style={{ position: "absolute", top: 0, left: 0 }}
        >
          {/* Define colored areas */}
          <defs>
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
          <svg
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
            style={{ position: "absolute", top: 0, left: 0 }}
          >
            <path
              d={`M 0 0 L ${window.innerHeight * 0.3} 0 L ${relX} ${relY} L 0 ${
                isMobile ? window.innerHeight * 0.7 : window.innerHeight - 50
              } Z`}
              fill="url(#gradient1)"
              stroke="#0A5D8F"
              className="dynamic-path"
            />
            
          </svg>
          <svg
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
            style={{ position: "absolute", top: 0, left: 0 }}
          >
            <path
              d={`M ${relX} ${relY} L ${window.innerWidth - 0} 150 L ${
                window.innerWidth - 0
              } 0 L ${window.innerHeight * 0.21} 0 Z`}
              fill="url(#gradient2)"
              // fill="gray"
              stroke="#0A5D8F"
              className="dynamic-path"
            />
          </svg>
          <svg
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
            style={{ position: "absolute", top: 0, left: 0 }}
          >
            <path
              d={`M ${window.innerWidth - 0} 150 L ${window.innerWidth - 0} ${
                window.innerHeight - 0
              } L ${window.innerWidth * 0.124} ${window.innerHeight}
               L ${relX} ${relY} Z `}
              fill="url(#gradient3)"
              // fill="gray"
              stroke="#0A5D8F"
              className="dynamic-path"
            />
          </svg>
          <svg
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
            style={{ position: "absolute", top: 0, left: 0 }}
          >
            <path
              d={`M ${relX} ${relY} L ${window.innerWidth * 0.85} ${
                window.innerHeight - 0
              } L 0 ${window.innerHeight - 0} L 0 ${
                window.innerHeight * 0.94
              } Z`}
              fill="url(#gradient3)"
              // fill="yellow"
              stroke="#0A5D8F"
              className="dynamic-path"
            />
          </svg>

          {/* Draw dynamic lines */}
          <line
            className="line"
            x1={isMobile ? "0" : "10%"}
            y1={isMobile ? "50" : "0"}
            x2={relX}
            y2={relY}
            stroke="green"
            strokeWidth="0"
          />
          <line
            className="line"
            x1={isMobile ? "100%" : "100%"}
            y1={isMobile ? "20%" : "10%"}
            x2={relX}
            y2={relY}
            stroke="red"
            strokeWidth="0"
          />
          <line
            className="line"
            x1="93%"
            y1="100%"
            x2={relX}
            y2={relY}
            stroke="green"
            strokeWidth="0"
          />
          <line
            className="line"
            x1={isMobile ? "0%" : "0%"}
            y1={isMobile ? "70%" : "94%"}
            x2={relX}
            y2={relY}
            stroke="red"
            strokeWidth="0"
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

          <text
            className="text-vision"
            x="50%"
            y="38%"
            textAnchor="middle"
            dominantBaseline="middle"
            fontWeight="400"
            fill="#E2CAA2"
            style={{
              lineHeight: "19.2px",
              letterSpacing: "0.26em",
              textAlign: "left",
              fontSize: "16px",

              textUnderlinePosition: "from-font",
              textDecorationSkipInk: "none",
            }}
          >
            VISION FOR TOMORROW
          </text>

          <text
            className="text-red"
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="200px"
            fontFamily="lato"
            fontWeight="bold"
            fill="#E2CAA2"
            style={{ clipPath: "url(#red-clip)", lineHeight: "240px" }}
          >
            space
          </text>
          <text
            className="text-green"
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="200px"
            fontWeight="bold"
            fill="transparent"
            stroke="#E2CAA2"
            strokeWidth="2"
            fontFamily="lato"
            style={{ clipPath: "url(#green-clip)", lineHeight: "240px" }}
          >
            space
          </text>
          <text
            className="text-yellow"
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            fontWeight="bold"
            fill="#E2CAA2"
            strokeWidth="2"
            fontFamily="lato"
            fontSize="200px"
            style={{ clipPath: "url(#yellow-clip)", lineHeight: "240px" }}
          >
            space
          </text>
          <text
            className="text-blue"
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="200px"
            fontWeight="bold"
            fill="transparent"
            stroke="#E2CAA2"
            fontFamily="lato"
            style={{ clipPath: "url(#blue-clip)", lineHeight: "240px" }}
          >
            space
          </text>
        </svg>
      </div>

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
      <image
        href={require("../assets/outlinetext.png")} // Replace with your actual path
        width={dimensions.width}
        height={dimensions.height}
        style={{
          clipPath: "url(#green-clip)",
        }}
      />

      <image
        href={require("../assets/colortext.png")} // Replace with your actual path
        width={dimensions.width}
        height={dimensions.height}
        style={{
          clipPath: "url(#yellow-clip)",
        }}
      />

      <image
        href={require("../assets/outlinetext.png")} // Replace with your actual path
        width={dimensions.width}
        height={dimensions.height}
        style={{
          clipPath: "url(#red-clip)",
        }}
      />
    </div>
  );
};

export default HeroSection;
