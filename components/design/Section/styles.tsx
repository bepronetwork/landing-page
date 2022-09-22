import styled, { css } from "styled-components";
import { rem } from "polished";
import { layout, global, colors, typography } from "@/styles/variables";
import { WrapperProps, HeaderProps } from "./types";

export const Wrapper = styled.div<WrapperProps>`
  border-bottom: ${rem("1px")} solid ${global.sectionBorderBottom};
  padding: ${layout.sectionTopBottomPadding} var(--sidePadding);

  ${(props) =>
    props.headerMargin === "xl" &&
    css`
      padding: calc(${layout.sectionTopBottomPadding} * 2) var(--sidePadding);
    `}
`;

export const Container = styled.div`
  margin: 0 auto;
  max-width: ${layout.contentMaxWidth};
  text-align: center;

  h4 {
    margin: ${rem("40px")} 0 ${rem("50px")} 0;
    font-size: ${rem("16px")};
    font-weight: ${typography.fontWeigthRegular};
    color: ${colors.grey600};
    text-transform: uppercase;
  }
`;

export const Header = styled.div<HeaderProps>`
  margin-bottom: ${rem("80px")};

  ${(props) =>
    props.headerMargin === "s" &&
    css`
      margin-bottom: ${rem("40px")};
    `}

  span {
    margin-bottom: ${layout.sectionSubHeadingMarginBottom};
    font-size: ${layout.sectionSubHeadingFontSize};
    color: ${layout.sectionSubHeadingColor};
    text-transform: uppercase;
  }
`;
