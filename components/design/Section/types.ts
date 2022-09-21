import { ReactNode } from "react";

type MarginSize = 's' | 'l';

export interface SectionProps {
  headerMargin?: MarginSize;
  subheading?: string;
  title?: string;
  children: ReactNode;
}

export interface WrapperProps {
  hasHeading: boolean;
  headerMargin?: string;
}

export interface HeaderProps {
  headerMargin?: MarginSize;
}