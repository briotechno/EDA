import React from "react";
import { CookieBanner } from "@palmabit/react-cookie-law";

const CookieBannerComponent = () => (
  <CookieBanner
    message="We use cookies to enhance your experience. By continuing to visit this site, you agree to our use of cookies."
    // styles={{
    //   dialog: { backgroundColor: "red" },
    // }}
    wholeDomain={true}
    onAccept={() => {
      // Handle acceptance logic here
      console.log("Cookies accepted");
    }}
    onDecline={() => {
      // Handle decline logic here
      console.log("Cookies declined");
    }}
    onAcceptPreferences={() => {
      // Handle preferences acceptance logic here
      console.log("Preferences cookies accepted");
    }}
    onAcceptStatistics={() => {
      // Handle statistics acceptance logic here
      console.log("Statistics cookies accepted");
    }}
    onAcceptMarketing={() => {
      // Handle marketing acceptance logic here
      console.log("Marketing cookies accepted");
    }}
   
  />
);

export default CookieBannerComponent;
