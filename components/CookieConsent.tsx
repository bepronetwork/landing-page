import CookieConsentBar from "@/ui/CookieConsentBar";

const CookieConsent = () => {
  return(
    <CookieConsentBar
      buttonText="Accept"
      cookieName="beproLandingCookieConsent"
      expires={150}
      message="This website uses cookies to enhance the user experience."
    />
  );
};

export default CookieConsent;