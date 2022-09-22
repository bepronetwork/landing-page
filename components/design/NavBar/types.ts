export type MenuProps = {
  label: string,
  url: string
}

export interface NavbarProps {
  menu: MenuProps[];
  ctaValue: string;
  ctaUrl: string;
  drawerOpened?: boolean;
  drawerOnClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}