import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { useMediaQuery } from "react-responsive";

const HeroSection = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  const [relX, setRelX] = useState(isMobile ? 250 : 600); // Initial X position
  const [relY, setRelY] = useState(300);

  useEffect(() => {
    const updateMousePosition = (event) => {
      const heroSection = document
        .querySelector(".hero-section")
        .getBoundingClientRect();
      const newRelX = event.clientX - heroSection.left;
      const newRelY = event.clientY - heroSection.top;
      setRelX(newRelX);
      setRelY(newRelY);
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
      }}
    >
      <svg
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        style={{ position: "absolute", top: 0, left: 0 }}
      >
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

        <path
          d={`M 0 0 L ${window.innerHeight * 0.3} 0 L ${relX} ${relY} L 0 ${
            isMobile ? window.innerHeight * 0.7 : window.innerHeight - 50
          } Z`}
          fill="url(#gradient1)"
          stroke="#0A5D8F"
          className="dynamic-path"
        />

        <path
          d={`M ${relX} ${relY} L ${window.innerWidth - 0} 250 L ${
            window.innerWidth - 0
          } 0 L ${window.innerHeight * 0.21} 0 Z`}
          fill="url(#gradient2)"
          stroke="#0A5D8F"
          className="dynamic-path"
        />

        <path
          d={`M ${window.innerWidth - 0} 250 L ${window.innerWidth - 0} ${
            window.innerHeight - 0
          } L ${window.innerWidth * 0.927} ${window.innerHeight - 0}
           L ${relX} ${relY} Z `}
          fill="url(#gradient3)"
          stroke="#0A5D8F"
          className="dynamic-path"
        />

        <path
          d={`M ${relX} ${relY} L ${window.innerWidth * 0.927} ${
            window.innerHeight - 0
          } L 0 ${window.innerHeight - 0} L 0 ${window.innerHeight * 0.94} Z`}
          fill="url(#gradient3)"
          stroke="#0A5D8F"
          className="dynamic-path"
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

      {/* Big yellow text in center */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontSize: "200px",
          color: "yellow",
          fontWeight: "bold",
          zIndex: 1,
        }}
      >
        BIG TEXT
      </div>
    </div>
  );
};

export default HeroSection;
