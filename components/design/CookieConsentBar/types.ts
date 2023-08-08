import { ReactNode } from "react";

export interface CookieConsentProps {
  cookieName: string;
  buttonText: string;
  children: ReactNode;
}