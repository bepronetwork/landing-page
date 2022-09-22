import { ReactNode } from "react";

type MarginSize = 's' | 'l' | 'xl';

export interface WrapperProps {
  fullWidth?: boolean;
  padding?: MarginSize;
  headerMargin?: MarginSize;
}

export interface SectionProps {
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