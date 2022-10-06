import { ReactNode } from "react";

type MarginSize = 's' | 'l' | 'xl';

export interface WrapperProps {
  lightOn?: boolean;
  fullWidth?: boolean;
  padding?: MarginSize;
  headerMargin?: MarginSize;
}

export interface SectionProps {
  lightOn?: boolean;
  fullWidth?: boolean;
  padding?: MarginSize;
  headerMargin?: MarginSize;
  subheading?: string;
  title?: string;
  children: ReactNode;
}

export interface HeaderProps {
  headerMargin?: MarginSize;
}