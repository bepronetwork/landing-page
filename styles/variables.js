import { rem } from "polished";

export const colors = {
  black: "#000000",
  white: "#ffffff",
  grey50: "#F1F1F3",
  grey100: "#E3E3E8",
  grey400: "#8F91A3",
  grey500: "#73758C",
  grey600: "#5C5E70",
  grey700: "#454654",
  grey800: "#2E2F38",
  grey850: "#23232A",
  grey900: "#17171C",
  grey950: "#0C0C0E",
  blue150: "#C6CAF7",
  blue200: "#B3B9F4",
  blue300: "#8E96EF",
  blue400: "#6873E9",
  blue500: "#4250E4",
  blue600: "#3540B6",
  blue700: "#283089",
  blue850: "#141844",
  purple500: "#4329A6",
  purple700: "#281964",
  purple800: "#1B1042",
  purple850: "#140C32",
  oracle500: "#9669ED",
  oracle850: "#2D2047",
  green500: "#35E0AD",
  green850: "#104334",
  yellow500: "#FFD646",
  yellow850: "#4D4015",
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

export const global = {
  backgroundColor: colors.grey950,
  hoverTransitionDuration: "0.3s",
  sectionBorderBottom: colors.grey900,
};

export const layout = {
  contentMaxWidth: rem("1344px"),
  sidePadding: rem("16px"),
  sectionTopBottomPadding: rem("80px"),
  sectionSubHeadingMarginBottom: rem("12px"),
  sectionSubHeadingFontSize: rem("16px"),
  sectionSubHeadingColor: colors.blue500,
  productShotGridGap: rem("84px"),
  productShotSubHeadingMarginButton: rem("12px"),
  productShotSubHeadingFontSize: rem("16px"),
  productShotSubHeadingColor: colors.blue500,
  productShotHeadingMarginButton: rem("40px"),
  productShotImageMaxWidth: rem("550px"),
  productShotImageMaxHeight: rem("250px"),
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

export const nav = {
  height: rem("72px"),
  backgroundColor: colors.grey950,
  sidePadding: rem("24px"),
  fontSize: rem("14px"),
  color: colors.white,
  colorHover: colors.grey100,
  fontWeight: typography.fontWeigthMedium,
  breakpoint: "(min-width: 960px)",
  hamburgerWidth: rem("30px"),
  hamburgerLineHeight: rem("4px"),
  drawerTransitionDuration: "0.5s",
};

export const hero = {
  maxWidth: rem("900px"),
  subHeadingMaxWidth: "75%",
};

export const bounties = {
  cardBorderColor: colors.grey700,
  cardBorderColorHover: colors.grey800,
  cardBorderRadius: rem("8px"),
  cardBackgroundColor: colors.grey900,
  cardPadding: rem("15px"),
  networkBackgroundColor: colors.grey850,
  prizeBorderRadius: rem("8px"),
  statusDefaultBackgroundColor: colors.oracle850,
  statusDefaultColor: colors.oracle500,
  statusOpenBackgroundColor: colors.green850,
  statusOpenColor: colors.green500,
  statusFundingBackgroundColor: colors.yellow850,
  statusFundingColor: colors.yellow500,
  statusProposalBackgroundColor: colors.oracle850,
  statusProposalColor: colors.oracle500,
};

export const panel = {
  defaultBorderColor: colors.grey700,
  borderRadius: rem("8px"),
  backgroundColor: colors.grey900,
  padding: rem("24px"),
  color: colors.grey500,
  iconSize: rem("52px"),
  iconDefaultBackgroundColor: colors.grey800,
  iconAlternativeBorderColor: colors.blue400,
  iconAlternativeBackgroundColor: colors.blue500,
};

export const pills = {
  backgroundColor: colors.grey900,
  padding: rem("4px"),
  buttonHeight: rem("32px"),
  buttonSidePadding: rem("24px"),
  buttonColor: colors.grey50,
  activeButtonBackgroundColor: colors.grey950,
  activeButtonColor: colors.blue500,
};

export const forWhomItem = {
  borderRadius: rem("8px"),
  padding: rem("40px"),
  backgroundOpacity: 0.7,
  iconSize: rem("40px"),
  subHeadingFontSize: rem("16px"),
  titleFontSize: rem("60px"),
};

export const audit = {
  cardBorderColor: colors.grey700,
  cardBorderColorHover: colors.grey800,
  cardBorderRadius: rem("8px"),
  cardBackgroundColor: colors.grey900,
};

export const customNetwork = {
  borderRadius: rem("8px"),
  backgroundColor: colors.blue850,
  subHeadingColor: colors.blue400,
  color: colors.blue300,
};

export const card = {
  borderRadius: rem("8px"),
  coverBackgroundColor: colors.grey900,
  color: colors.white,
  descriptionColor: colors.grey400,
  avatarBorderColor: colors.grey800,
  authorColor: colors.white,
  dateColor: colors.grey500,
};

export const newsletter = {
  height: rem("46px"),
  borderColor: colors.grey800,
  borderColorActive: colors.grey700,
  borderRadius: rem("8px"),
  backgroundColor: colors.grey900,
  padding: rem("16px"),
  fontSize: rem("14px"),
  color: colors.white,
  placeholderColor: colors.grey800,
  disabledBackgroundColor: colors.grey900,
};
