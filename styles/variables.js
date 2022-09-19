import { rem } from "polished";

export const colors = {
  black: "#000000",
  white: "#ffffff",
  grey400: "#8F91A3",
  grey900: "#17171C",
  grey950: "#0C0C0E",
};

export const device = {
  xs: `(min-width: 375px)`,
  s: `(min-width: 700px)`,
  m: `(min-width: 900px)`,
  l: `(min-width: 1280px)`,
  xl: `(min-width: 1600px)`,
  touch: `(hover: none) and (pointer: coarse)`,
  mouse: "(min-width: 538px) and (min-height: 720px)",
};

export const layout = {
  contentMaxWidth: rem("1360px"),
  sidePadding: rem("15px"),
  sectionTopBottomPadding: rem("80px"),
};

export const typography = {
  fontFamily: "'Space Grotesk', Verdana, Arial, Helvetica, sans-serif",
  fontWeigthLight: 300,
  fontWeigthRegular: 400,
  fontWeigthMedium: 500,
  fontWeigthSemiBold: 600,
  fontWeigthBold: 700,
  fontSize: rem("16px"),
};
