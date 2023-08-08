import CookieConsent from 'react-cookie-consent';
import { rem } from 'polished';
import { card, colors, typography, newsletter } from '@/styles/variables';
import { CookieConsentProps } from './types';
import * as Styles from './styles';

const style = {
  margin: `0 0 ${rem('16px')} ${rem('16px')}`,
  width: '100%',
  maxWidth: rem('300px'),
  border: `${rem('1px')} solid ${colors.grey700}`,
  borderRadius: card.borderRadius,
  backgroundColor: newsletter.backgroundColor,
  padding: rem('24px'),
  fontSize: rem('14px'),
  color: colors.grey50,
};

const contentStyle = {
  margin: 0,
};

const buttonStyle = {
  margin: `${rem('24px')} 0 0 0`,
  borderRadius: '999px',
  backgroundColor: colors.grey850,
  padding: `${rem('10px')} ${rem('15px')}`,
  fontSize: rem('12px'),
  fontWeight: typography.fontWeigthSemiBold,
  color: colors.white,
  textDecoration: 'none',
};

const CookieConsentBar = (props: CookieConsentProps) => {
  const { cookieName, buttonText, children } = props;

  return (
    <Styles.Wrapper>
      <CookieConsent
        cookieName={cookieName}
        buttonText={buttonText}
        style={style}
        contentStyle={contentStyle}
        buttonStyle={buttonStyle}
      >
        {children}
      </CookieConsent>
    </Styles.Wrapper>
  );
};

export default CookieConsentBar;
