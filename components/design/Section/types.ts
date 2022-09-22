import { ReactNode } from "react";

type MarginSize = 's' | 'l' | 'xl';

export interface SectionProps {
  headerMargin?: MarginSize;
  subheading?: string;
  title?: string;
  children: ReactNode;
}

export interface WrapperProps {
  headerMargin?: string;
}

export interface HeaderProps {
  headerMargin?: MarginSize;
}