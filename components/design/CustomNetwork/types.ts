import { ReactNode } from "react";

export interface CustomNetworkProps {
  title: string,
  subheading: string,
  children: ReactNode
  imgSrc: string,
  imgAlt: string,
}

export interface WrapperProps {
  imgSrc: string
}