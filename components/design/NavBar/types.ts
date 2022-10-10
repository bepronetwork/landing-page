export type MenuProps = {
  label: string,
  url: string,
  external?: boolean
}

export interface NavbarProps {
  menu: MenuProps[];
  ctaValue: string;
  ctaUrl: string;
  drawerOpened?: boolean;
  drawerOnClick?: (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>) => void;
}