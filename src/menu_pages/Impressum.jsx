import { Box, Typography } from "@mui/material";
import Icon from "../assets/logo.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const Impressum = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const isSmallScreen = useMediaQuery({ maxWidth: 820 });
  return (
    <Box
      sx={{
        minHeight: "100vh", // Ensure
        maxWidth: "100%",
        height: "100%",
        margin: "auto",
        backgroundColor: "#073845",
        padding: "10% 10%", // Adds 10% padding on the left and right
      }}
    >
      <header
        style={{
          width: "100%", // Full width
          backgroundColor: "#073845", // Match the page background color
          position: "fixed", // Fix it at the top
          top: 0, // Align it to the top
          left: 0,
          zIndex: 1000, // Ensure it stays above all other elements
          padding: "30px 20px", // Add padding for better spacing
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start", // Align the logo to the right
        }}
      >
        <div
          onClick={() => navigate("/")} // Navigate to the home page on click
          style={{
            cursor: "pointer", // Indicate clickability
          }}
        >
          <img
            src={Icon}
            alt="Header Logo"
            style={{
              width: isSmallScreen ? "250px" : "300px", // Adjust size as needed
              height: isSmallScreen ? "40px" : "50px",
            }}
          />
        </div>
      </header>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          color: "#E2CAA2",
          fontFamily: "Lato",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            marginTop: isSmallScreen ? "1rem" : "unset",
          }}
        >
          <Typography
            fontSize={isSmallScreen ? "30px" : "35px"}
            color="#E2CAA2"
            fontWeight={"bold"}
          >
            IMPRESSUM
          </Typography>
        </Box>
        {/* Row Layout for Tabular Form */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "30px",
            mt: isSmallScreen ? 1 : 3,
            flexFlow: "wrap",
          }}
        >
          {/* First Column */}
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h5"
              fontSize={isSmallScreen && "18px"}
              component="h2"
              gutterBottom
              sx={{ fontWeight: "bold" }}
            >
              EDA Baumanagement GmbH
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{ fontSize: "18px", mt: 3 }}
            >
              Eppeleinstr. 2 <br />
              92353 Postbauer Heng <br />
              <br />
              Amtsgericht Nürnberg HRA 68231
              <br />
              Umsatzsteuer-Identifikationsnummer: DE 363278409
              <br />
              <br />
              Kammerzugehörigkeit:
              <br />
              IHK Regensburg für Oberpfalz / Kelheim, Nr. 86234
              <br />
              <br />
              vertreten durch
              <br />
              <br />
              Amtsgericht Nürnberg HRB 42341
              <br />
              <br />
              diese vertreten durch die Geschäftsführer/in
              <br />
              <br />
              Hr. Danneberg, Frau Dr. Ernst
              <br />
              <br />
            </Typography>
          </Box>
          {/* Second Column */}
          <Box></Box>
          <Box sx={{ flex: 1 }}>
            <Typography
              fontSize={isSmallScreen ? "25px" : "35px"}
              color="#E2CAA2"
              fontWeight={"bold"}
              sx={{ fontWeight: "bold", mt: "-1.6rem", mb: "1.6rem" }}
            >
              Postanschrift
            </Typography>

            <Typography
              variant="h5"
              fontSize={isSmallScreen && "20px"}
              component="h2"
              gutterBottom
            
              sx={{ fontWeight: "bold" }}
            >
              EDA Baumanagement GmbH
            </Typography>
            <Typography variant="body1" sx={{ fontSize: "18px", mt: 3 }}>
              Eppeleinstr. 2 <br />
              92353 Postbauer Heng <br />
              <br />
              Kontakt
              <br />
              <br />
              Telefon: +49 176 69897430 <br />
              E-Mail: info@eda-baumanagement.com <br />
              Internet:{" "}
              <a
                href="http://www.eda-baumanagement.com"
                style={{ color: "#E2CAA2", textDecoration: "underline" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                www.eda-baumanagement.com
              </a>
            </Typography>
            <Typography
              variant="h5"
              fontSize={isSmallScreen && "20px"}
              component="h2"
              gutterBottom
              sx={{ fontWeight: "bold", mt: 5 }}
            >
              Haftungsausschluss (Disclaimer)
            </Typography>
            <Typography variant="body1" sx={{ fontSize: "18px", mt: 3 }}>
              Zum Zeitpunkt des Einfügen von Links haben wir den Inhalt der
              verlinkten Seiten geprüft. Sollte in der Zwischenzeit auf den
              verlinkten Seiten illegaler Inhalt eingestellt worden sein, werden
              wir den Link nach Kenntnisnahme natürlich umgehend entfernen.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Impressum;
