import Link from 'next/link';
import CookieConsentBar from '@/ui/CookieConsentBar';

const CookieConsent = () => {
  return (
    <CookieConsentBar buttonText="Accept" cookieName="beproLandingCookieConsent">
      We use cookies to enhance the user experience.{' '}
      <Link href="https://taikai.network/privacy">
        <a target="_blank">Click to learn more</a>
      </Link>
    </CookieConsentBar>
  );
};

export default CookieConsent;
