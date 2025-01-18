import React, { useEffect } from "react";
import {
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Link,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Icon from "../assets/logo.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ZVB from "../pdfs/ZVB.pdf";
import LEAN from "../pdfs/LEAN.pdf";
import COC from "../pdfs/COC.pdf";
import AEB from "../pdfs/AEB.pdf";
import AABD from "../pdfs/AABD.pdf";
import LIEF from "../pdfs/LIEF.pdf";

const AGB = () => {
  const [selectedWork, setSelectedWork] = useState(""); // Default selected
  const navigate = useNavigate(); // I
  const [hoveringText, setHoveringText] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const pdfData = [
    {
      title: "Lieferkettensorgfaltspflichtengesetz",
      subtitle:
        "Anlage LkSG (Lieferkettensorgfaltspflichtengesetz) Firma EDA Baumanagement",
      link: LIEF,
    },
    {
      title: "Code of Conduct",
      subtitle: "Code of Conduct für Vertragspartner von EDA-Baumanagement",
      link: COC,
    },
    {
      title:
        "Allgemeine Anforderungen an Bestands- und Dokumentationsunterlagen (AABD)",
      subtitle:
        "Allgemeine Anforderungen an Bestands- und Dokumentationsunterlagen (AABD)",
      link: AABD,
    },
    {
      title: "ALLGEMEINE EINKAUFSBEDINGUNGEN (AEB)",
      subtitle: "ALLGEMEINE EINKAUFSBEDINGUNGEN (AEB)",
      link: AEB,
    },
    {
      title: "Zusätzliche Vertragsbedingungen (ZVB)",
      subtitle: "Zusätzliche Vertragsbedingungen (ZVB)",
      link: ZVB,
    },
    {
      title: "Vertragsbedingungen Lean Management",
      subtitle: "Vertragsbedingungen Lean Management",
      link: LEAN,
    },
  ];
  return (
    <>
      <Box
        sx={{
          maxWidth: "100%",
          margin: "auto",
          backgroundColor: "#073845",
          padding: "2% 10%",
          mb: 5, // Adds 10% padding on the left and right
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
            gap: "30px",
            flexDirection: "column",
            color: "#E2CAA2",
            fontFamily: "Lato",
            mt: 10,
          }}
        >
          <Box sx={{ display: "flex", gap: "20px", flexDirection: "column" }}>
            <Typography fontSize={"35px"} color="#E2CAA2" fontWeight={"bold"} sx={{wordBreak:'break-word'}}>
              ALLGEMEINE EINKAUFSBEDINGUNGEN (AEB)
            </Typography>
            <Typography variant="body1" sx={{ fontSize: "18px", mt: 3, mb: 3 }}>
              In den nachstehenden Bedingungen wird der als Verkäufer
              auftretende Bieter/Lieferant auch als Auftragnehmer [= AN] und der
              als Käufer agierende Hauptunternehmer als Auftraggeber [= AG]
              bezeichnet. Auf der Internet-Seite unter{" "}
              <a
                href="http://www.eda-baumanagement.com"
                style={{
                  color: "#E2CAA2",
                  textDecoration: "underline",
                  fontStyle: "italic",
                }}
                target="_blank"
                rel="noopener noreferrer"
              >
                www.eda-baumanagement.com
              </a>{" "}
              können diese AEB zur Kenntnisnahme eingesehen, heruntergeladen,
              ausgedruckt oder auf Wunsch dem dazu anfragenden AN auch zugesandt
              werden.
            </Typography>
          </Box>
          <Box sx={{ mb: 3 }}>
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              sx={{ fontWeight: "bold" }}
            >
              0. Geltungsbereich
            </Typography>
            <Typography
              variant="body1"
              pargraph
              sx={{ fontSize: "18px", mt: 3 }}
            >
              Die vorliegenden AEB gelten für Kaufverträge der jeweils
              betroffenen Konzerngesellschaft der EDA Baumanagement in
              Deutschland als Käufer / AG (insbesondere die EDA Baumanagement,
              HRB XXXX] und die mit ihnen jeweils verbundenen Unternehmen) oder
              für Arbeitsgemeinschaften, an denen mindestens eine
              Konzerngesellschaft der EDA Baumanagement als Mit-Gesellschafter
              der Arbeitsgemeinschaft beteiligt ist, mit dem jeweiligen
              Verkäufer / AN, sofern diese AEB in den jeweiligen Vertrag
              einbezogen werden.
            </Typography>
          </Box>
          <Box sx={{ mb: 3 }}>
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              sx={{ fontWeight: "bold" }}
            >
              1. Allgemeine Bestimmungen, allgemeine Verpflichtungen des AN
            </Typography>
            <Typography
              variant="body1"
              pargraph
              sx={{ fontSize: "18px", mt: 3 }}
            >
              (1) Diese Einkaufsbedingungen finden gegenüber Verbrauchern keine
              Anwendung.
              <br />
              <br />
              Beauftragungen erfolgen ausschließlich unter Zugrundelegung der
              nachstehenden Einkaufsbedingungen. Abweichende
              Geschäftsbedingungen und/oder andere schriftliche und mündliche
              Erklärungen des AN sind nur dann rechtswirksam, wenn sie vom AG
              ausdrücklich schriftlich anerkannt werden. Stillschweigen des AG
              gilt in keinem Fall als Zustimmung.
            </Typography>
            <Typography
              variant="body1"
              pargraph
              sx={{ fontSize: "18px", mt: 3 }}
            >
              (2) Diese Einkaufsbedingungen gelten auch für alle künftigen
              Aufträge ohne Rücksicht darauf, ob im Auftrag ausdrücklich darauf
              hingewiesen wird.
            </Typography>
            <Typography
              variant="body1"
              pargraph
              sx={{ fontSize: "18px", mt: 3 }}
            >
              (3) Dem Auftrag liegen ferner die anerkannten Regeln der Technik,
              die geltenden DIN-Normen und Sicherheitsbestimmungen zugrunde,
              soweit sie den Liefergegenstand betreffen. Der AN ist
              verpflichtet, die vom AG im Auftragsschreiben genannte
              Projektbezeichnung, Gewerkebezeichnung, die Auftragsnummer sowie
              den Referenzcode in sämtlichen den Auftrag betreffenden
              Schriftverkehr, Frachtbriefen, Paketaufschriften, insbesondere
              auch auf seinen Rechnungen anzugeben.
            </Typography>
            <Typography
              variant="body1"
              pargraph
              sx={{ fontSize: "18px", mt: 3 }}
            >
              (4) Sofern zwischen AN und AG vereinbart, hat sich der AN im
              Online-Portal SPS (EDA Portal for Suppliers), dem
              Lieferantenportal des EDA Baumanagement, zu registrieren und dabei
              eigenverantwortlich seine Unternehmensdaten (vor allem Firmenname,
              Anschrift, Rechtsform, Ansprechpartner und angebotene
              Leistungsbereiche) - inhaltlich und formal zutreffend -
              einzutragen und bei eventuellen Änderungen zu aktualisieren. Für
              die Registrierung und Nutzung dieses Portals fallen für den AN
              keine Lizenzkosten an. SPS ist im Internet erreichbar unter{" "}
              <a
                href="www.supp-lier.eda-baumanagement.com"
                style={{
                  color: "#E2CAA2",
                  textDecoration: "underline",
                  fontStyle: "italic",
                }}
                target="_blank"
                rel="noopener noreferrer"
              >
                www.supp-lier.eda-baumanagement.com
              </a>{" "}
            </Typography>
          </Box>
          <Box sx={{ mb: 3 }}>
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              sx={{ fontWeight: "bold" }}
            >
              2. Anforderungen bei Bauprodukten
            </Typography>
            <Typography
              variant="body1"
              pargraph
              sx={{ fontSize: "18px", mt: 3 }}
            >
              (1) Der AN stellt sicher, dass die von ihm zu liefernden
              Bauprodukte die allgemein anerkannten Regeln der Technik, alle für
              seine Leistung und das Bauvorhaben einschlägigen und gültigen
              Regelwerke, Vorschriften und weitere Bestimmungen, Vorgaben der
              Zertifizierung, Bau- und Anwendungsvorschriften der Hersteller,
              die einschlägigen Unfallverhütungsvorschriften sowie die an die
              Bauprodukte und Bauarten gestellten Anforderungen bzw. Merkmale,
              jeweils nach dem neuesten Stand, einhalten werden.
            </Typography>
            <Typography
              variant="body1"
              pargraph
              sx={{ fontSize: "18px", mt: 3 }}
            >
              Diese Anforderungen bzw. Merkmale ergeben sich insbesondere aus:
            </Typography>
            <Typography variant="body1" component="ul">
              <Typography
                variant="body1"
                component="li"
                sx={{ fontSize: "20px", mt: 1 }}
              >
                den jeweils geltenden bauordnungsrechtlichen Vorschriften,
                Verordnungen, Baubestimmungen, Richtlinien und Hinweisen samt
                eventueller Ergänzungen durch die örtlichen Genehmigungsbehörden
              </Typography>

              <Typography
                variant="body1"
                component="li"
                sx={{ fontSize: "20px", mt: 1 }}
              >
                der Musterbauordnung 2022 (MBO) in §3 „Allgemeine Anforderungen“
                und §§17 bis 25, bzw. den entsprechenden §§ aus der betroffenen
                Bauordnung des Bundeslandes, in dem das Bauvorhaben errichtet
                wird,
              </Typography>
              <Typography
                variant="body1"
                component="li"
                sx={{ fontSize: "20px", mt: 1 }}
              >
                der im betroffenen Bundesland eingeführten Verwaltungsvorschrift
                Technische Baubestimmungen (VVTB),
              </Typography>
              <Typography
                variant="body1"
                component="li"
                sx={{ fontSize: "20px", mt: 1 }}
              >
                der Bauproduktenverordnung
              </Typography>
              <Typography
                variant="body1"
                component="li"
                sx={{ fontSize: "20px", mt: 1 }}
              >
                den harmonisierten Spezifikationen (hEN, ETA),
              </Typography>
              <Typography
                variant="body1"
                component="li"
                sx={{ fontSize: "20px", mt: 1 }}
              >
                DIN-/ DIN-EN-Normen, VDE-Normen, VDI-Richtlinien,
                VdS-Richtlinien,
              </Typography>
              <Typography
                variant="body1"
                component="li"
                sx={{ fontSize: "20px", mt: 1 }}
              >
                Schriften, Richtlinien, Merkblätter und Hinweisblätter von
                Bundesverbänden, Fachverbänden und -vereinen,
                Gütegemeinschaften, Industrieverbänden, Versuchsanstalten,
                Forschungsgesellschaften, sonstigen Institutionen (DBV, BEB,
                DVGW, FGSV, u.a.)
              </Typography>
            </Typography>
            <Typography
              variant="body1"
              pargraph
              sx={{ fontSize: "18px", mt: 3 }}
            >
              (2) Der AN muss sicherstellen, dass die geforderte Kennzeichnung
              der Bauprodukte [z.B. CE Kennzeichnung, Ü-Zeichen (soweit nicht
              wegen paralleler CE-Kennzeichnung unzulässig),
              Leistungsbeschreibung] bei Anlieferung der Bauprodukte auf der
              Baustelle vorhanden ist.
            </Typography>
            <Typography
              variant="body1"
              pargraph
              sx={{ fontSize: "18px", mt: 3 }}
            >
              (3) Die Übereinstimmung/Konformität der eingesetzten Bauprodukte
              und angewendeten Bauarten muss durch den AN unaufgefordert durch
              die hierfür vorgeschriebenen Nachweise (z.B. Leistungserklärung
              inkl. Gebrauchsanleitungen (Montage-/Einbauanleitungen) u.
              Sicherheitsinformationen, abP, abZ, europäisch technische
              Bewertung, allgemeine Bauartgenehmigung, freiwillige
              Herstellererklärung unter positiver Bestätigung der Produkteignung
              durch eine anerkannte Fremdüberwachungsstelle sowie allen
              Dokumenten für den Nachweis der Erfüllung der
              Bauwerksanforderungen für das jeweilige Bauvorhaben) belegt
              werden. Diese Nachweise sind unverzüglich und rechtzeitig vor der
              ersten Anlieferung vom AN beim AG einzureichen.
            </Typography>
            <Typography
              variant="body1"
              pargraph
              sx={{ fontSize: "18px", mt: 3 }}
            >
              (4) Sofern ein zum Einsatz geplantes bzw. kommendes Bauprodukt
              oder anzuwendende Bauart weitergehender - bislang vom AG nicht
              erkannter oder durch Planungsfortschreibungen notwendig werdender
              - Nachweise (z.B. eine Zustimmung im Einzelfall, vorhabenbezogene
              Bauartgenehmigung) bedarf, wird der AN den AG hierauf unverzüglich
              schriftlich hinweisen.
            </Typography>
            <Typography
              variant="body1"
              pargraph
              sx={{ fontSize: "18px", mt: 3 }}
            >
              (5) Der AN wird auf die Änderungen bei der Verwendung des
              Ü-Zeichens auf Bauprodukten (nachfolgend „harmonisierte
              Bauprodukte“), welche die CE-Kennzeichnung aufgrund der Verordnung
              (EU) Nr. 305/2011 (Bauprodukteverordnung) tragen, hingewiesen,
              insb. wegen Inkrafttreten der Änderungen der Bauregelliste A Teil
              1, Teil 2 und Bauregelliste B Teil 1 am 15.10.2016, Umsetzung der
              MBO, insb. deren § 87, und der Einführung der
              Verwaltungsvorschrift Technische Baubestimmungen (VVTB). Soweit
              für diese harmonisierten Bauprodukte am letzten Tag vor dem Tag
              der Unzulässigkeit der Verwendung des Ü-Zeichens (nachfolgend
              „Stichtag“) ein Ü-Zeichen erforderlich war, verpflichtet sich der
              AN, weiterhin dieselben Anforderungen bzw. Merkmale einzuhalten
              und deren Nachweis bereitzustellen, die am Stichtag Voraussetzung
              für das Ü-Zeichen waren.
            </Typography>
            <Typography
              variant="body1"
              pargraph
              sx={{ fontSize: "18px", mt: 3 }}
            >
              (6) Die Anforderungen bzw. Merkmale und deren Nachweise ergeben
              sich für harmonisierte Bauprodukte aus:
            </Typography>
            <Typography
              variant="body1"
              pargraph
              sx={{ fontSize: "17px", mt: 3 }}
            >
              der Prioritätenliste der ARGEBAU in der jeweils gültigen Fassung,
              veröffentlicht auf der Internetseite des Deutschen Institut für
              Bautechnik, der letztgültigen Bauregelliste B Teil 1, Stand
              (06.10.2015, Ausgabe 2015/2), den einschlägigen Listen der
              technischen Baubestimmungen mit entsprechenden Anforderungen an
              harmonisierte Bauprodukte vor Inkrafttreten der VVTB, der
              Bauproduktenverordnung.
            </Typography>
            <Typography
              variant="body1"
              pargraph
              sx={{ fontSize: "18px", mt: 3 }}
            >
              (7) Der AN hat diese Verpflichtungen -aus Ziff.2.insgesamt- auch
              seinen Herstellern und Lieferanten aufzuerlegen. Der AN tritt an
              den dies an-nehmenden AG alle Ansprüche ab, die dem AN gegen seine
              Hersteller bzw. Lieferanten zustehen, wenn und soweit diese gegen
              die vorstehen-den Verpflichtungen verstoßen. Der AN hat dem AG auf
              dessen Anforderung die Einhaltung der vorstehenden Pflichten
              nachzuweisen.
            </Typography>
            <Typography
              variant="body1"
              pargraph
              sx={{ fontSize: "18px", mt: 3 }}
            >
              (8) Der AN bestätigt ergänzend, dass er bei der Herstellung,
              selbst wenn er nicht selbst direkt dessen Hersteller ist, und bei
              der Lieferung seiner Bauprodukte und Materialien auf
              Umweltschonung, Energieeffizienz und Nachhaltigkeit achtet.
            </Typography>
          </Box>
          <Box sx={{ mb: 3 }}>
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              sx={{ fontWeight: "bold" }}
            >
              3. Liefertermine, Verzug, höhere Gewalt
            </Typography>
            <Typography
              variant="body1"
              pargraph
              sx={{ fontSize: "18px", mt: 3 }}
            >
              (1) Die angegebenen Termine sind verbindlich. Anlieferungen können
              ohne gesonderte Vereinbarung nur während der allgemeinen
              Arbeitszeiten erfolgen. Über diese hat sich der AN im Zweifel
              vorab zu erkundigen. Wird ein Termin durch Verzug des AN nicht
              eingehalten, so ist der AG berechtigt, vom Vertrag zurückzutreten
              und Schadensersatz statt der Leistung zu verlangen. Wenn der AG
              von seinem Recht zum Rücktritt keinen Gebrauch macht, bleibt der
              AN zur Erfüllung des Vertrages verpflichtet. Die Annahme einer
              verspäteten Lieferung durch den AG schließt nicht dessen Recht
              aus, Schadensersatzansprüche wegen Verzugs geltend zu machen. Der
              AN ist verpflichtet, den AG unverzüglich von allen bekannten
              Umständen zu verständigen, welche die Einhaltung der Termine
              infrage stellen können.
            </Typography>
            <Typography
              variant="body1"
              pargraph
              sx={{ fontSize: "18px", mt: 3 }}
            >
              (2) Bei der Lieferung von Baustoffen, die auftragsgemäß
              kurzfristig auf Abruf nach Baufortschritt erfolgen soll
              („just-in-time“), kann der AG auf Kosten des AN im Falle einer
              schuldhaften Verzögerung einen Deckungskauf tätigen, soweit dies
              für den Baufortschritt erforderlich oder nach kaufmännischen
              Gesichtspunkten geboten ist. Der AG kann den Deckungskauf erst
              tätigen, wenn der AN auf Nachfrage erklärt, nicht in der Lage zu
              sein, binnen zwei Stunden nachliefern zu können oder tatsächlich
              nicht in dieser Zeit nachliefert oder keine Erklärung innerhalb
              dieser Frist abgibt. Weitergehende Rechte, insbesondere aus den
              Grundsätzen des Fixhandelskaufes, bleiben unberührt.
            </Typography>
            <Typography
              variant="body1"
              pargraph
              sx={{ fontSize: "18px", mt: 3 }}
            >
              (3) Zum ersatzfähigen Schaden des AG gehören alle ihm entstehenden
              Kosten, Aufwendungen oder sonstige finanzielle Belastungen,
              insbesondere auch Stillstandskosten sowie Kosten einer
              Bauzeitenverzögerung, sofern nicht ausdrücklich Abweichendes
              vereinbart ist.
            </Typography>
            <Typography
              variant="body1"
              pargraph
              sx={{ fontSize: "18px", mt: 3 }}
            >
              (4) Höhere Gewalt, Arbeitskämpfe, Unruhen, behördliche Maßnahmen
              und sonstige unvorhersehbare, unabwendbare und schwerwiegende
              Ereignisse/Umstände befreien die Vertragspartner für die Dauer der
              Störung und im Umfang ihrer Wirkung von den Leistungspflichten.
              Dies gilt auch, wenn diese Ereignisse zu einem Zeitpunkt
              eintreten, in dem sich der betroffene Vertragspartner in Verzug
              befindet. Die Vertragspartner sind verpflichtet, im Rahmen des
              Zumutbaren unverzüglich die erforderlichen Informationen zu geben
              und ihre Verpflichtungen den veränderten Verhältnissen nach Treu
              und Glauben anzupassen. Die Regelungen zur höheren Gewalt finden
              entsprechend Anwendung, wenn (a) ein Ereignis höherer Gewalt
              andauert, die Parteien währenddessen einen Vertrag schließen und
              dabei die Erwartung haben, dass das Ereignis endet oder eine
              wesentliche Besserung eintritt, aber das Ereignis entgegen der
              Erwartung fortdauert oder keine wesentliche Besserung eintritt;
              oder (b) ein Ereignis höherer Gewalt vor dem Abschluss des
              Vertrags endete, jedoch nach seinem Abschluss erneut auftritt
              (z.B. wenn eine Pandemie oder Epidemie erneut auftritt).
            </Typography>
          </Box>
          <Box sx={{ mb: 3 }}>
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              sx={{ fontWeight: "bold" }}
            >
              4. Lieferung
            </Typography>
            <Typography
              variant="body1"
              pargraph
              sx={{ fontSize: "18px", mt: 3 }}
            >
              (1) Für jede Sendung ist ein Lieferschein sofort bei der
              Auslieferung zu übergeben oder digital bereitzustellen, aus dem
              Datum und Nummer der Bestellung, Zeichen und Nummer der
              Verpackung, Stückzahl bzw. Menge und Kurzbeschreibung der
              gelieferten Gegenstände zu ersehen sind. Für alle Sendungen sind
              die vom AG bei Eingang festgestellten Mengen und Gewichte
              maßgebend. Nach Wahl des AG können Stahllieferungen nach
              theoretischem Gewicht nach DIN abgerechnet werden.
            </Typography>
            <Typography
              variant="body1"
              pargraph
              sx={{ fontSize: "18px", mt: 3 }}
            >
              (2) Der Versand erfolgt frei angegebener
              Empfangsstelle/Übergabeort. Die Transportgefahr geht zu Lasten des
              AN, auch wenn Sendungen im Einzelfall unfrei geliefert werden. Bei
              Nichtbeachtung der Versandvorschriften durch den AN ist der AG
              berechtigt, entstehende Mehrkosten dem AN in Rechnung zu stellen.
            </Typography>
            <Typography
              variant="body1"
              pargraph
              sx={{ fontSize: "18px", mt: 3 }}
            >
              (3) Bei der Anlieferung von Gefahrstoffen sind die zugehörigen
              Sicherheitsdatenblätter zu übergeben. Einzelverpackungen und
              -gebinde von Gefahrstoffen sind vom AN jeweils einzeln mit
              Gefahrzetteln zu kennzeichnen
            </Typography>
            <Typography
              variant="body1"
              pargraph
              sx={{ fontSize: "18px", mt: 3 }}
            >
              (4) Transport-, Um- und Verkaufsverpackungen sind am Übergabeort
              vom AN kostenfrei zurückzunehmen. Werden ausnahmsweise
              Verpackungskosten bezahlt, sind diese bei berechtigter Rückgabe
              der Ware vom AN zu erstatten.
            </Typography>
            <Typography
              variant="body1"
              pargraph
              sx={{ fontSize: "18px", mt: 3 }}
            >
              (5) Der AN übernimmt es, eine ausreichende
              Transportrisikoversicherung abzuschließen. Der AN hat für eine
              fachgerechte Verpackung der Lieferungen zu sorgen. Soweit im
              Einzelfall Waren vom AN auf Veranlassung des AG verwahrt werden,
              hat der AN für den Schutz und für eine ausreichende Versicherung
              der Waren zu sorgen, welche auch die zufällige Verschlechterung
              oder den zufälligen Untergang abdeckt.
            </Typography>
            <Typography
              variant="body1"
              pargraph
              sx={{ fontSize: "18px", mt: 3 }}
            >
              (6) Lieferfahrzeuge müssen mit Sicherheitskennzeichnung nach DIN
              30710 und RSA ausgestattet sein. Es hat der AN sicherzustellen,
              dass die von ihm eingesetzten Fahrer oder Transporteure bei der
              Anlieferung auf der Baustelle mit geeigneter Persönlicher
              Schutzausrüstung ausgestattet sind und diese auch spätestens bei
              Hineinkommen auf das Baugelände tragen. Werden diese
              Voraussetzungen nicht erfüllt, ist der AG berechtigt, den Zugang
              zur Baustelle und die Anlieferung zu verweigern. Von daraus
              entstehenden Schäden hat der AN den AG freizustellen.
            </Typography>
          </Box>
          <Box sx={{ mb: 3 }}>
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              sx={{ fontWeight: "bold" }}
            >
              5. Mängelhaftung, Verjährungsfrist für Mängelansprüche,
              Sicherungsabtretung
            </Typography>
            <Typography
              variant="body1"
              pargraph
              sx={{ fontSize: "18px", mt: 3 }}
            >
              (1) Der AN gewährleistet die Mangelfreiheit der gelieferten
              Produkte und Waren und deren Übereinstimmung mit den zum Zeitpunkt
              der Lieferung geltenden europäischen und deutschen Normen, die
              sich insbesondere auch aus vorstehender Ziff.2. ergeben. Im Falle
              eines Mangels verpflichtet sich der AN, dem AG gem. § 439 Abs.3
              BGB auch die Kosten zu erstatten, die Letzterem durch den
              Austausch (inklusive Aus- und Einbaukosten etc.) des
              mangelbehafteten Gegenstandes oder Materials entstehen. Der AN
              verpflichtet sich ferner, dem AG von evtl.
              Schadensersatzansprüchen Dritter, die aus der Mangelhaftigkeit der
              vom AN gelieferten Waren herrühren, freizustellen.
            </Typography>
            <Typography
              variant="body1"
              pargraph
              sx={{ fontSize: "18px", mt: 3 }}
            >
              (2) Die Parteien sind sich einig, dass die vom AG vorzunehmende
              Wareneingangskontrolle die auf Baustellen übliche Sichtkontrolle
              umfasst. Weitergehende Untersuchungen, etwa mit Ultraschall oder
              anderen Geräten, sind nicht Bestandteil der üblichen
              Wareneingangskontrolle. Bei offenkundigen Mängeln ist der AG
              verpflichtet, diese innerhalb von 7 Kalendertagen nach Erhalt der
              Ware zu rügen.
            </Typography>
            <Typography
              variant="body1"
              pargraph
              sx={{ fontSize: "18px", mt: 3 }}
            >
              (3) Unbeschadet weiterer gesetzlicher Ansprüche steht es dem AG
              frei, für mangelhafte Lieferungen nach seiner Wahl ganz oder
              teilweise Nach-lieferung, Nachbesserung durch den AN oder, in
              Eilfällen auch ohne Setzen einer Nachfrist für die
              Mängelbeseitigung, Ersatz der Kosten der Mängelbeseitigung durch
              einen Drittunternehmer zu verlangen, einschließlich Ersatz der für
              Be- und Entladen, Prüfen und Aussortieren der mangelhaften
              Lieferung entstehenden Kosten.
            </Typography>
            <Typography
              variant="body1"
              pargraph
              sx={{ fontSize: "18px", mt: 3 }}
            >
              (4) Durch das jeweils erste schriftliche Nacherfüllungsverlangen
              des AG bzgl. unverjährter Mängel wird die betreffende
              Verjährungsfrist für Mängelansprüche einmalig für 6 Monate
              gehemmt, die jedoch nicht vor Ablauf der gesetzlich geltenden
              Verjährungsfrist oder der an ihrer Stelle vereinbarten Frist
              endet. Die Verjährungsfrist beginnt mit Annahme der Nachlieferung
              bzw. Nachbesserung neu zu laufen.
            </Typography>
            <Typography
              variant="body1"
              pargraph
              sx={{ fontSize: "18px", mt: 3 }}
            >
              (5) Soweit nicht anders vereinbart, verjähren die Mängelansprüche
              des AG in 5 Jahren und 2 Monaten (a) bei einem Bauwerk und (b) bei
              einer Sache, die entsprechend ihrer üblichen Verwendungsweise für
              ein Bauwerk verwendet worden ist und dessen Mangelhaftigkeit
              verursacht hat; im Übrigen in 2 Jahren.
            </Typography>
            <Typography
              variant="body1"
              pargraph
              sx={{ fontSize: "18px", mt: 3 }}
            >
              (6) Der AN tritt zur Sicherung aller aus dem Vertrag
              resultierenden Erfüllungs-, Mängelhaftungs-, Produkthaftungs- und
              Schadenersatzansprüche des AG sämtliche diesen Vertrag
              betreffenden, bestehenden und zukünftigen Vertragserfüllungs- und
              Mängelansprüche -vor allem auch
            </Typography>
            <Typography
              variant="body1"
              pargraph
              sx={{ fontSize: "18px", mt: 3 }}
            >
              auf und aus künftigen Sicherheiten-, die dem AN im Zusammenhang
              mit dem vorliegenden Bauvorhaben gegenüber seinen Lieferanten /
              Herstellern und von ihm beauftragten Planern zustehen, hiermit an
              den AG ab. Der AG nimmt die Sicherungsabtretung hiermit an. Der AN
              garantiert, dass die nach dieser Bestimmung abgetretenen Rechte
              und Ansprüche einschließlich etwaiger zugehöriger Sicherheiten
              abtretbar sind.
            </Typography>
            <Typography
              variant="body1"
              pargraph
              sx={{ fontSize: "18px", mt: 3 }}
            >
              Auf Verlangen hat der AN dem AG die abgetretenen Rechte und
              Ansprüche nachzuweisen. Der AN muss dem AG insoweit alle
              sachdienlichen Auskünfte geben und Unterlagen und Urkunden auf
              Anforderung des AG übergeben. Der AN ist jedoch bis auf Widerruf
              durch den AG ermächtigt und verpflichtet, alle Ansprüche im
              eigenen Namen und auf eigene Kosten geltend zu machen und selbst
              durchzusetzen. Die Abtretung
            </Typography>
            <Typography
              variant="body1"
              pargraph
              sx={{ fontSize: "18px", mt: 3 }}
            >
              berührt die eigenen Verpflichtungen des AN gegenüber dem AG,
              insbesondere nach Ziffer 5. AEB, nicht. Soweit und solange der AG
              den AN unmittelbar auf Erfüllung gesicherter Ansprüche in Anspruch
              nimmt, kann der AN verlangen, dass ihm eine etwa widerrufene
              Ermächtigung
            </Typography>
            <Typography
              variant="body1"
              pargraph
              sx={{ fontSize: "18px", mt: 3 }}
            >
              insoweit wieder eingeräumt wird. Soweit der AN die gesicherten
              Ansprüche befriedigt hat, kann er verlangen, dass die abgetretenen
              Rechte
            </Typography>
            <Typography
              variant="body1"
              pargraph
              sx={{ fontSize: "18px", mt: 3 }}
            >
              und Ansprüche einschließlich etwa zugehöriger Ansprüche aus
              Sicherheiten insoweit rückabgetreten werden.
            </Typography>
          </Box>
          <Box sx={{ mb: 3 }}>
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              sx={{ fontWeight: "bold" }}
            >
              6. Forderungsabtretung / Eigentumsvorbehalt /
              Leistungsverweigerungsrecht
            </Typography>
            <Typography
              variant="body1"
              pargraph
              sx={{ fontSize: "18px", mt: 3 }}
            >
              Forderungen aus Lieferung können nur mit vorheriger schriftlicher
              Zustimmung des AG an Dritte abgetreten werden. § 354a HGB bleibt
              unberührt. Spätestens mit Bezahlung der Lieferung geht das
              Eigentum auf den AG über. Ein weitergehender Eigentumsvorbehalt
              ist ausgeschlossen.
            </Typography>
            <Typography
              variant="body1"
              pargraph
              sx={{ fontSize: "18px", mt: 3 }}
            >
              Dem AN werden gegenüber Ansprüchen des AG etwaige
              Leistungsverweigerungs- und/oder Zurückbehaltungsrechte nicht
              gestattet, es sei denn, die vom AN geltend gemachten
              Gegenansprüche sind unbestritten oder rechtskräftig festgestellt
              oder entscheidungsreif.
            </Typography>
          </Box>
          <Box sx={{ mb: 3 }}>
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              sx={{ fontWeight: "bold" }}
            >
              7. Preise
            </Typography>
            <Typography
              variant="body1"
              pargraph
              sx={{ fontSize: "18px", mt: 3 }}
            >
              Die in der Beauftragung genannten Preise gelten frei
              Empfangsstelle einschließlich Verpackung, Spesen, Rollgelder usw.
              zuzüglich der derzeit gültigen gesetzlichen Umsatzsteuer. Die
              Preise sind Festpreise; § 313 BGB bleibt unberührt.
            </Typography>
          </Box>
          <Box sx={{ mb: 3 }}>
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              sx={{ fontWeight: "bold" }}
            >
              8. Rechnungen, Zahlungsbedingungen, Fälligkeit, Rechnungszugang,
              Skonto
            </Typography>
            <Typography
              variant="body1"
              pargraph
              sx={{ fontSize: "18px", mt: 3 }}
            >
              (1) Alle Rechnungen inkl. Kopien dazugehöriger
              rechnungsbegründender Anlagen sind digital oder in Papierform nach
              Lieferung unter Angabe der Auftrags-/Projektdaten und aller in
              dazugehörigen Liefernachweisen ausgeführten Daten über die
              zentrale Versandadresse beim AG einzureichen. Die Mehrwertsteuer
              ist gesondert auszuweisen. Entsprechen die Rechnungen des AN nicht
              den gesetzlichen Vorschriften, insbesondere nicht denen des
              Umsatzsteuergesetzes, ist er verpflichtet, diese zurückzunehmen
              und zu berichtigen bzw. korrekt auszustellen. Im Fall der
              Vereinbarung von Boni, Skonti und Rabatten, bei denen im Zeitpunkt
              der Rechnungserstellung die Höhe der Entgeltminderung nicht
              feststeht, ist der AN verpflichtet, in der jeweiligen Rechnung auf
              die Vereinbarung hinzuweisen. Der AN darf projektbezogen je
              Kalendermonat nur eine Sammelrechnung stellen, wenn nicht
              Abweichendes vereinbart ist. Sammelrechnungen des AN, die
              verschiedene Kostenstellen/Referenzcodes des AG betreffen, sind
              nicht zulässig..
            </Typography>
            <Typography
              variant="body1"
              pargraph
              sx={{ fontSize: "18px", mt: 3 }}
            >
              (2) Der AN garantiert, dass sämtliche von ihm eingereichten
              Rechnungen zum jeweiligen Vertrag / Bestellung in eindeutiger
              fehlerfreier Weise in Computerschrift den ihm jeweils mitgeteilten
              Referenzcode: (zum Beispiel: RC-KST-DE-802-ABCD) [dies Beispiel
              dient rein zur Veranschaulichung] enthalten werden. Ohne Angabe
              des Referenzcodes ist dem AG aufgrund der technischen
              Gegebenheiten eine elektronische Erfassung der jeweiligen Rechnung
              nicht möglich und ggf. muss die jeweils insoweit unzureichende
              Rechnung zurückgesandt werden. Die vertraglichen
              Zahlungsbedingungen bleiben davon im Übrigen unberührt. Zusätzlich
              hat der AN den AG [als Leistungsempfänger] mit dessen postalischer
              Anschrift des den Auftrag vergebenden Bereiches (Niederlassung)
              -jedoch keine Postfach-Adresse- oder die postalische Anschrift des
              statutarischen Sitzes des AG auf allen Rechnungen auszuweisen
            </Typography>
            <Typography
              variant="body1"
              pargraph
              sx={{ fontSize: "18px", mt: 3 }}
            >
              (3) Der AG ist gemäß § 315 BGB berechtigt, bei Vertragsschluss
              oder während der Durchführung des Vertrages dem AN eine zentrale
              postalische Adresse des AG schriftlich bekannt zu geben
              (telekommunikative Übermittlung/Textform ist ausreichend). Mit
              Bekanntgabe dieser postalischen Adresse hat der AN
              sicherzustellen, dass entweder (i) sämtliche ab diesem Zeitpunkt
              von ihm eingereichten Rechnungen - - inkl. Kopien dazu-gehöriger
              rechnungsbegründender Anlagen-. zu diesem Vertrag / Bestellung nur
              an diese zentrale postalische Adresse -als ausschließlich auf dem
              Postumschlag anzugebende Adresse des AG oder als Angabe im
              Adressfeld- versendet werden und (ii) weiterhin der im
              Vertrag/Bestellung des AG genannte Referenzcode eindeutig,
              fehlerfrei und in Computerschrift enthalten ist.
            </Typography>
            <Typography variant="body1" sx={{ fontSize: "18px", mt: 3 }}>
              (4) Oder der AN hat - anstelle der zentralen postalischen
              Versendung - den „digitalen Versand“ zu wählen, in dem er seine
              Rechnungen - inkl. Kopien dazugehöriger rechnungsbegründender
              Anlagen - an die im Vertrag oder sonst vom AG bekannt gegebene
              zentrale Emailadresse versendet; die zuvor genannten inhaltlichen
              und formellen Anforderungen (vor allem die Angabe des
              Referenzcodes) bleiben davon unberührt. Wählt der AN den digitalen
              Versand der Rechnungen, hat er die dafür im eInvoicing-Portal der
              EDA Baumanagement aufgeführten Bedingungen einzuhalten. Diese
              Bedingungen sind unter{" "}
              <a
                href="http://www.einvoicing.edabaumanagement.com"
                style={{
                  color: "#E2CAA2",
                  textDecoration: "underline",
                  fontStyle: "italic",
                }}
                target="_blank"
                rel="noopener noreferrer"
              >
                www.einvoicing.edabaumanagement.com
              </a>{" "}
              - zum Versand als PDF-Datei via E-Mail abrufbar. Nicht
              rechnungsbegründende Anlagen zu den jeweiligen Rechnungen (wie
              z.B. Rechnungskopien, Liefernachweise, Werbebeilagen, Mahnungen)
              oder Spam dürfen dabei weder an die zentrale postalische Adresse
              noch an die zentrale Emailadresse versendet werden. Auf Verlangen
              des AG wird der AN die Originale der Lieferscheine oder andere
              vergleichbare Dokumente, falls diese bei Anlieferung dem AG noch
              nicht übergeben wurden, gesondert per Post direkt an den AG
              schicken.
            </Typography>
            <Typography
              variant="body1"
              pargraph
              sx={{ fontSize: "18px", mt: 3 }}
            >
              (5) Sämtlicher sonstiger für die Abwicklung relevanter
              Schriftverkehr zum jeweiligen Vertrag / Bestellung (wie z.B.
              Bescheinigungen, Nachweise, Bürgschaften, Schriftverkehr) sowie
              evtl. nicht rechnungsbegründende Anlagen zu Rechnungen (z.B.
              Liefernachweise) sind - sofern sie nicht dem AG übergeben wurden -
              vom AN ausschließlich an die jeweilige für den Schriftverkehr vom
              AG bekannt gegebene Adresse zu versenden, wenn keine solche
              angegeben ist, an die im Vertragskopf/Rubrum angeführte Adresse
              des AG. Die Vertragsparteien können sich diesbezüglich auch auf
              eine telekommunikative Übermittlung bzw. einen Versand auf
              elektronischem Weg verständigen.
            </Typography>
            <Typography
              variant="body1"
              pargraph
              sx={{ fontSize: "18px", mt: 3 }}
            >
              (6) Sämtliche Zahlungen erfolgen bargeldlos. Soweit nicht
              ausdrücklich anders vereinbart, begleicht der AG die Rechnungen
              des AN nach Er-bringung der jeweils geschuldeten Leistung oder
              Teilleistung innerhalb von 30 Kalendertagen (Fälligkeit). Damit
              zudem die jeweilige Rechnung des AN Fälligkeit erlangt, ist diese
              vertragsgemäß, vollständig und prüfbar beim AG einzureiche
            </Typography>
            <Typography
              variant="body1"
              pargraph
              sx={{ fontSize: "18px", mt: 3 }}
            >
              (6) Sämtliche Zahlungen erfolgen bargeldlos. Soweit nicht
              ausdrücklich anders vereinbart, begleicht der AG die Rechnungen
              des AN nach Er-bringung der jeweils geschuldeten Leistung oder
              Teilleistung innerhalb von 30 Kalendertagen (Fälligkeit). Damit
              zudem die jeweilige Rechnung des AN Fälligkeit erlangt, ist diese
              vertragsgemäß, vollständig und prüfbar beim AG einzureichen.
            </Typography>
            <Typography
              variant="body1"
              pargraph
              sx={{ fontSize: "18px", mt: 3 }}
            >
              (7) Sofern keine abweichende Regelung getroffen wurde, wird für
              den Zeitpunkt, wann die jeweilige Rechnung des AN dem AG als
              zugegangen gilt, folgendes vereinbart: Die Ausgangssituation ist
              vergleichbar mit einer Zusendung der jeweiligen Rechnung des AN
              auf dem Postweg. Der „elektronische Briefkasten“ des AG wird an
              Samstagen, Sonntagen und/oder einen am beim Leistungsempfänger
              geltenden staatlich anerkannten Feiertag nicht „geleert“; dies
              gilt auch für den Wochentag Freitag, beginnend jeweils ab 12:00
              Uhr.
            </Typography>
            <Typography
              variant="body1"
              pargraph
              sx={{ fontSize: "18px", mt: 3 }}
            >
              (8) Gelangt die jeweilige Rechnung des AN gem. dem Vorstehenden in
              einem Zeitraum in den „elektronischen Briefkasten“ des AG, in dem
              dieser nicht geleert wird, ist davon auszugehen, dass der AG die
              Möglichkeit der Kenntnisnahme unter normalen Umständen erst am
              Morgen des nächsten/folgenden beim Leistungsempfänger gesetzlich
              geltenden Arbeitstag zu den üblichen Geschäftszeiten hat und somit
              erst zu diesem Zeitpunkt die Rechnung zugeht. Dies gilt jedoch
              nicht, wenn der AG nachweislich bereits tatsächlich Kenntnis in
              den im vorstehenden Absatz genannten Zeiträumen von der jeweiligen
              Rechnung erhalten hat. Die Regelungen der Ziff.8. Absätze 6-8 AEB
              gelten entsprechend auch für die vom AG gem. Ziff.8. Abs.3 AEB
              benannte zentrale postalische Adresse für die Rechnungszusendungen
              des AN.
            </Typography>
            <Typography
              variant="body1"
              pargraph
              sx={{ fontSize: "18px", mt: 3 }}
            >
              (9) Der Tag des Rechnungszugangs gemäß der Regelungen der Ziff.8.
              Absätze 6-8 AEB ist grundsätzlich bestimmend für den Beginn von
              Zahlungs- und Skontofristen. Wenn der AG binnen 14 Tagen, sofern
              nicht anders vereinbart, auf die jeweilige Rechnung zu deren
              Begleichung vor Eintritt der Fälligkeit eine Zahlung leistet,
              gewährt der AN 3 % Skonto; erforderlich aber auch ausreichend
              hierzu ist der Ausgleich der Forderung des ANs aus der jeweiligen
              Rechnung in berechtigter Höhe. Wendet der AG innerhalb des
              vereinbarten Fälligkeitszeitraumes gegenüber dem AN zu Recht die
              fehlende Prüfbarkeit einer dem AG zugegangenen Rechnung ein, geht
              dem AG der betreffende Skontoabzug nicht verloren; nach erneutem
              Zugang der -vom AN hergestellten- prüfbaren Rechnung beginnt die
              vereinbarte Skontofrist zu laufen.
            </Typography>
            <Typography
              variant="body1"
              pargraph
              sx={{ fontSize: "18px", mt: 3 }}
            >
              (10) Erklärt der AG innerhalb der betreffenden vereinbarten
              Skontofrist gegenüber dem AN berechtigt die Aufrechnung mit
              Gegenforderungen, - z.B. für vom AN zu vertretenem Verzugsschaden
              -, und wird dadurch der jeweilige an den AN zur Zahlung anstehende
              Betrag vermindert, ist der AG zum vereinbarten Skontoabzug aus dem
              nicht mit diesen Gegenforderungen verminderten Betrag berechtigt.
            </Typography>
            <Typography
              variant="body1"
              pargraph
              sx={{ fontSize: "18px", mt: 3 }}
            >
              (11) Im Falle eines berechtigten Einbehalts durch den AG bei
              anstehenden Zahlungen – vor allem aufgrund eines
              Leistungsverweigerungsrechts / Zurückbehaltungsrechts des AG -
              beginnen die vereinbarten Skontofristen für den einbehaltenen
              Betrag nach Wegfall des Grundes des Einbehalts mit Zugang der
              schriftlichen Aufforderung des AN, den Einbehalt auszubezahlen.
            </Typography>
            <Typography
              variant="body1"
              pargraph
              sx={{ fontSize: "18px", mt: 3 }}
            >
              (12) Aufgrund von im Betrieb des AG zentralisierten
              Zahlungsvorgängen werden grundsätzlich Donnerstags - ist
              Donnerstag [bzw. Freitag] ein gesetzlicher Feiertag, dann bereits
              Dienstags [bzw. Mittwochs] - die auszuführenden Überweisungen der
              Bank in Auftrag gegeben. Im Falle einer Zahlung mittels
              Banküberweisung vereinbaren die Parteien daher ergänzend, dass die
              Zahlung dann als rechtzeitig gilt, wenn der Überweisungs-auftrag
              des AG spätestens am Donnerstag- ist Donnerstag [bzw. Freitag] ein
              gesetzlicher Feiertag, dann bereits am Dienstag [bzw. am Mittwoch]
              - der Kalenderwoche bei der Bank des AG eingeht, in der die
              vereinbarte Zahlungs- bzw. Skontofrist abläuft, und der Geldbetrag
              dem Konto des AN bei üblicher Abwicklung des Bankgeschäfts durch
              die Bank gerechnet ab Eingang des Überweisungsantrages bei der
              Bank -innerhalb von 1 Arbeitstag bei Inlandsüberweisungen und 4
              Arbeitstagen bei Auslandsüberweisungen- gutgeschrieben wird. Als
              Kalenderwoche gilt hier der Zeit-raum von Montag 0 Uhr bis Sonntag
              24 Uhr, als Arbeitstage gelten die Tage – ohne gesetzliche
              Feiertage - von Montag bis inkl. Freitag.
            </Typography>
          </Box>
          <Box sx={{ mb: 3 }}>
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              sx={{ fontWeight: "bold" }}
            >
              9. Sicherheitsleistung des AN, Kündigung aus wichtigem Grund
            </Typography>
            <Typography
              variant="body1"
              pargraph
              sx={{ fontSize: "18px", mt: 3 }}
            >
              (1) Sofern es ausdrücklich vereinbart ist, kann der AG als
              Sicherheit für die Erfüllung der Verpflichtungen des AN aus dem
              Vertrag, insbesondere für die vertragsgemäße Ausführung der
              Leistung einschließlich Abrechnung, für Schadensersatz- und
              Minderungsansprüche, für Vertragsstrafe, für die Erstattung von
              Überzahlungen, jeweils zuzüglich Zinsen sowie für die Rückzahlung
              von Voraus- oder Anzahlungen - soweit der AN hierfür nicht
              gesonderte Vorauszahlungs- bzw. Anzahlungsbürgschaft(en) gestellt
              hat - vom AN eine selbstschuldnerische, unbefristete, dem
              deutschen Recht unterliegende Vertragserfüllungsbürgschaft über 5
              % der Brutto-Auftragssumme (Netto-Auftragssumme zzgl. gesetzliche
              Umsatzsteuer) verlangen. Mängelrechte/-ansprüche (im
              Gewährleistungsstadium nach Gefahrenübergang geltend gemacht) sind
              von dieser Bürgschaft nicht abgedeckt.
            </Typography>
            <Typography
              variant="body1"
              pargraph
              sx={{ fontSize: "18px", mt: 3 }}
            >
              (2) Die selbstschuldnerische Bürgschaft muss dem Muster des AG
              entsprechen und unter Verzicht auf die Einreden der Vorausklage (§
              771 BGB) sowie unter Ausschluss der Hinterlegungsbefugnis
              ausgestellt sein. Eine Hinterlegung ist für den Bürgen dann nicht
              ausgeschlossen, wenn und soweit er aus gesetzlichen Gründen (wie
              z.B. gem. § 853 ZPO, § 432 Abs.1 BGB) verpflichtet ist, den vom
              Bürgschaftsgläubiger aus der Bürgschaft nach Inanspruchnahme
              geforderten Betrag zu hinterlegen. Diese Bürgschaft darf keine
              Bedingung enthalten, die den Bürgen zur Zahlung auf erstes
              Anfordern verpflichtet.
            </Typography>
            <Typography
              variant="body1"
              pargraph
              sx={{ fontSize: "18px", mt: 3 }}
            >
              In der Bürgschaft ist weiterhin aufzunehmen, dass die Ansprüche
              aus dieser Bürgschaft in der Frist des § 195 BGB verjähren, jedoch
              nicht vor Eintritt der Verjährung der mit dieser Bürgschaft
              gesicherten Ansprüche, spätestens jedoch nach der Höchstfrist des
              § 202 Abs. 2 BGB nach dem gesetzlichen Verjährungsbeginn; die ggf.
              damit einhergehende Verjährungsverlängerung des
              Bürgschaftsanspruches gilt jedoch nicht für die Fälle, wenn nach
              Abschluss des Bürgschaftsvertrages der AN - ohne Zustimmung des
              Bürgen - (i) einen Verjährungsverzicht bzgl. der von der
              Bürgschaft gesicherten Ansprüche erklärt oder (ii) in sonstiger
              Weise durch Rechtsgeschäft die Verjährung dieser gesicherten
              Ansprüche erweitert. Auch ist in der Bürgschaft aufzunehmen, dass
              der Bürge nur schriftlich und nur auf Zahlung von Geld in Anspruch
              genommen werden kann sowie das - soweit nicht zwingende
              gesetzliche Bestimmungen entgegenstehen - Gerichtsstand für alle
              Streitigkeiten aus der Bürgschaft der Sitz des den Auftrag
              vergebenden Bereiches (Niederlassung) des AG ist.
            </Typography>
            <Typography
              variant="body1"
              pargraph
              sx={{ fontSize: "18px", mt: 3 }}
            >
              Klargestellt wird, dass der AN eine solche Bürgschaft in einem für
              den AG zumutbaren Umfang auch durch Vorlage von mehreren sich
              ergänzen-den Höchstbetragsbürgschaften stückeln darf; es darf sich
              dabei nicht um sog. Teilbürgschaften handeln. Sich ergänzende
              Höchstbetragsbürgschaften müssen dann jeweils für sich den
              vereinbarten Anforderungen und die Summe der jeweiligen sich
              ergänzenden Höchstbeträge muss dem (Gesamt-) Betrag der
              vereinbarten Sicherheitsleistung entsprechen. Mitbürgschaften und
              insbesondere § 769 BGB sind ausgeschlossen. (3) Sofern und soweit
              der AN die vertragliche Pflicht zur Vorlage einer Bürgschaft nicht
              erfüllt, ist der AG berechtigt, vom Guthaben bzw. fälligen
              Forderungen des AN aus dem Vertrag Beträge bis zum Erreichen der
              vereinbarten Bürgschaftshöhe zurückzubehalten. Wenn der AN trotz
              Setzung einer angemessenen Nachfrist mit Kündigungsandrohung durch
              den AG die vereinbarte Bürgschaft nicht vorlegt und der AG auch
              ein Zurückbehaltungsrecht in entsprechender Höhe aus offenen
              Beträgen aus dem Vertrag bis zum Ablauf der Nachfrist nicht
              geltend machen konnte, ist der AG darüber hinaus dazu berechtigt,
              den Vertrag aus wichtigem Grund zu kündigen.
            </Typography>
          </Box>
          <Box sx={{ mb: 3 }}>
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              sx={{ fontWeight: "bold" }}
            >
              10. Schutzrechte, Datenschutz
            </Typography>
            <Typography
              variant="body1"
              pargraph
              sx={{ fontSize: "18px", mt: 3 }}
            >
              Der AN übernimmt die ausschließliche Haftung gegenüber Dritten
              wegen vom AN zu verantwortender Verletzung gewerblicher
              Schutzrechte und verpflichtet sich, diesbezüglich den AG von
              jeglichen Ansprüchen Dritter freizustellen.
            </Typography>
            <Typography
              variant="body1"
              pargraph
              sx={{ fontSize: "18px", mt: 3 }}
            >
              Der AN wird darauf hingewiesen, dass im Rahmen der üblichen
              kaufmännischen Abwicklung des Auftrags vom Datenschutzgesetz
              geschützte, personenbezogene Daten des AN verarbeitet werden. Die
              Einwilligung des AN hierzu gilt als erteilt, sofern nicht
              innerhalb 6 Tagen nach Zugang des Auftrags schriftlich
              widersprochen wird.
            </Typography>
          </Box>
          <Box sx={{ mb: 3 }}>
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              sx={{ fontWeight: "bold" }}
            >
              11. Pressemitteilungen, Schweigepflicht, Vertragsstrafe,
              Schadenersatz bei Wettbewerbsverstößen, Compliance,
              Sanktionsklausel, Sorgfaltspflichten in der Lieferkette,
              Auditierung
            </Typography>
            <Typography
              variant="body1"
              pargraph
              sx={{ fontSize: "18px", mt: 3 }}
            >
              (1) Veröffentlichungen über die Leistungen des AN oder Teile des
              betreffenden Bauvorhabens sind nur nach vorheriger schriftlicher
              Zustimmung des AG zulässig. Evtl. im Zusammenhang mit der Leistung
              bekanntwerdende Betriebsgeheimnisse und vertrauliche Angaben des
              AG dürfen nicht an Dritte weitergegeben werden. Im Falle eines
              Verstoßes hat der AG u. a. das Recht auf Schadensersatz. Für jeden
              Fall der vorsätzlichen Zuwiderhandlung gegen diese Bestimmungen
              verpflichtet sich der AN, eine Vertragsstrafe in Höhe von 0,2 %
              der Netto-Auftragssumme, mindestens jedoch 5.000,- EURO an den AG
              zu bezahlen. Die Geltendmachung weitergehender
              Schadensersatzansprüche bleibt vorbehalten. Die verwirkte
              Vertragsstrafe wird angerechnet. Der AN darf eigene Firmenschilder
              am Bau oder in dessen unmittelbarer Umgebung nicht anbringen. (2)
              Wenn der AN aus Anlass der Auftragsvergabe nachweislich eine
              Abrede getroffen hat, die eine unzulässige
              Wettbewerbsbeschränkung, insbesondere im Sinn von § 1 GWB
              darstellt, oder ergibt sich, dass von einer unzulässigen
              Wettbewerbsbeschränkung in Kenntnis ihres Ur-sprungs bei der
              Preisgestaltung Gebrauch gemacht worden ist, hat er 3 % der
              Nettoauftragssumme an den AG zu bezahlen, es sei denn, dass ein
              Schaden in anderer Höhe nachgewiesen wird. Der Nachweis, dass ein
              Schaden oder eine Wertminderung überhaupt nicht entstanden oder
              wesentlich niedriger ist, als die Vertragsstrafe oder die
              Pauschale, obliegt dem AN, der Nachweis eines höheren Schadens dem
              AG. Vorstehendes gilt auch, wenn der Vertrag gekündigt wird oder
              bereits erfüllt ist. Den Handlungen des AN selbst stehen
              Handlungen von Personen gleich, die von ihm beauftragt oder für
              ihn tätig sind. Sonstige Ansprüche und Rechte des AG, z.B. eine
              Kündigung aus wichtigem Grund, bleiben unberührt. (3) Der AN
              verpflichtet sich gegenüber dem AG, im Rahmen seiner Tätigkeiten
              für den AG, die im Lieferantenkodex von EDA Baumanagement
              dargelegten Verhaltensgrundsätze einzuhalten. Dieser
              Lieferantenkodex ist unter [{" "}
              <a
                href="http://www.eda-baumanagement.com"
                style={{
                  color: "#E2CAA2",
                  textDecoration: "underline",
                  fontStyle: "italic",
                }}
                target="_blank"
                rel="noopener noreferrer"
              >
                www.eda-baumanagement.com
              </a>{" "}
              Business Compliance ] abrufbar. Sollte der AN über eigene
              Compliance Richtlinien verfügen, ist dies dem AG mitzuteilen.
            </Typography>
            <Typography
              variant="body1"
              pargraph
              sx={{ fontSize: "18px", mt: 3 }}
            >
              (4) Sanktionierte Person gemäß den nachfolgenden Regelungen ist
              eine natürliche oder juristische Person, gegen die gemäß jeweils
              anwendbarem Recht (i) der Vereinten Nationen, (ii) der Vereinigten
              Staaten von Amerika, (iii) des Vereinigten Königreichs oder (iv)
              der Europäischen Union Sanktionen, einschließlich Sektorsanktionen
              (nachfolgend einzeln oder zusammen „Sanktionen”), verhängt worden
              sind. Der AN erklärt hiermit, weder eine Sanktionierte Person noch
              sonst wie eine natürliche oder juristische Person zu sein, auf die
              Sanktionen anwendbar sind. Im Falle der Unrichtigkeit einer der
              vorstehenden Erklärungen ist der AG berechtigt, den Vertrag
              fristlos aus wichtigem Grund zu kündigen und der AN wird den AG
              von allen hieraus entstehenden Schäden freistellen. Der AG ist
              außerdem berechtigt, den Vertrag fristlos zu kündigen, wenn
              Sanktionen nach Wirksamwerden des Vertrages gegen den AN verhängt
              werden oder auf ihn Anwendung finden.
            </Typography>
            <Typography
              variant="body1"
              pargraph
              sx={{ fontSize: "18px", mt: 3 }}
            >
              (5) Der AN steht dafür ein, dass er den jeweiligen Auftrag unter
              Beachtung der menschenrechts- und umweltbezogenen Schutzgüter des
              Lieferkettensorgfaltspflichtengesetzes (LkSG) und der in diesem
              Zusammenhang stehenden Grundsatzerklärung des AG ausführt. Der AN
              verpflichtet sich, die übernommenen Verpflichtungen, bezogen auf
              die Einhaltung wesentlicher Anforderungen an menschenrechts- und
              umweltbezogenen Vorgaben des LkSG entsprechend vertraglich
              weiterzugeben und angemessene Anstrengungen zu unternehmen, um die
              Einhaltung der genannten Pflichten des AN durch seine Lieferanten
              sicherzustellen. Auf Verlangen des AG hat der AN die Einhaltung
              der entsprechenden Verpflichtungen durch Beschaffung und
              Übermittlung geeigneter Dokumente nachzuweisen. Verstöße des AN
              gegen die übernommenen Verpflichtungen berechtigen den AG zur
              fristlosen Kündigung des Vertrages aus wichtigem Grund, es sei
              denn, den AN trifft hieran kein Verschulden.
            </Typography>
            <Typography
              variant="body1"
              pargraph
              sx={{ fontSize: "18px", mt: 3 }}
            >
              (6) Der AG kann die Einhaltung des in Ziff. 11.5 in Bezug
              genommenen LkSG überprüfen, vorausgesetzt, der AG kündigt die
              Prüfung 20 Tage im Voraus schriftlich an. Der AN verpflichtet
              sich, bei der Überprüfung durch den AG diesem behilflich zu sein,
              den AG in angemessenem Rahmen zu unterstützen und dem AG
              hinreichend Zugang zu Informationen zu gewähren, wobei der AG sich
              zur Wahrung der Betriebs- und Geschäfts-geheimnisse des AN
              (insbesondere des Datenschutzgesetzes und des Gesetzes zum Schutz
              von Geschäftsgeheimnissen) verpflichtet. Die Über-prüfung erfolgt
              zu den üblichen Geschäftszeiten. Der AN erklärt sich damit
              einverstanden, dass der AG nicht für Kosten einzustehen hat, die
              ihm durch die Mithilfe bei der Überprüfung entstehen.
            </Typography>
          </Box>
          <Box sx={{ mb: 3 }}>
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              sx={{ fontWeight: "bold" }}
            >
              12. Verbraucherstreitbeilegung, Erfüllungs- und Erfolgsort,
              Gerichtsstand, anwendbares Recht, Vertragssprache, Salvatorische
              Klausel
            </Typography>
            <Typography
              variant="body1"
              pargraph
              sx={{ fontSize: "18px", mt: 3 }}
            >
              (1) Der AG weist darauf hin, sofern es nicht im Einzelfall
              ausdrücklich vereinbart ist, dass er nicht bereit ist, an
              Streitbeilegungsverfahren vor <br />
              einer Verbraucherschlichtungsstelle teilzunehmen.
            </Typography>
            <Typography
              variant="body1"
              pargraph
              sx={{ fontSize: "18px", mt: 3 }}
            >
              (2) Erfüllungs- und Erfolgsort für die Lieferungen und Leistungen
              des AN ist die angegebene Empfangsstelle/Übergabeort (Baustelle,
              Betriebs-stätte usw.); es gilt Bringschuld des AN, sofern nicht
              ausdrücklich Abweichendes vereinbart ist.
            </Typography>
            <Typography
              variant="body1"
              pargraph
              sx={{ fontSize: "18px", mt: 3 }}
            >
              Soweit nicht zwingende gesetzliche Bestimmungen entgegenstehen,
              ist Gerichtsstand für alle Streitigkeiten aus dem Vertrag, nach
              Wahl des AG, der Ort des Bauvorhabens bzw. der Sitz des
              auftraggebenden Bereichs (Niederlassung) des AG.
            </Typography>
            <Typography
              variant="body1"
              pargraph
              sx={{ fontSize: "18px", mt: 3 }}
            >
              (3) Es gilt - unter Ausschluss des UN-Kaufrechtes und Ausschluss
              der Verweisungsnormen des Internationalen Privatrechts - deutsches
              Recht. Soweit keine abweichende Vereinbarung vorliegt, gelten
              nachrangig zu diesen Geschäftsbedingungen die VOL/B in der bei
              Vertragsschluss jeweils gültigen Fassung.
            </Typography>
            <Typography
              variant="body1"
              pargraph
              sx={{ fontSize: "18px", mt: 3 }}
            >
              (4) Die Verhandlungs- und Vertragssprache ist Deutsch. Das
              beinhaltet auch, dass die Vertragsabwicklung einschließlich der
              Leistungsabwicklung mündlich und schriftlich in deutscher Sprache
              geführt wird.
            </Typography>
            <Typography
              variant="body1"
              pargraph
              sx={{ fontSize: "18px", mt: 3 }}
            >
              (5) Sollten einzelne Bestimmungen dieses Vertrages unwirksam sein
              oder unwirksam werden, so steht dies der Wirksamkeit der übrigen
              Bestimmungen nicht entgegen. Die Parteien verpflichten sich,
              unwirksame Klauseln durch wirksame Vereinbarungen zu ersetzen, die
              nach Sinn und Zweck den entfallenen Regelungen weitestgehend
              entsprechen. Dies gilt entsprechend für die Schließung etwaiger
              Lücken.
            </Typography>
          </Box>
        </Box>
        {pdfData.map((pdf, index) => (
          <Accordion
            key={index}
            disableGutters
            elevation={0}
            square
            sx={{
              backgroundColor: "#073845",
              borderTop: index === 0 ? "none" : "0.5px solid #E2CAA2", // Remove top border for the first accordion
              borderBottom:
                index === pdfData.length - 1 ? "none" : "1px solid #E2CAA2", // Remove bottom border for the last accordion
              borderLeft: "none", // No left border
              borderRight: "none", // No right border
              "&:before": { display: "none" }, // Removes default line before accordion
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "#E2CAA2" }} />}
              sx={{
                backgroundColor: "#073845",
                color: "#073845",
                cursor: "pointer",
              }}
            >
              <Typography sx={{ color: "#E2CAA2", fontSize: "18px" }}>
                {pdf.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              onClick={() =>
                window.open(pdf.link, "_blank", "noopener noreferrer")
              } // Opens the PDF in a new tab
              sx={{
                borderTop: "0.5px solid #E2CAA2", // Border between summary and details
                backgroundColor: "#073845", // Optional: Add background to details for contrast
                cursor: "pointer", // Indicates clickability
              }}
            >
              <Typography
                sx={{
                  color: "#E2CAA2",
                  textDecorationLine: "underline",
                  fontSize: "16px",
                }}
              >
                <strong>{pdf.subtitle}</strong>
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </>
  );
};
export default AGB;
