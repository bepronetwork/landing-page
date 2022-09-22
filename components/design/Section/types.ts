import { ReactNode } from "react";

type MarginSize = 's' | 'l' | 'xl';

export interface SectionProps {
  padding?: MarginSize;
  headerMargin?: MarginSize;
  subheading?: string;
  title?: string;
  children: ReactNode;
}

export interface WrapperProps {
  padding?: MarginSize;
  headerMargin?: MarginSize;
}

export interface HeaderProps {
  headerMargin?: MarginSize;
}