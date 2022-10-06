export type ButtonProps = {
  label: string,
}

export interface TabsProps {
  buttons: ButtonProps[];
  selectedTab: number;
  handleClick: any;
}