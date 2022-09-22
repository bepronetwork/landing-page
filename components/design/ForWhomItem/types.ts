import { ReactNode } from "react";

export interface ForWhomItemProps {
  className: string;
  icon: ReactNode;
  subheading: string;
  title: string;
  url: string;
  buttonLabel: string;
  children: ReactNode;
}