import { ReactNode } from "react";

export interface CookieConsentBarProps {
  buttonText: string;
  cookieName: string;
  expires: number;
  message: string;
}

export interface CookieConsentBtnProps { 
  children: ReactNode; 
  [x: string]: any;
}