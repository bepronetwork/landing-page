import { ReactNode } from "react";

export interface PanelProps {
  color?: string;
  icon: string;
  title: string;
  children: ReactNode;
}