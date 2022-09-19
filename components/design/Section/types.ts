import { ReactNode } from "react";

export interface SectionProps {
  subheading?: string;
  title?: string;
  children: ReactNode;
}