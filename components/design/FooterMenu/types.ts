export type LinkProps = {
  value: string,
  url: string
}

export type SubenuProps = {
  title: string,
  links: LinkProps[]
}

export interface FooterMenuProps {
  links: SubenuProps[],
  copyright: any,
}