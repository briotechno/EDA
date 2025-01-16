import { Box, Typography } from "@mui/material";
import Icon from "../assets/logo.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Impressum = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("DE");
  const [selectedWork, setSelectedWork] = useState(""); // Default selected
  const navigate = useNavigate(); // I
  const [hoveringText, setHoveringText] = useState(false);

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
          padding: "10px 20px", // Add padding for better spacing
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
              width: "314.84px", // Adjust size as needed
              height: "51.86px",
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
        <Box sx={{ display: "flex", flexDirection: "column", gap: "20px", mt: -5 }}>
          <Typography fontSize={"35px"} color="#E2CAA2" fontWeight={"bold"}>
            IMPRESSUM
          </Typography>
        </Box>
        {/* Row Layout for Tabular Form */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "30px",
            mt: 3,
          }}
        >
          {/* First Column */}
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h5"
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
              fontSize={"35px"}
              color="#E2CAA2"
              fontWeight={"bold"}
              sx={{ fontWeight: "bold", mt: "-4.6rem", mb: "1.6rem" }}
            >
              Postanschrift
            </Typography>

            <Typography
              variant="h5"
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
      <div
        className="language-selector2"
        style={{
          width: "100%", 
          justifyContent:'flex-end',
          position: "fixed", // Fixed position
          bottom: "0", // Align to the bottom of the viewport
          right: "0", // Align to the right of the viewport
          padding: "20px", // Add some padding for spacing
          display: "flex",
          gap: "30px", // Space between language options
          zIndex: 1000, // Ensure it stays above other elements
          backgroundColor: "#073845", // Optional: Add a background color if needed
          color: "#E2CAA2", // Text color
          fontSize: "16px", // Font size
          fontWeight: 300, // Font weight
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
      </div>

    </Box>
  );
};

export default Impressum;
