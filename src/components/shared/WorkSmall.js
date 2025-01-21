import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const WorkSmall = () => {
  const [selectedWork, setSelectedWork] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === `/work/impressum`) {
      setSelectedWork("IMPRESSUM");
    } else if (location.pathname === `/work/agb`) {
      setSelectedWork("AGB");
    } else if (location.pathname === `/work/datenschutz`) {
      setSelectedWork("DATENSCHUTZ");
    } else if (location.pathname === "/") {
      setSelectedWork("");
    }
  }, [location]);

  const hanleNavigateWork = (state) => {
    const newState = state.toLowerCase();
    navigate(`/work/${newState}`);
    setSelectedWork(state);
  };
  return (
    <div
      className="language-selector2"
      style={{
        width: "100%",
        justifyContent: "center",
       position:'fixed',
        bottom: "0",
        right: "0",
        height: "60px",
        display: "flex",
        gap: "30px",
        zIndex: 1000,
        backgroundColor: location.pathname === "/" ? "transparent" : "#073845",
        color: "#E2CAA2",
        fontSize: "16px",
        fontWeight: 300,
        alignItems: "center",
      }}
    >
      {["IMPRESSUM", "AGB", "DATENSCHUTZ"].map((work, index) => (
        <Box
          component="span"
          key={index}
          onClick={() => hanleNavigateWork(work)}
          sx={{
            cursor: "pointer",
            fontWeight: selectedWork === work ? "bold" : "300",
            textDecoration: selectedWork === work ? "underline" : "none",
            transition: "font-weight 0.3s ease",
            "&:hover": {
              fontWeight: "bold",
            },
          }}
        >
          {work}
        </Box>
      ))}
    </div>
  );
};

export default WorkSmall;
