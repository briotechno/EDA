import { Box, Typography } from "@mui/material";

const Datenschutz = () => {
  return (
    <Box sx={{
      maxWidth: "100%",
      margin: "auto",
      backgroundColor: "#073845",
      padding: "2% 10%", // Adds 10% padding on the left and right
    }}>
      <Box sx={{ display: "flex", gap: "30px", flexDirection: "column", color: "#E2CAA2", fontFamily: "Lato" }}>
        <Box sx={{ display: "flex", gap: "20px", flexDirection: "column" }}>
          <Typography fontSize={"35px"} color="#E2CAA2" fontWeight={"bold"}>
            Datenschutz
          </Typography>
          <Typography fontSize={"25px"} color="#E2CAA2" fontWeight={"bold"}>
            Datenschutzinformation nach der DS-GVO
          </Typography>
        </Box>
        <Box>
          <Box sx={{ mb: 3 }}>
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              sx={{ fontWeight: "bold" }}
            >
              1. Verantwortliche Stelle
            </Typography>
            <Typography variant="body1" pargraph sx={{ fontSize: "18px" }}>
              Die EDA – Baumanagement GmbH, Eppeleinstr. 2, 92353 Postbauer
              Heng, ist als Betreiberin dieser Webseite:{" "}
              <a
                href="http://www.eda-baumanagement.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#E2CAA2", textDecoration: "underline" }} //
              >
                http://www.eda-baumanagement.com
              </a>{" "}
              verantwortliche Stelle (Verantwortlicher) im Sinne der
              Europäischen Datenschutz-Grundverordnung (DS-GVO), die allein oder
              gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung
              von personenbezogenen Daten (im Folgenden "Daten") entscheidet.
            </Typography>
          </Box>
          <Box sx={{ mb: 3 }}>
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              sx={{ fontWeight: "bold" }}
            >
              2. Verarbeitung personenbezogener Daten
            </Typography>
            <Typography variant="body1" pargraph sx={{ fontSize: "18px" }}>
              Personenbezogene Daten sind nach der DS-GVO alle Informationen,
              die sich auf eine identifizierte oder identifizierbare natürliche
              Person (betroffene Person) beziehen. Identifizierbar ist eine
              natürliche Person, wenn sie direkt oder indirekt, insbesondere
              mittels Zuordnung zu einer Kennung (wie Name, Adresse,
              Telefonnummer, E-Mail-Adresse, IP-Adresse, Standortdaten oder
              besondere Merkmale wie genetische, wirtschaftliche und soziale
              Identität dieser natürlichen Person) identifiziert werden kann.
              Unter Verarbeitung ist jeder mit oder ohne Hilfe automatisierter
              Verfahren ausgeführter Vorgang oder jede Vorgangsreihe im
              Zusammenhang mit Daten zu verstehen. Dazu gehören insbesondere das
              Erheben, das Erfassen, die Organisation, das Ordnen, die
              Speicherung, die Anpassung oder Veränderung, das Auslesen, das
              Abfragen, die Verwendung, die Offenlegung durch Übermittlung, die
              Verbreitung oder Bereitstellung, der Abgleich, die Verknüpfung,
              die Einschränkung, das Löschen oder die Vernichtung. Für die
              Nutzung unserer Webseite ist es grundsätzlich nicht erforderlich,
              dass Sie Daten angeben. In bestimmten Fällen benötigen wir jedoch
              Ihren Namen und Ihre Adresse sowie weitere Angaben, damit wir die
              gewünschten Dienstleistungen erbringen können. Gleiches gilt
              beispielsweise für die Zusendung von Informationsmaterial und
              bestellten Waren oder für die Beantwortung individueller Fragen.
              Wo dies erforderlich ist, weisen wir Sie entsprechend darauf hin.
              Darüber hinaus verarbeiten wir nur Daten, die Sie uns freiwillig
              zur Verfügung stellen und ggf. solche, die wir automatisch beim
              Besuch unserer Webseite erheben (z. B. IP-Adresse und die Namen
              der von Ihnen aufgerufenen Seiten, des von Ihnen verwendeten
              Browsers und Ihres Betriebssystems, Datum und Uhrzeit des Zugangs,
              verwendete Suchmaschinen, Namen herunter geladener Dateien).
              Sofern Sie Service-Leistungen in Anspruch nehmen, werden in der
              Regel nur solche Daten erhoben, die wir zur Erbringung der
              Leistungen benötigen. Soweit wir Sie um weitergehende Daten
              bitten, handelt es sich um freiwillige Informationen. Die
              Verarbeitung Daten erfolgt ausschließlich zur Erfüllung der
              nachgefragten Dienstleistung und zur Wahrung eigener berechtigter
              Geschäftsinteressen
            </Typography>
          </Box>
          <Box sx={{ mb: 3 }}>
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              sx={{ fontWeight: "bold" }}
            >
              3. Schutz Ihrer personenbezogenen Daten
            </Typography>
            <Typography variant="body1" pargraph sx={{ fontSize: "18px" }}>
              Wir freuen uns über Ihr Interesse an unserem Unternehmen und
              unseren Produkten bzw. Dienstleistungen und möchten, dass Sie sich
              beim Besuch unserer Webseite auch hinsichtlich des Schutzes Ihrer
              Daten sicher fühlen. Denn wir nehmen den Schutz Ihrer Daten sehr
              ernst. Die Beachtung der Bestimmungen der DS-GVO und des
              Bundesdatenschutzgesetzes in seiner jeweils gültigen Fassung ist
              für uns eine Selbstverständlichkeit. Wir haben technische und
              organisatorische Maßnahmen getroffen, die sicherstellen, dass die
              datenschutz-rechtlichen Vorschriften sowohl von uns als auch von
              den von uns beauftragten externen Dienstleistern beachtet werden.
              Unsere Mitarbeiterinnen und Mitarbeiter sowie die von uns
              beauftragten Dienstleistungsunternehmen sind von uns zur
              Verschwiegenheit und zur Einhaltung der Bestimmungen der DS-GVO
              und des Bundesdatenschutzgesetzes in seiner jeweils gültigen
              Fassung verpflichtet. Im Rahmen unser Informationspflichten
              möchten wir diese Datenschutzinformation so transparent wie
              möglich gestalten. Dazu stellen wir im Folgenden die Zweckbindung
              der Verarbeitung Ihrer Daten, den Einsatz von
              Tracking-/Analyse-Tools, den Einsatz von Cookies und den Einsatz
              Social-Media-Plugins dar.
            </Typography>
          </Box>
          <Box sx={{ mb: 3 }}>
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              sx={{ fontWeight: "bold" }}
            >
              4. Zweckbindung der Verarbeitung personenbezogener Daten
            </Typography>
            <Typography variant="body1" pargraph sx={{ fontSize: "18px" }}>
              Die von Ihnen zur Verfügung gestellten Daten verarbeiten wir
              entsprechend der Grundsätze der Datensparsamkeit und der
              Zweckbindung. Der Grundsatz der Zweckbindung besagt, dass Daten
              für festgelegte, eindeutige und legitime Zwecke erhoben werden und
              in einer mit diesen Zwecken nicht vereinbarenden Weise
              weiterverarbeitet werden dürfen. Eine Weiterverarbeitung für im
              öffentlichen Interesse liegende Archivzwecke, für
              wissenschaftliche oder historische Forschungszwecke oder für
              statistische Zwecke gilt nicht als unvereinbar mit den
              ursprünglichen Zwecken. Grundsätzlich verarbeiten wir Ihre Daten
              zum Zweck der Beantwortung Ihrer Anfragen, zur Bearbeitung Ihrer
              Aufträge oder zur Verschaffung Ihres Zugangs zu bestimmten
              Informationen oder Angeboten. Zur Pflege der Kundenbeziehungen
              kann es außerdem erforderlich sein, dass wir oder ein von uns
              beauftragtes Dienstleistungsunternehmen diese Daten verwenden, um
              Sie über Produktangebote zu informieren oder um Online-Umfragen
              durchzuführen, um den Aufgaben und Anforderungen unserer Kunden
              besser gerecht zu werden. Wir werden die von Ihnen online zur
              Verfügung gestellten Daten nur für die Ihnen mitgeteilten Zwecke
              verarbeiten. Eine Weitergabe Ihrer Daten an Dritte erfolgt nicht
              ohne Ihre ausdrückliche Einwilligung. Erhebungen von Daten sowie
              deren Übermittlung an auskunftsberechtigte, staatliche
              Institutionen und Behörden erfolgen nur im Rahmen der
              einschlägigen Gesetze bzw. sofern wir durch eine gerichtliche
              Entscheidung dazu verpflichtet sind. Selbstverständlich
              respektieren wir es, wenn Sie uns Ihre Daten nicht zur
              Unterstützung unserer Kundenbeziehung (insbesondere für
              Direktmarketing oder zu Marktforschungszwecken) überlassen wollen.
              Wir werden Ihre Daten weder an Dritte verkaufen noch anderweitig
              vermarkten, sofern Sie uns hierzu keine Einwilligung erteilt
              haben.
            </Typography>
          </Box>
          <Box sx={{ mb: 3 }}>
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              sx={{ fontWeight: "bold" }}
            >
              5. Daten, die automatisch beim Besuch unserer Webseite erfasst
              werden
            </Typography>
            <Typography variant="body1" pargraph sx={{ fontSize: "18px" }}>
              Bei der Nutzung unserer Webseite können u. U. aus
              organisatorischen und technischen Gründen folgende Daten
              verarbeitet werden: die Namen der von Ihnen aufgerufenen Seiten,
              des von Ihnen verwendeten Browsers und Ihres Betriebssystems,
              Datum und Uhrzeit des Zugangs, verwendete Suchmaschinen, Namen
              herunter geladener Dateien und ihre IP-Adresse.
            </Typography>
          </Box>
          <Box sx={{ mb: 3 }}>
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              sx={{ fontWeight: "bold" }}
            >
              6. Cookies
            </Typography>
            <Typography variant="body1" pargraph sx={{ fontSize: "18px" }}>
              Wenn Sie eine unserer Websites besuchen, kann es sein, dass wir
              Informationen in Form eines (Session-) Cookies auf Ihrem Computer
              ablegen. Cookies sind kleine Text-Dateien, die von einem Webserver
              an Ihren Browser gesendet und auf die Festplatte Ihres Computers
              gespeichert werden. Dabei werden außer der
              Internetprotokoll-Adresse keinerlei persönliche Daten des Nutzers
              gespeichert. Diese Informationen dienen dazu, Sie bei Ihrem
              nächsten Besuch auf unseren Webseiten automatisch wiederzuerkennen
              und Ihnen die Navigation zu erleichtern. Cookies erlauben es uns
              beispielsweise, eine Webseite Ihren Interessen anzupassen oder Ihr
              Kennwort zu speichern, damit Sie es nicht jedes Mal neu eingeben
              müssen. Selbstverständlich können Sie unsere Websites auch ohne
              Cookies betrachten. Wenn Sie nicht möchten, dass wir Ihren
              Computer wieder erkennen, können Sie das Speichern von Cookies auf
              Ihrer Festplatte verhindern, indem Sie in Ihren
              Browser-Einstellungen "keine Cookies akzeptieren" wählen. Wie das
              im Einzelnen funktioniert, entnehmen Sie bitte der Anleitung Ihres
              Browser-Herstellers. Wenn Sie keine Cookies akzeptieren, kann
              dieses aber zu Funktionseinschränkungen unserer Angebote führen.
            </Typography>
          </Box>
          <Box sx={{ mb: 3 }}>
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              sx={{ fontWeight: "bold" }}
            >
              7. Webanalyse durch MATOMO (ehemals PIWIK)
            </Typography>
            <Typography
              variant="body1"
              pargraph
              sx={{ mb: 1, mt: 2, fontSize: "22px" }}
            >
              <strong>Umfang der Verarbeitung personenbezogener Daten</strong>
            </Typography>
            <Typography variant="body1" pargraph sx={{ fontSize: "18px" }}>
              Wir nutzen auf unserer Website das Open-Source-Software-Tool
              Google zur Analyse des Surfverhaltens unserer Nutzer. Die Software
              setzt ein Cookie auf dem Rechner der Nutzer (zu Cookies siehe
              bereits oben). Werden Einzelseiten unserer Website aufgerufen, so
              werden folgende Daten gespeichert:
            </Typography>
            <ul style={{ fontSize: "20px" }}>
              <li>
                Die Website, von der der Nutzer auf die aufgerufene Webseite
                gelangt ist (Referrer)
              </li>
              <li>
                Die Unterseiten, die von der aufgerufenen Webseite aus
                aufgerufen werden
              </li>
              <li>Die Verweildauer auf der Webseite</li>
              <li>Die Häufigkeit des Aufrufs der Webseite</li>
            </ul>
            <Typography variant="body1" pargraph sx={{ fontSize: "18px" }}>
              Die Software läuft dabei ausschließlich auf den Servern unserer
              Webseite. Eine Speicherung der personenbezogenen Daten der Nutzer
              findet nur dort statt. Eine Weitergabe der Daten an Dritte erfolgt
              nicht. Die Software ist so eingestellt, dass die IP-Adressen nicht
              vollständig gespeichert werden, sondern 2 Bytes der IP-Adresse
              maskiert werden (Bsp.: 192.168.xxx.xxx). Auf diese Weise ist eine
              Zuordnung der gekürzten IP-Adresse zum aufrufenden Rechner nicht
              mehr möglich.
            </Typography>
            <Typography
              variant="body1"
              pargraph
              sx={{ mb: 1, mt: 2, fontSize: "22px" }}
            >
              <strong>
                Rechtsgrundlage für die Verarbeitung personenbezogener Daten
              </strong>
            </Typography>
            <Typography variant="body1" pargraph sx={{ fontSize: "18px" }}>
              Rechtsgrundlage für die Verarbeitung der personenbezogenen Daten
              der Nutzer ist Art. 6 Abs. 1 lit. f DS-GVO.
            </Typography>
            <Typography
              variant="body1"
              pargraph
              sx={{ mb: 1, mt: 2, fontSize: "22px" }}
            >
              <strong>Zweck der Datenverarbeitung</strong>
            </Typography>
            <Typography variant="body1" pargraph sx={{ fontSize: "18px" }}>
              Die Verarbeitung der personenbezogenen Daten der Nutzer ermöglicht
              uns eine Analyse des Surfverhaltens unserer Nutzer. Wir sind in
              durch die Auswertung der gewonnen Daten in der Lage, Informationen
              über die Nutzung der einzelnen Komponenten unserer Webseite
              zusammenzustellen. Dies hilft uns dabei unsere Webseite und deren
              Nutzerfreundlichkeit stetig zu verbessern. In diesen Zwecken liegt
              auch unser berechtigtes Interesse in der Verarbeitung der Daten
              nach Art. 6 Abs. 1 lit. f DS-GVO. Durch die Anonymisierung der
              IP-Adresse wird dem Interesse der Nutzer an deren Schutz
              personenbezogener Daten hinreichend Rechnung getragen.
            </Typography>
            <Typography
              variant="body1"
              pargraph
              sx={{ mb: 1, mt: 2, fontSize: "22px" }}
            >
              <strong>Dauer der Speicherung</strong>
            </Typography>
            <Typography variant="body1" pargraph sx={{ fontSize: "18px" }}>
              Die Daten werden gelöscht, sobald sie für unsere
              Aufzeichnungszwecke nicht mehr benötigt werden. In unserem Fall
              ist dies nach 180 Tagen der Fall.
            </Typography>
            <Typography
              variant="body1"
              pargraph
              sx={{ mb: 1, mt: 2, fontSize: "22px" }}
            >
              <strong>Widerspruchs- und Beseitigungsmöglichkeit</strong>
            </Typography>
            <Typography
              variant="body1"
              pargraph
              sx={{ fontSize: "18px", mb: 3 }}
            >
              Cookies werden auf dem Rechner des Nutzers gespeichert und von
              diesem an unserer Seite übermittelt. Daher haben Sie als Nutzer
              auch die volle Kontrolle über die Verwendung von Cookies. Durch
              eine Änderung der Einstellungen in Ihrem Internetbrowser können
              Sie die Übertragung von Cookies deaktivieren oder einschränken.
              Bereits gespeicherte Cookies können jederzeit gelöscht werden.
              Dies kann auch automatisiert erfolgen. Werden Cookies für unsere
              Website deaktiviert, können möglicherweise nicht mehr alle
              Funktionen der Website vollumfänglich genutzt werden. Wir bieten
              unseren Nutzern auf unserer Website die Möglichkeit eines Opt-Out
              aus dem Analyseverfahren. Hierzu müssen Sie dem entsprechenden
              Link folgen. Auf diese Weise wird ein weiteres Cookie auf ihrem
              System gesetzt, der unserem System signalisiert die Daten des
              Nutzers nicht zu speichern. Löscht der Nutzer das entsprechende
              Cookie zwischenzeitlich vom eigenen System, so muss er den
              Opt-Out-Cookie erneut setzten. Nähere Informationen zu den
              Privatsphäreeinstellungen der Google Software finden Sie unter
              folgendem Link:{" "}
              <a href="https://workspace.google.com/security/"  style={{ color: "#E2CAA2", textDecoration: "underline" }} >
                https://workspace.google.com/security/
              </a>
            </Typography>
            <Box sx={{ mb: 3 }}>
              <Typography
                variant="h5"
                component="h2"
                gutterBottom
                sx={{ fontWeight: "bold" }}
              >
                8. Social-Media
              </Typography>
              <Typography variant="body1" pargraph sx={{ fontSize: "18px" }}>
                Neben unserer Webseite nutzen wir auch Präsenzen folgender
                Social-Media-Anbieter:
              </Typography>
              <Typography variant="body1" component={"ul"}>
                <Typography
                  variant="body1"
                  component={"li"}
                  sx={{ fontSize: "20px", mt: 1 }}
                >
                  facebook.com, welche durch das Unternehmen Facebook Ireland
                  Limited, 4 Grand Canal Square, Dublin 2 in Irland betrieben
                  werden.
                </Typography>
                <Typography
                  variant="body1"
                  component={"li"}
                  sx={{ fontSize: "20px", mt: 1 }}
                >
                  instagram.com, welche durch das Unternehmen Facebook Ireland
                  Limited, 4 Grand Canal Square, Dublin 2 in Ireland betrieben
                  werden.
                </Typography>
                <Typography
                  variant="body1"
                  component={"li"}
                  sx={{ fontSize: "20px", mt: 1 }}
                >
                  twitter.com, welche durch das Unternehmen Twitter Inc., 1355
                  Market Street, San Francisco, CA 94103 in den USA betrieben
                  werden.
                </Typography>
                <Typography
                  variant="body1"
                  component={"li"}
                  sx={{ fontSize: "20px", mt: 1 }}
                >
                  xing.de, welche durch das Unternehmen XING SE, Dammtorstraße
                  30, 20354 Hamburg, in Deutschland betrieben werden.
                </Typography>
                <Typography
                  variant="body1"
                  component={"li"}
                  sx={{ fontSize: "20px", mt: 1 }}
                >
                  linkedin.com, welche durch das Unternehmen LinkedIn Ireland
                  Unlimited Company, Wilton Place, Dublin 2, in Irland betrieben
                  werden.
                </Typography>
                <Typography
                  variant="body1"
                  component={"li"}
                  sx={{ fontSize: "20px", mt: 1 }}
                >
                  youtube.com, welche durch das Unternehmen YouTube LLC, 901
                  Cherry Ave., San Bruno, CA 94066 in den USA betrieben werden.
                </Typography>
              </Typography>
              <Typography
                variant="body1"
                pargraph
                sx={{ fontSize: "18px", mt: 3 }}
              >
                Wir weisen die Nutzer unserer Webseite darauf hin, dass ggf.
                Ihre Daten an Facebook, Instagram, Twitter, XING, LinkedIn oder
                YouTube übermittelt werden, wenn Sie unsere Facebook-,
                Instagram-, Twitter-, XING-, LinkedIn- oder YouTube-Präsenz
                besuchen. Es ist möglich, dass neben der Verarbeitung der von
                Ihnen in dem jeweiligen sozialen Netzwerk eingegebenen Daten
                auch weitere Daten vom Anbieter des sozialen Netzwerks
                verarbeitet werden. Es liegt außerhalb unseres Einflussbereichs
                den Inhalt der übermittelten Daten zu beeinflussen. Wir möchten
                Sie jedoch darüber informieren, welche Daten, nach unserem
                derzeitigen Kenntnisstand an Facebook, Instagram und Twitter u.
                a. übermittelt werden. Wenn Sie die genannten Präsenzen nutzen,
                werden Informationen, dass Sie bestimmte Seiten unseres
                Internetauftritts aufgerufen haben an die Server von Facebook,
                Instagram, Twitter, XING, LinkedIn oder YouTube weitergeleitet.
                Dies hat für gleichzeitig eingeloggte Nutzer z. B. von Facebook,
                Instagram, Twitter, XING, LinkedIn oder YouTube u. a. zur Folge,
                dass die Nutzungsdaten Ihrem jeweiligen persönlichen Account
                zugeordnet werden. Auch wenn Sie kein Mitglied der genannten
                sozialen Netzwerke sind, besteht trotzdem die Möglichkeit, dass
                Facebook, Instagram, Twitter, XING, LinkedIn oder YouTube u. a.
                Ihre IP-Adresse ermitteln und speichern. Um den Zweck und den
                Umfang der Erhebung, Verarbeitung und Nutzung Ihrer Daten, sowie
                Ihre Rechte und Einstellungsmöglichkeiten zum Schutz Ihrer
                Privatsphäre zu erfahren, besuchen Sie bitte die nachfolgend
                genannten Webseiten mit den Datenschutzhinweisen der Anbieter
                der sozialen Netzwerke unter:
              </Typography>
              <Typography variant="body1" component="ul">
                <Typography
                  variant="body1"
                  component="li"
                  sx={{ fontSize: "20px", mt: 1 }}
                >
                  Facebook:{" "}
                  <a
                    href="http://facebook.com/policy.php"
                    style={{ color: "#E2CAA2", textDecoration: "underline" }} 
                  >
                    http://facebook.com/policy.php
                  </a>
                </Typography>

                <Typography
                  variant="body1"
                  component="li"
                  sx={{ fontSize: "20px", mt: 1 }}
                >
                  Instagram:{" "}
                  <a
                    href="http://instagram.com/about/legal/privacy/"
                    style={{ color: "#E2CAA2", textDecoration: "underline" }} 
                  >
                    http://instagram.com/about/legal/privacy/
                  </a>
                </Typography>

                <Typography
                  variant="body1"
                  component="li"
                  sx={{ fontSize: "20px", mt: 1 }}
                >
                  Twitter:{" "}
                  <a
                    href="https://twitter.com/de/privacy"
                    style={{ color: "#E2CAA2", textDecoration: "underline" }} 
                  >
                    https://twitter.com/de/privacy
                  </a>
                </Typography>

                <Typography
                  variant="body1"
                  component="li"
                  sx={{ fontSize: "20px", mt: 1 }}
                >
                  XING:{" "}
                  <a
                    href="https://privacy.xing.com/"
                    style={{ color: "#E2CAA2", textDecoration: "underline" }} 
                  >
                    https://privacy.xing.com/
                  </a>
                </Typography>

                <Typography
                  variant="body1"
                  component="li"
                  sx={{ fontSize: "20px", mt: 1 }}
                >
                  LinkedIn:{" "}
                  <a
                    href="https://www.linkedin.com/legal/privacy-policy"
                    style={{ color: "#E2CAA2", textDecoration: "underline" }} 
                  >
                    https://www.linkedin.com/legal/privacy-policy
                  </a>
                </Typography>

                <Typography
                  variant="body1"
                  component="li"
                  sx={{ fontSize: "20px", mt: 1 }}
                >
                  YouTube:{" "}
                  <a
                    href="https://policies.google.com/privacy"
                    style={{ color: "#E2CAA2", textDecoration: "underline" }} 
                  >
                    https://policies.google.com/privacy
                  </a>
                </Typography>
              </Typography>

              <Typography
                variant="body1"
                pargraph
                sx={{ fontSize: "18px", mt: 3 }}
              >
                Wenn Sie nicht damit einverstanden sind, dass Facebook, Instagram, Twitter, XING, LinkedIn
                oder YouTube über unseren Internetauftritt Daten über Sie sammelt, bitten wir Sie, sich vor dem
                Besuch unseres Internetauftritts bei Facebook, Instagram, Twitter, XING, LinkedIn oder YouTube
                auszuloggen. Weitere Möglichkeiten entnehmen Sie bitte den Datenschutzhinweisen des
                jeweiligen Mediums.
              </Typography>
              <Typography
                variant="body1"
                pargraph
                sx={{ fontSize: "18px", mt: 3 }}
              >
                Datenverarbeitungen auf unserer Facebook-Fanpage
              </Typography>
              <Typography
                variant="body1"
                pargraph
                sx={{ fontSize: "18px", mt: 3 }}
              >
                Bei dem Besuch unserer Facebook-Seite, über die wir unser Unternehmen darstellen und mit
                unseren Kunden und Interessenten kommunizieren, werden bestimmte Informationen über Sie
                verarbeitet. Allein Verantwortlicher für diese Verarbeitung personenbezogener Daten ist die
                Facebook Ireland Ltd (Irland/EU). Weitere Hinweise über die Verarbeitung personenbezogener
                Daten durch Facebook erhalten Sie hier.
              </Typography>
              <Typography
                variant="body1"
                pargraph
                sx={{ fontSize: "18px", mt: 3 }}
              >
                1. Verarbeitung von Seiten-Insights
              </Typography>
              <Typography
                variant="body1"
                pargraph
                sx={{ fontSize: "18px", mt: 3 }}
              >
                Facebook stellt uns für unsere Facebook-Seite in anonymisierter Form Statistiken und Einblicke
                bereit, mit deren Hilfe wir Erkenntnisse über die Arten von Handlungen erhalten, die Personen
                auf unserer Seite vornehmen (sog. „Seiten-Insights“). Diese Seiten-Insights werden auf der
                Grundlage von bestimmten Informationen über Personen, die unsere Seite besucht haben,
                erstellt. Diese Verarbeitung personenbezogener Daten erfolgt durch Facebook und uns als
                gemeinsam Verantwortliche. Die Verarbeitung dient unserem berechtigten Interesse, die Arten
                von vorgenommenen Handlungen auf unserer Seite auszuwerten und unsere Seite anhand
                dieser Erkenntnisse zu verbessern. Rechtsgrundlage für diese Verarbeitung ist Art. 6 Abs. 1
                Buchst. f) DS-GVO. Wir werden die über die Seiten-Insights erhaltenen Informationen in keinem
                Fall über den Bezug zu „Gefällt mir“-Angaben für unsere Seite einem bestimmten Facebook
                Profil zuordnen.
              </Typography>
              <Typography
                variant="body1"
                pargraph
                sx={{ fontSize: "18px", mt: 3 }}
              >
                Wir haben mit Facebook eine Vereinbarung über die Verarbeitung als gemeinsam
                Verantwortliche getroffen, in der die Verteilung der datenschutzrechtlichen Pflichten zwischen
                uns und Facebook festgelegt ist. Einzelheiten über die Verarbeitung personenbezogener Daten
                zur Erstellung von Seiten-Insights und die zwischen uns und Facebook abgeschlossene
                Vereinbarung erhalten Sie hier.
              </Typography>
              <Typography
                variant="body1"
                pargraph
                sx={{ fontSize: "18px", mt: 3 }}
              >
                2. Verarbeitung von Daten, die uns über unserer Seite mitgeteilt werden
              </Typography>
              <Typography
                variant="body1"
                pargraph
                sx={{ fontSize: "18px", mt: 3 }}
              >
                Wir verarbeiten außerdem Informationen, die Sie uns über unsere Facebook-Seite zur Verfügung
                gestellt haben. Solche Informationen können der Facebook-Name, Kontaktdaten oder eine
                Mitteilung an uns sein. Wir verarbeiten diese personenbezogenen Daten nur, wenn wir Sie zuvor
                ausdrücklich dazu aufgefordert haben, uns diese Daten mitzuteilen, etwa im Rahmen einer
                Umfrage oder eines Gewinnspiels. Diese Verarbeitungen durch uns erfolgt als allein
                Verantwortlicher.
              </Typography>
              <Typography
                variant="body1"
                pargraph
                sx={{ fontSize: "18px", mt: 3 }}
              >
                Sofern sich Ihre Anfrage auf den Abschluss oder die Durchführung eines Vertrages mit uns
                richtet, ist Art. 6 Abs. 1 Buchst. b) DS-GVO Rechtsgrundlage für die Datenverarbeitung.
                Ansonsten verarbeiten wir die Daten aufgrund unseres berechtigten Interesses, mit anfragenden
                Personen in Kontakt zu treten. Rechtsgrundlage für die Datenverarbeitung ist dann Art. 6 Abs. 1
                Buchst. f) DS-GVO.

              </Typography>
            </Box>
          </Box>
          <Box sx={{ mb: 3 }}>
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              sx={{ fontWeight: "bold" }}
            >
              9. Einsatz von Google Maps
            </Typography>
            <Typography
              variant="body1"
              pargraph
              sx={{ fontSize: "18px", mt: 3 }}
            >
              Diese Webseite verwendet das Produkt Google Maps von Google Inc., 1600 Amphitheatre
              Parkway, Mountain View, CA 94043, USA. In Google Maps erhalten Sie auf Grundlage Ihrer
              bisherigen Suchanfragen sowie des aufgerufenen Kartenbereichs Informationen zu für Sie
              interessante Orte. Durch Nutzung dieser Webseite erklären Sie sich mit der Verarbeitung der
              automatisiert erhobenen Daten durch Google Inc, deren Vertreter sowie Dritter einverstanden.
              Wir weisen darauf hin, dass Google bei der Nutzung von Maps automatisiert Daten verarbeitet,
              worauf wir keinen Einfluss haben. Weitere Informationen hierzu finden Sie
              unter <a href="http://www.google.de/intl/de/policies/privacy/"  style={{ color: "#E2CAA2", textDecoration: "underline" }} > {" "} http://www.google.de/intl/de/policies/privacy/</a> Die Nutzungsbedingungen von Google
              Maps finden sie unter <a href="http://www.google.de/intl/de/policies/privacy/"  style={{ color: "#E2CAA2", textDecoration: "underline" }} > {" "} http://www.google.de/intl/de/policies/privacy/</a>
            </Typography>
          </Box>
          <Box sx={{ mb: 3 }}>
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              sx={{ fontWeight: "bold" }}
            >
              10. Einsatz von reCaptcha
            </Typography>
            <Typography
              variant="body1"
              pargraph
              sx={{ fontSize: "18px", mt: 3 }}
            >
              Wir verwenden den Google-Dienst reCaptcha, um festzustellen, ob ein Mensch oder ein
              Computer eine bestimmte Eingabe in unserem Kontakt- oder Newsletter-Formular macht.
              Google prüft anhand folgender Daten, ob Sie ein Mensch oder ein Computer sind: IP-Adresse
              des verwendeten Endgeräts, die Webseite, die Sie bei uns besuchen und auf der das Captcha
              eingebunden ist, das Datum und die Dauer des Besuchs, die Erkennungsdaten des verwendeten
              Browser- und Betriebssystem-Typs, Google-Account, wenn Sie bei Google eingeloggt sind,
              Mausbewegungen auf den reCaptcha-Flächen sowie Aufgaben, bei denen Sie Bilder
              identifizieren müssen. Rechtsgrundlage für die beschriebene Datenverarbeitung ist Art. 6 Abs. 1
              Buchstabe f Datenschutz-Grundverordnung. Es besteht ein berechtigtes Interesse auf unserer
              Seite an dieser Datenverarbeitung, die Sicherheit unserer Webseite zu gewährleisten und uns
              vor automatisierten Eingaben (Angriffen) zu schützen. Für diese Daten gelten die abweichenden
              Datenschutzbestimmungen des Unternehmens Google. Weitere Informationen zu den
              Datenschutzrichtlinien von Google finden Sie <br />
              unter: <a href="http://www.google.de/intl/de/policies/privacy/" style={{ color: "#E2CAA2", textDecoration: "underline" }}> {" "} http://www.google.de/intl/de/policies/privacy/</a> oder <a href=" https://www.google.com/intl/de/policies/privacy/" style={{ color: "#E2CAA2", textDecoration: "underline" }}> {" "} http://www.google.de/intl/de/policies/privacy/</a>
            </Typography>
          </Box>
          <Box sx={{ mb: 3 }}>
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              sx={{ fontWeight: "bold" }}
            >
              11. Online-Meetings, Telefonkonferenzen und Webinare via „Microsoft Teams“ durch die
              Firmengruppe EDA - Baumanagement
            </Typography>
            <Typography
              variant="body1"
              pargraph
              sx={{ fontSize: "18px", mt: 3 }}
            >
              Wir möchten Sie nachfolgend über die Verarbeitung personenbezogener Daten im
              Zusammenhang mit der Nutzung von „Microsoft Teams“ informieren.
            </Typography>
          </Box>
          <Box sx={{ mb: 3 }}>
            <Typography
              variant="h6"
              component="h2"
              gutterBottom
              sx={{ fontWeight: "bold" }}
            >
              Zweck der Verarbeitung
            </Typography>
            <Typography
              variant="body1"
              pargraph
              sx={{ fontSize: "18px", mt: 3 }}
            >
              Wir nutzen das Tool „Microsoft Teams“, um Telefonkonferenzen, Online-Meetings,
              Videokonferenzen und/oder Webinare durchzuführen (nachfolgend: „Online-Meetings“).
              „Microsoft Teams“ ist ein Service der Microsoft Teams Video Communications, Inc., die ihren
              Sitz in den USA hat.
            </Typography>
          </Box>
          <Box sx={{ mb: 3 }}>
            <Typography
              variant="h6"
              component="h2"
              gutterBottom
              sx={{ fontWeight: "bold" }}
            >
              Verantwortlicher
            </Typography>
            <Typography
              variant="body1"
              pargraph
              sx={{ fontSize: "18px", mt: 3 }}
            >
              Verantwortlicher für die Datenverarbeitung, die im unmittelbaren Zusammenhang mit der
              Durchführung von „Online-Meetings“ steht, ist die EDA - Baumanagement GmbH.
            </Typography>
            <Typography
              variant="body1"
              pargraph
              sx={{ fontSize: "18px", mt: 3 }}
            >
              Hinweis: Soweit Sie die Internetseite von „Microsoft Teams“ aufrufen, ist der Anbieter von
              „Microsoft Teams“ für die Datenverarbeitung verantwortlich. Ein Aufruf der Internetseite ist
              jedoch nur erforderlich, um sich die Software für die Nutzung von „Microsoft Teams“
              herunterzuladen.
            </Typography>
            <Typography
              variant="body1"
              pargraph
              sx={{ fontSize: "18px", mt: 3 }}
            >
              Sie können „Microsoft Teams“ auch nutzen, wenn Sie die jeweilige Meeting-ID und ggf. weitere
              Zugangsdaten zum Meeting direkt in der „Microsoft Teams“-App eingeben.
            </Typography>
            <Typography
              variant="body1"
              pargraph
              sx={{ fontSize: "18px", mt: 3 }}
            >
              Wenn Sie die „Microsoft Teams“-App nicht nutzen wollen oder können, dann sind die
              Basisfunktionen auch über eine Browser-Version nutzbar, die Sie ebenfalls auf der Website von
              „Microsoft Teams“ finden.
            </Typography>
          </Box>
          <Box sx={{ mb: 3 }}>
            <Typography
              variant="h6"
              component="h2"
              gutterBottom
              sx={{ fontWeight: "bold" }}
            >
              Welche Daten werden verarbeitet?
            </Typography>
            <Typography
              variant="body1"
              pargraph
              sx={{ fontSize: "18px", mt: 3 }}
            >
              Bei der Nutzung von „Microsoft Teams“ werden verschiedene Datenarten verarbeitet. Der
              Umfang der Daten hängt dabei auch davon ab, welche Angaben Sie vor bzw. bei der Teilnahme
              an einem „Online-Meeting“ machen.
            </Typography>
            <Typography
              variant="body1"
              pargraph
              sx={{ fontSize: "18px", mt: 3 }}
            >
              Folgende personenbezogene Daten sind Gegenstand der Verarbeitung:
            </Typography>
            <Typography
              variant="body1"
              pargraph
              sx={{ fontSize: "18px", mt: 3 }}
            >
              Angaben zum Benutzer: Vorname, Nachname, Telefon (optional), E-Mail-Adresse, Passwort
              (wenn „Single-Sign-On“ nicht verwendet wird), Profilbild (optional),
              Abteilung (optional)
            </Typography>
            <Typography
              variant="body1"
              pargraph
              sx={{ fontSize: "18px", mt: 3 }}
            >
              Meeting-Metadaten: Thema, Beschreibung (optional), Teilnehmer-IP-Adressen, Geräte
              /Hardware-Informationen
            </Typography>
            <Typography
              variant="body1"
              pargraph
              sx={{ fontSize: "18px", mt: 3 }}
            >
              Bei Aufzeichnungen (optional): MP4-Datei aller Video-, Audio- und Präsentations-aufnahmen,
              M4A-Datei aller Audioaufnahmen, Textdatei des Online-Meeting-Chats
            </Typography>
            <Typography
              variant="body1"
              pargraph
              sx={{ fontSize: "18px", mt: 3 }}
            >
              Bei Einwahl mit dem Telefon: Angabe zur eingehenden und ausgehenden Rufnummer,
              Ländername, Start- und Endzeit. Ggf. können weitere Verbindungsdaten, wie z. B. die IP-Adresse
              des Geräts, gespeichert werden.+-
            </Typography>
            <Typography
              variant="body1"
              pargraph
              sx={{ fontSize: "18px", mt: 3 }}
            >
              Text-, Audio- und Videodaten: Sie haben ggf. die Möglichkeit, in einem „Online-Meeting“ die
              Chat-, Frage- oder Umfragefunktionen zu nutzen. Insoweit werden die von Ihnen gemachten
              Texteingaben verarbeitet, um diese im „Online-Meeting“ anzuzeigen und ggf. zu protokollieren.
              Um die Anzeige von Video und die Wiedergabe von Audio zu ermöglichen, werden während der
              Dauer des Meetings die Daten vom Mikrofon sowie von einer etwaigen Videokamera Ihres
              Endgeräts verarbeitet. Sie können die Kamera oder das Mikrofon jederzeit selbst über die
              „Microsoft Teams“-Applikationen abschalten bzw. stummstellen
            </Typography>
            <Typography
              variant="body1"
              pargraph
              sx={{ fontSize: "18px", mt: 3 }}
            >
              Um an einem „Online-Meeting“ teilzunehmen bzw. den „Meeting-Raum“ zu betreten, müssen
              Sie zumindest Angaben zu Ihrem Namen machen.
            </Typography>
          </Box>
          <Box sx={{ mb: 3 }}>
            <Typography
              variant="h6"
              component="h2"
              gutterBottom
              sx={{ fontWeight: "bold" }}
            >
              Umfang der Verarbeitung
            </Typography>
            <Typography
              variant="body1"
              pargraph
              sx={{ fontSize: "18px", mt: 3 }}
            >
              Wir verwenden „Microsoft Teams“, um „Online-Meetings“ durchzuführen. Wenn wir „Online
              Meetings“ aufzeichnen wollen, werden wir Ihnen das im Vorwege transparent mitteilen und –
              soweit erforderlich - um eine Zustimmung bitten. Die Tatsache der Aufzeichnung wird Ihnen
              zudem in der „Microsoft Teams“-App angezeigt.
            </Typography>
            <Typography
              variant="body1"
              pargraph
              sx={{ fontSize: "18px", mt: 3 }}
            >
              Wenn es für die Zwecke der Protokollierung von Ergebnissen eines Online-Meetings erforderlich
              ist, werden wir die Chatinhalte protokollieren. Das wird jedoch in der Regel nicht der Fall sein.
            </Typography>
            <Typography
              variant="body1"
              pargraph
              sx={{ fontSize: "18px", mt: 3 }}
            >
              Im Falle von Webinaren können wir für Zwecke der Aufzeichnung und Nachbereitung von
              Webinaren auch die gestellten Fragen von Webinar-Teilnehmenden verarbeiten.
            </Typography>
            <Typography
              variant="body1"
              pargraph
              sx={{ fontSize: "18px", mt: 3 }}
            >
              Wenn Sie bei „Microsoft Teams“ als Benutzer registriert sind, können Berichte über „Online
              Meetings“ (Meeting-Metadaten, Daten zur Telefoneinwahl, Fragen und Antworten in Webinaren,
              Umfragefunktion in Webinaren) bis zu einem Monat bei „Microsoft Teams“ gespeichert werden.
            </Typography>
            <Typography
              variant="body1"
              pargraph
              sx={{ fontSize: "18px", mt: 3 }}
            >
              Eine automatisierte Entscheidungsfindung i.S.d. Art. 22 DS-GVO kommt nicht zum Einsatz.
            </Typography>
          </Box>
          <Box sx={{ mb: 3 }}>
            <Typography
              variant="h6"
              component="h2"
              gutterBottom
              sx={{ fontWeight: "bold" }}
            >
              Rechtsgrundlagen der Datenverarbeitung
            </Typography>
            <Typography
              variant="body1"
              pargraph
              sx={{ fontSize: "18px", mt: 3 }}
            >
              Soweit personenbezogene Daten von Beschäftigten der EDA - Baumanagement verarbeitet
              werden, ist § 26 BDSG die Rechtsgrundlage der Datenverarbeitung. Sollten im Zusammenhang
              mit der Nutzung von „Microsoft Teams“ personenbezogene Daten nicht für die Begründung,
              Durchführung oder Beendigung des Beschäftigungsverhältnisses erforderlich, gleichwohl aber
              elementarer Bestandteil bei der Nutzung von „Microsoft Teams“ sein, so ist Art. 6 Abs. 1 lit. f)
              DS-GVO die Rechtsgrundlage für die Datenverarbeitung. Unser Interesse besteht in diesen
              Fällen an der effektiven Durchführung von „Online-Meetings“. <br />
              Im Übrigen ist die Rechtsgrundlage für die Datenverarbeitung bei der Durchführung von „Online
              Meetings“ Art. 6 Abs. 1 lit. b) DS-GVO, soweit die Meetings im Rahmen von Vertragsbeziehungen
              durchgeführt werden.<br />
              Sollte keine vertragliche Beziehung bestehen, ist die Rechtsgrundlage Art. 6 Abs. 1 lit. f) DS-GVO.
              Auch hier besteht unser Interesse an der effektiven Durchführung von „Online-Meetings“.
            </Typography>
          </Box>
          <Box sx={{ mb: 3 }}>
            <Typography
              variant="h6"
              component="h2"
              gutterBottom
              sx={{ fontWeight: "bold" }}
            >
              Empfänger / Weitergabe von Daten
            </Typography>
            <Typography
              variant="body1"
              pargraph
              sx={{ fontSize: "18px", mt: 3 }}
            >
              Personenbezogene Daten, die im Zusammenhang mit der Teilnahme an „Online-Meetings“
              verarbeitet werden, werden grundsätzlich nicht an Dritte weitergegeben, sofern sie nicht gerade
              zur Weitergabe bestimmt sind. Beachten Sie bitte, dass Inhalte aus „Online-Meetings“ wie auch
              bei persönlichen Besprechungstreffen häufig gerade dazu dienen, Informationen an Kunden,
              Interessenten oder Dritte zu kommunizieren und damit zur Weitergabe bestimmt sind.
              Weitere Empfänger: Der Anbieter von „Microsoft Teams“ erhält notwendigerweise Kenntnis von
              den o.g. Daten, soweit dies im Rahmen unseres Auftragsverarbeitungsvertrages mit „Microsoft
              Teams“ vorgesehen ist.
            </Typography>

          </Box>
          <Box sx={{ mb: 3 }}>
            <Typography
              variant="h6"
              component="h2"
              gutterBottom
              sx={{ fontWeight: "bold" }}
            >
              Datenverarbeitung außerhalb der Europäischen Union
            </Typography>
            <Typography
              variant="body1"
              pargraph
              sx={{ fontSize: "18px", mt: 3 }}
            >
              „Microsoft Teams“ ist ein Dienst, der von einem Anbieter aus den USA erbracht wird. Eine
              Verarbeitung der personenbezogenen Daten findet damit auch in einem Drittland statt. Wir
              haben mit dem Anbieter von „Microsoft Teams“ einen Auftragsverarbeitungsvertrag
              geschlossen, der den Anforderungen von Art. 28 DS-GVO entspricht.
              Ein angemessenes Datenschutzniveau für die Übermittlung in ein Drittland wurde gemäß Art. 46
              Abs. 2 lit. c DS-GVO (sog. EU-Standardvertragsklauseln) durch den Datenimporteur garantiert.
            </Typography>

          </Box>
          <Box sx={{ mb: 3 }}>
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              sx={{ fontWeight: "bold" }}
            >
              12. Kinder und Jugendliche
            </Typography>
            <Typography
              variant="body1"
              pargraph
              sx={{ fontSize: "18px", mt: 3 }}
            >
              Unsere Webseite richtet sich ausschließlich an potentielle Bewerber, Kunden, Geschäftspartner
              und Pressevertreter. Personen unter 16 Jahren sollten ohne Zustimmung der Eltern oder
              Erziehungsberechtigten keine Daten an uns übermitteln. Wir fordern keine Daten von Kindern
              und Jugendlichen an, die das sechzehnte Lebensjahr nicht vollendet haben an. Wir sammeln
              diese nicht und geben diese auch nicht an Dritte weiter.
            </Typography>
          </Box>
          <Box sx={{ mb: 3 }}>
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              sx={{ fontWeight: "bold" }}
            >
              13. Sicherheit
            </Typography>
            <Typography
              variant="body1"
              pargraph
              sx={{ fontSize: "18px", mt: 3 }}
            >
              Wir haben technische und organisatorische Sicherheitsmaßnahmen entsprechend der
              gesetzlichen Vorgaben getroffen, um Ihre Daten vor Verlust, Zerstörung, Manipulation und
              unberechtigtem Zugriff zu schützen. Alle unsere Mitarbeiter und alle an der Datenverarbeitung
              beteiligten Personen sind zur Einhaltung der Datenschutz-Grundverordnung, des
              Bundesdatenschutzgesetzes in seiner jeweils gültigen Fassung und anderer
              datenschutzrelevanter Gesetze sowie dem vertraulichen Umgang mit Daten verpflichtet. Des
              Weiteren schließen wir die entsprechenden Vereinbarungen zu Auftragsverarbeitung mit den in
              Auftrag tätigen externen Dienstleistern ab. Unsere Sicherungsmaßnahmen werden regelmäßig
              überprüft und entsprechend der technologischen Entwicklung fortlaufend überarbeitet.
            </Typography>
          </Box>
          <Box sx={{ mb: 3 }}>
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              sx={{ fontWeight: "bold" }}
            >
              14. Änderung unserer Datenschutzbestimmungen
            </Typography>
            <Typography
              variant="body1"
              pargraph
              sx={{ fontSize: "18px", mt: 3 }}
            >
              Wir behalten uns das Recht vor, unsere Sicherheits- und Datenschutzmaßnahmen zu verändern,
              soweit dies wegen der technischen Entwicklung erforderlich wird. In diesen Fällen werden wir
              auch unsere Hinweise zum Datenschutz entsprechend anpassen. Bitte beachten Sie daher die
              jeweils aktuelle Version unserer Datenschutzinformation.
            </Typography>
          </Box>
          <Box sx={{ mb: 3 }}>
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              sx={{ fontWeight: "bold" }}
            >
              15. Einwilligungen
            </Typography>
            <Typography
              variant="body1"
              pargraph
              sx={{ fontSize: "18px", mt: 3 }}
            >
              Sofern wir Ihre Einwilligung in die Verarbeitung Ihrer Daten benötigen, holen wir diese bei Ihnen
              ein und verwenden Ihre Daten für die im Zusammenhang mit der Einwilligung angegebenen
              Zwecke. Ihre Einwilligungen werden digital protokolliert. Sie können Ihre Einwilligungen jederzeit
              mit Wirkung für die Zukunft widerrufen. Hierzu schreiben Sie bitte an den
              Datenschutzbeauftragten oder senden Sie eine E-Mail an privacy@max-boegl.de.
            </Typography>
          </Box>
          <Box sx={{ mb: 3 }}>
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              sx={{ fontWeight: "bold" }}
            >
              16. Kontaktformular und E-Mail-Kontakt
            </Typography>
          </Box>
          <Box sx={{ mb: 3 }}>
            <Typography
              variant="h6"
              component="h2"
              gutterBottom
              sx={{ fontWeight: "bold" }}
            >
              1. Beschreibung und Umfang der Datenverarbeitung
            </Typography>
            <Typography
              variant="body1"
              pargraph
              sx={{ fontSize: "18px", mt: 3 }}
            >
              Auf unserer Internetseite ist ein Kontaktformular vorhanden, welches für die elektronische
              Kontaktaufnahme genutzt werden kann. Nimmt ein Nutzer diese Möglichkeit wahr, so werden
              die in der Eingabemaske eingegeben Daten an uns übermittelt und gespeichert. Diese Daten
              sind:
            </Typography>
            <Typography variant="body1" component="ul">
              <Typography
                variant="body1"
                component="li"
                sx={{ fontSize: "20px", mt: 1 }}
              >
                (1) Die IP-Adresse des Nutzers
              </Typography>

              <Typography
                variant="body1"
                component="li"
                sx={{ fontSize: "20px", mt: 1 }}
              >
                (2) Vorname
              </Typography>

              <Typography
                variant="body1"
                component="li"
                sx={{ fontSize: "20px", mt: 1 }}
              >
                (3) Nachname
              </Typography>

              <Typography
                variant="body1"
                component="li"
                sx={{ fontSize: "20px", mt: 1 }}
              >
                (4) E-Mail-Adresse
              </Typography>

              <Typography
                variant="body1"
                component="li"
                sx={{ fontSize: "20px", mt: 1 }}
              >
                (5) Firma (wenn angegeben)
              </Typography>

              <Typography
                variant="body1"
                component="li"
                sx={{ fontSize: "20px", mt: 1 }}
              >
                (6) Straße
              </Typography>
              <Typography
                variant="body1"
                component="li"
                sx={{ fontSize: "20px", mt: 1 }}
              >
                (7) PLZ
              </Typography>
              <Typography
                variant="body1"
                component="li"
                sx={{ fontSize: "20px", mt: 1 }}
              >
                (8) Ort
              </Typography>
              <Typography
                variant="body1"
                component="li"
                sx={{ fontSize: "20px", mt: 1 }}
              >
                (9) Telefon-Nr. (wenn angegeben)
              </Typography>
              <Typography
                variant="body1"
                component="li"
                sx={{ fontSize: "20px", mt: 1 }}
              >
                (10) Gewählter Anwendungsbereich
              </Typography>
              <Typography
                variant="body1"
                component="li"
                sx={{ fontSize: "20px", mt: 1 }}
              >
                (11) Nachricht
              </Typography>
              <Typography
                variant="body1"
                component="li"
                sx={{ fontSize: "20px", mt: 1 }}
              >
                (12) Bestätigung der Datenschutz- und Nutzungsbedingungen
              </Typography>
            </Typography>
            <Typography
              variant="body1"
              pargraph
              sx={{ fontSize: "18px", mt: 3 }}
            >
              Für die Verarbeitung der Daten wird im Rahmen des Absendevorgangs Ihre Einwilligung eingeholt
              und auf diese Datenschutzinformation verwiesen. Alternativ ist eine Kontaktaufnahme über die
              bereitgestellte E-Mail-Adresse möglich. In diesem Fall werden die mit der E-Mail übermittelten
              personenbezogenen Daten des Nutzers gespeichert. Es erfolgt in diesem Zusammenhang keine
              Weitergabe der Daten an Dritte. Die Daten werden ausschließlich für die Verarbeitung der
              Konversation verwendet.
            </Typography>
          </Box>
          <Box sx={{ mb: 3 }}>
            <Typography
              variant="h6"
              component="h2"
              gutterBottom
              sx={{ fontWeight: "bold" }}
            >
              2. Rechtsgrundlage für die Datenverarbeitung
            </Typography>
            <Typography
              variant="body1"
              pargraph
              sx={{ fontSize: "18px", mt: 3 }}
            >
              Rechtsgrundlage für die Verarbeitung der Daten ist bei Vorliegen einer Einwilligung des Nutzers
              Art. 6 Abs. 1 lit. a DS-GVO. Rechtsgrundlage für die Verarbeitung der Daten, die im Zuge einer
              Übersendung einer E-Mail übermittelt werden, ist Art. 6 Abs. 1 lit. f DS-GVO. Zielt der E-Mail
              Kontakt auf den Abschluss eines Vertrages ab, so ist zusätzliche Rechtsgrundlage für die
              Verarbeitung Art. 6 Abs. 1 lit. b DS-GVO.
            </Typography>
          </Box>
          <Box sx={{ mb: 3 }}>
            <Typography
              variant="h6"
              component="h2"
              gutterBottom
              sx={{ fontWeight: "bold" }}
            >
              3. Zweck der Datenverarbeitung
            </Typography>
            <Typography
              variant="body1"
              pargraph
              sx={{ fontSize: "18px", mt: 3 }}
            >
              Die Verarbeitung der personenbezogenen Daten aus der Eingabemaske dient uns allein zur
              Bearbeitung der Kontaktaufnahme. Im Falle einer Kontaktaufnahme per E-Mail liegt hieran auch
              das erforderliche berechtigte Interesse an der Verarbeitung der Daten. Die sonstigen während
              des Absendevorgangs verarbeiteten personenbezogenen Daten dienen dazu, einen Missbrauch
              des Kontaktformulars zu verhindern und die Sicherheit unserer informationstechnischen
              Systeme sicherzustellen.
            </Typography>
          </Box>
          <Box sx={{ mb: 3 }}>
            <Typography
              variant="h6"
              component="h2"
              gutterBottom
              sx={{ fontWeight: "bold" }}
            >
              4. Dauer der Speicherung
            </Typography>
            <Typography
              variant="body1"
              pargraph
              sx={{ fontSize: "18px", mt: 3 }}
            >
              Die Daten werden gelöscht, sobald sie für die Erreichung des Zweckes ihrer Erhebung nicht
              mehr erforderlich sind. Für die personenbezogenen Daten aus der Eingabemaske des
              Kontaktformulars und diejenigen, die per E-Mail übersandt wurden, ist dies dann der Fall, wenn
              die jeweilige Konversation mit dem Nutzer beendet ist. Beendet ist die Konversation dann, wenn
              sich aus den Umständen entnehmen lässt, dass der betroffene Sachverhalt abschließend
              geklärt ist. Die während des Absendevorgangs zusätzlich erhobenen personenbezogenen Daten
              werden spätestens nach einer Frist von sieben Tagen gelöscht.
            </Typography>
          </Box>
          <Box sx={{ mb: 3 }}>
            <Typography
              variant="h6"
              component="h2"
              gutterBottom
              sx={{ fontWeight: "bold" }}
            >
              5. Widerspruchs- und Beseitigungsmöglichkeit
            </Typography>
            <Typography
              variant="body1"
              pargraph
              sx={{ fontSize: "18px", mt: 3 }}
            >
              Der Nutzer hat jederzeit die Möglichkeit, seine Einwilligung zur Verarbeitung der
              personenbezogenen Daten zu widerrufen. Nimmt der Nutzer per E-Mail Kontakt mit uns auf, so
              kann er der Speicherung seiner personenbezogenen Daten jederzeit widersprechen. In einem
              solchen Fall kann die Konversation nicht fortgeführt werden. Es folgt eine Beschreibung, auf
              welche Weise der Widerruf der Einwilligung und der Widerspruch der Speicherung ermöglicht
              wird. Alle personenbezogenen Daten, die im Zuge der Kontaktaufnahme gespeichert wurden,
              werden in diesem Fall gelöscht.
            </Typography>
          </Box>
          <Box sx={{ mb: 3 }}>
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              sx={{ fontWeight: "bold" }}
            >
              17. Online-Bewerbungsportal
            </Typography>
            <Typography
              variant="body1"
              pargraph
              sx={{ fontSize: "18px", mt: 3 }}
            >
              Wir betreiben ein Online-Bewerbungsportal, in welchem wir persönliche Daten der Bewerber
              erfassen und verarbeiten. Detaillierte Informationen erhalten Sie im Bewerberportal, oder in
              unseren Datenschutzhinweisen:
            </Typography>
            <Typography
              variant="body1"
              pargraph
              sx={{ fontSize: "18px", mt: 3 }}
            >
              <a
                href="https://max-boegl.de/images/content/downloads/datenschutzhinweise.pdf"
                style={{ color: "#E2CAA2", textDecoration: "underline" }}
              >
                Datenschutzhinweise
              </a>

            </Typography>
          </Box>
          <Box sx={{ mb: 3 }}>
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              sx={{ fontWeight: "bold" }}
            >
              18. Anfragen mit MEETOVO
            </Typography>
            <Typography
              variant="body1"
              pargraph
              sx={{ fontSize: "18px", mt: 3 }}
            >
              Wir nutzen für die Verarbeitung von Anfragen die Software-Lösung des Anbieters MEETOVO,
              Lukas & Christof Bludau GbR, Kasernenstraße 12, 21073 Hamburg, Deutschland. Der Anbieter
              arbeitet nach den gesetzlichen Vorgaben des Art. 28 DSGVO. Strengste Vertraulichkeit Ihrer
              Daten bleibt somit jederzeit gewahrt.
            </Typography>
            <Typography
              variant="body1"
              pargraph
              sx={{ fontSize: "18px", mt: 3 }}
            >
              Wenn Sie eine Anfrage an uns übermitteln, wird bei dem Aufruf der Anfrageseite eine direkte
              Verbindung zwischen Ihrem Browser und dem Server des Anbieters hergestellt. Dieser erhält
              dadurch die Information, dass Sie mit Ihrer IP-Adresse unsere Seite besucht haben. Die IP
              Adresse wird anonymisiert und nach 7 Tagen wieder gelöscht. Wenn Sie eine Anfrage über das
              eingebundene Formular absenden, werden die von Ihnen eingegebenen zur Anfrage
              erforderlichen personenbezogenen Daten (E-Mail-Adresse, Vor- und Nachname,
              Mobilfunknummer bzw. Telefonnummer) an den Anbieter übermittelt und auf dessen Servern
              gespeichert sowie per E-Mail an uns übermittelt. Alle weiteren Formulareingaben werden bereits
              während ihrer Eingabe zu Analysezwecken übermittelt, wenn Sie diesem zustimmen. Die
              Erhebung dieser Daten ist für die Durchführung der Anfrage erforderlich. Ohne diese
              Verarbeitung können Sie keine Anfragen stellen.
            </Typography>
            <Typography
              variant="body1"
              pargraph
              sx={{ fontSize: "18px", mt: 3 }}
            >
              Diese Verarbeitung erfolgt gem. Art. 6 Abs. 1 lit b. DSGVO zur Erfüllung unserer vertraglichen
              Verpflichtungen und Serviceleistungen sowie auf Grundlage unserer berechtigten Interessen an
              der Durchführung einer schnellen und effektiven Anfrage im Sinne des Art. 6 Abs. 1 lit f. DSGVO.

            </Typography>
            <Typography
              variant="body1"
              pargraph
              sx={{ fontSize: "18px", mt: 3 }}
            >
              Der Anbieter löscht Ihre Daten, sofern diese nicht mehr erforderlich sind. Der Anbieter überprüft
              die Erforderlichkeit alle zwei Jahre. Im Übrigen erfolgt die Löschung jedoch spätestens 5 Jahre
              nach der letzten Anfrage. Weitere Informationen hierzu finden Sie in der Datenschutzerklärung
              des Anbieters unter:  <a href="https://meetovo.de/datenschutz" style={{ color: "#E2CAA2", textDecoration: "underline" }}>https://meetovo.de/datenschutz</a>

            </Typography>
          </Box>
          <Box sx={{ mb: 3 }}>
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              sx={{ fontWeight: "bold" }}
            >
              19. Betroffenenrechte
            </Typography>
            <Typography
              variant="body1"
              pargraph
              sx={{ fontSize: "18px", mt: 3 }}
            >
              Sofern wir Ihre Daten verarbeiten, haben Sie umfangreiche Rechte als Betroffener, die im
              Folgenden im Einzelnen aufgeführt werden:
            </Typography>
          </Box>
          <Box sx={{ mb: 3 }}>
            <Typography
              variant="h6"
              component="h2"
              gutterBottom
              sx={{ fontWeight: "bold" }}
            >
              (a) Auskunftsrecht
            </Typography>
            <Typography
              variant="body1"
              pargraph
              sx={{ fontSize: "18px", mt: 3 }}
            >
              Sie können jederzeit nach Art. 15 DS-GVO Auskunft über Ihre, von uns verarbeiteten Daten
              bekommen. Insbesondere können Sie Auskunft über die Zwecke der Verarbeitung, die
              Kategorien der verarbeiteten Daten, Kategorien der möglichen Empfänger sowie die geplante
              Speicherdauer erfragen. Ihr Auskunftsverlangen richten Sie bitte an den
              Datenschutzbeauftragten oder senden Sie eine E-Mail an privacy@max-boegl.de.
            </Typography>
          </Box>
          <Box sx={{ mb: 3 }}>
            <Typography
              variant="h6"
              component="h2"
              gutterBottom
              sx={{ fontWeight: "bold" }}
            >
              (b) Recht auf Berichtigung
            </Typography>
            <Typography
              variant="body1"
              pargraph
              sx={{ fontSize: "18px", mt: 3 }}
            >
              Sie sind berechtigt, bei Unrichtigkeit der Daten nach Art. 16 DS-GVO eine Berichtigung oder
              Vervollständigung Ihrer Daten, die bei uns gespeichert sind, zu verlangen. Sie können Ihr Recht
              unter den oben aufgeführten Kontakt-Angaben geltend machen.
            </Typography>
          </Box>
          <Box sx={{ mb: 3 }}>
            <Typography
              variant="h6"
              component="h2"
              gutterBottom
              sx={{ fontWeight: "bold" }}
            >
              (c) Löschungsrecht
            </Typography>
            <Typography
              variant="body1"
              pargraph
              sx={{ fontSize: "18px", mt: 3 }}
            >
              Sie können nach Art. 17 DS-GVO die Löschung der Daten fordern, wenn die Speicherung der
              Daten nicht mehr notwendig ist und eine anderweitigen Rechtsgrundlage für die Verarbeitung
              nicht vorhanden ist. Außerdem können Sie die Löschung fordern, wenn Sie Widerspruch gegen
              die Verarbeitung eingelegt haben und es keine vorrangigen, berechtigten Gründe für die weitere
              Verarbeitung Ihrer Daten gibt und wenn Ihre Daten unrechtmäßig verarbeitet wurden oder wenn
              eine Rechtspflicht zum Löschen nach EU- oder nationalem Recht besteht. Sie können Ihr Recht
              unter den oben aufgeführten Kontakt-Angaben geltend machen.
            </Typography>
          </Box>
          <Box sx={{ mb: 3 }}>
            <Typography
              variant="h6"
              component="h2"
              gutterBottom
              sx={{ fontWeight: "bold" }}
            >
              (d) Recht auf Einschränkung
            </Typography>
            <Typography
              variant="body1"
              pargraph
              sx={{ fontSize: "18px", mt: 3 }}
            >
              Darüber hinaus haben Sie nach Art. 18 DS-GVO ein Recht auf Einschränkung der Verarbeitung,
              wenn Sie die Richtigkeit der Daten für eine Dauer bestreiten, die es dem Verantwortlichen
              ermöglicht, die Richtigkeit der Daten zu überprüfen; wenn die Verarbeitung unrechtmäßig ist, Sie
              aber die Löschung der Daten ablehnen; der Zweck der Verarbeitung sich erledigt hat, die Daten
              aber zur Geltendmachung von Ihren Rechtsansprüchen notwendig sind oder wenn Sie nach Art.
              21 DS-GVO widersprochen haben und es noch nicht feststeht, ob die berechtigten Gründe des
              Verantwortlichen gegenüber Ihren Interessen überwiegen. Sie können Ihr Recht unter den oben
              aufgeführten Kontakt-Angaben geltend machen.
            </Typography>
          </Box>
          <Box sx={{ mb: 3 }}>
            <Typography
              variant="h6"
              component="h2"
              gutterBottom
              sx={{ fontWeight: "bold" }}
            >
              (e) Recht auf Datenübertragbarkeit
            </Typography>
            <Typography
              variant="body1"
              pargraph
              sx={{ fontSize: "18px", mt: 3 }}
            >
              Sie haben nach Art. 20 DS-GVO das Recht die Sie betreffenden Daten in einem gängigen,
              strukturierten und maschinenlesbaren Format zu erhalten (Datenübertragbarkeit). Zudem
              können Sie unter bestimmten Voraussetzungen erwirken, dass Ihre Daten direkt von einem
              Verantwortlichen übermittelt werden, soweit dies technisch möglich ist. Sie können Ihr Recht
              unter den oben aufgeführten Kontakt-Angaben geltend machen.
            </Typography>
          </Box>
          <Box sx={{ mb: 3 }}>
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              sx={{ fontWeight: "bold" }}
            >
              20. Widerspruchsrecht
            </Typography>
            <Typography
              variant="body1"
              pargraph
              sx={{ fontSize: "18px", mt: 3 }}
            >
              Sie haben das Recht, der Verwendung Ihrer Daten zu den oben genannten Zwecken jederzeit zu
              widersprechen (Art. 21 DS-GVO). Dies ist möglich soweit sich der Widerspruch gegen
              Direktwerbung richtet oder Gründe dafür vorliegen, die sich aus Ihrer besonderen Situation
              ergeben. Im Fall des Widerspruchs gegen Direktwerbung haben Sie ein generelles
              Widerspruchsrecht, das ohne Angabe einer besonderen Situation von uns umgesetzt wird. Um
              Ihr Widerspruchsrecht geltend zu machen schreiben Sie bitte an den Datenschutzbeauftragten
              oder senden Sie eine E-Mail an privacy@max-boegl.de.
            </Typography>
          </Box>
          <Box sx={{ mb: 3 }}>
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              sx={{ fontWeight: "bold" }}
            >
              21. Fragen, Anregungen, Beschwerden beim internen Datenschutzbeauftragten
            </Typography>
            <Typography
              variant="body1"
              pargraph
              sx={{ fontSize: "18px", mt: 3 }}
            >
              Wenn Sie Fragen zu unseren Hinweisen zum Datenschutz oder zur Verarbeitung Ihrer
              persönlichen Daten haben, können Sie sich direkt an unseren Datenschutzbeauftragten
              wenden:
            </Typography>
            <Typography
              variant="body1"
              pargraph
              sx={{ fontSize: "18px", mt: 3 }}
            >
              EDA Baumanagement GmbH<br />
              Datenschutz<br />
              Eppeleinstr. 2<br />
              92353 Postbauer Heng<br />
              Deutschland<br />
              E-Mail: info@eda-baumanagement.com<br />
              Er steht Ihnen auch im Falle von Auskunftsersuchen, Anregungen oder bei Beschwerden als
              Ansprechpartner zur Verfügung.
            </Typography>
          </Box>
          <Box sx={{ mb: 3 }}>
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              sx={{ fontWeight: "bold" }}
            >
              22. Beschwerderecht bei der Aufsichtsbehörde
            </Typography>
            <Typography
              variant="body1"
              pargraph
              sx={{ fontSize: "18px", mt: 3 }}
            >
              Zudem möchten wir Sie darauf hinweisen, dass Ihnen unbeschadet eines anderweitigen
              verwaltungsrechtlichen oder gerichtlichen Rechtsbehelfs das Recht auf Beschwerde bei einer
              Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres Aufenthaltsorts, Ihres Arbeitsplatzes
              oder des Orts des mutmaßlichen Verstoßes zusteht, wenn Sie der Ansicht sind, dass die
              Verarbeitung der Sie betreffenden Daten gegen die Datenschutz-Grundverordnung verstößt. Eine
              Liste der Aufsichtsbehörden (für den nicht-öffentlichen Bereich) mit Anschrift finden Sie
              unter:<a href=" https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html" style={{ color: "#E2CAA2", textDecoration: "underline" }}> https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html</a>
              <br/> <br/> Stand: 15.11.2023
            </Typography>
          </Box>


        </Box>
      </Box>
    </Box>

  );
};
export default Datenschutz;
