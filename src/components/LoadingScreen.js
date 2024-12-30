import React, { useEffect } from "react";
import { gsap } from "gsap";

const LoadingScreen = ({ onComplete }) => {
  useEffect(() => {
    const line = document.querySelector(".loading-line");
    const linesContainer = document.querySelector(".lines-container");

    gsap.fromTo(
      line,
      { attr: { y1: "100%", y2: "100%" } },
      {
        duration: 1.5,
        attr: { y2: "0%" },
        ease: "power3.out",
        onComplete: () => {
          // Split the line into four and rotate
          gsap.to(line, {
            duration: 1,
            opacity: 1,
            ease: "power3.out",
          });

          const lines = document.querySelectorAll(".line");
          gsap.fromTo(
            lines,
            { opacity: 0, rotation: 0, transformOrigin: "center center" },
            {
              opacity: 1,
              rotation: 45,
              stagger: 0.2,
              duration: 1,
              ease: "power3.out",
              onComplete: () => {
                if (onComplete) {
                  onComplete(); // Signal loading complete
                }
              },
            }
          );
        },
      }
    );
  }, [onComplete]);

  return (
    <div
      className="loading-screen"
      style={{
        width: "100%",
        height: "100vh",
        background: "linear-gradient(45deg, black, grey)",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        style={{ position: "absolute", top: 0, left: 0 }}
      >
        {/* Single line initially */}
        <line
          className="loading-line"
          x1="50%"
          y1="100%"
          x2="50%"
          y2="100%"
          stroke="white"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
};

export default LoadingScreen;
