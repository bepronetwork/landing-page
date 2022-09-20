import { ReactNode } from "react";

export interface PanelProps {
  color?: string;
  icon: ReactNode;
  title: string | ReactNode;
  children: ReactNode;
}