export type MenuProps = {
  label: string,
  url: string
}

export interface NavbarProps {
  menu: MenuProps[];
  ctaValue: string;
  ctaUrl: string;
}