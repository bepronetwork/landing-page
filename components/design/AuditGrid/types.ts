import { ReactNode } from "react";

export type ItemsProps = {
  url: string
  logo: ReactNode;
  desc: string,
}

export interface AuditGridProps {
  items: ItemsProps[];
}