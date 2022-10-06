import { ReactNode } from "react";

export interface ProductShotProps {
  subheading?: string;
  title: string;
  imgSrc: string;
  imgAlt: string;
  children: ReactNode;
  invert?: boolean;
}

export interface WrapperProps {
  invert: boolean;
}