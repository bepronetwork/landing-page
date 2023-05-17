import CookieConsent from "react-cookie-consent";
import { CookieConsentBarProps, CookieConsentBtnProps } from "./types";
import * as Styles from "./styles";
import { Button } from "@taikai/rocket-kit";

const CookieConsentBar = (props: CookieConsentBarProps) => {
  const {
    buttonText,
    cookieName,
    expires,
    message,
  } = props;

  const Btn = (props: CookieConsentBtnProps) => 
    <Button 
      value={buttonText}
      color="blue500"
      action={props.onClick}
      {...props}
    />;

  return(
    <Styles.Wrapper>
      <CookieConsent
        location="bottom"
        buttonText={buttonText}
        cookieName={cookieName}
        expires={expires}
        ButtonComponent={Btn}
        disableStyles
      >
        {message}
      </CookieConsent>
    </Styles.Wrapper>
  );
}

export default CookieConsentBar;