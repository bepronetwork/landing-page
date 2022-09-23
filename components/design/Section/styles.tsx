import styled, { css } from "styled-components";
import { rem, rgba } from "polished";
import { layout, global, colors, typography, device } from "@/styles/variables";
import { WrapperProps, HeaderProps } from "./types";

export const Wrapper = styled.div<WrapperProps>`
  position: relative;
  border-bottom: ${rem("1px")} solid ${global.sectionBorderBottom};
  padding: ${(props) =>
    props.fullWidth
      ? `${layout.sectionTopBottomPadding} 0`
      : `${layout.sectionTopBottomPadding} var(--sidePadding)`};
  overflow: hidden;

  ${(props) =>
    props.lightOn &&
    css`
      &:before {
        content: "";
        position: absolute;
        top: ${rem("-135px")};
        left: 0;
        width: 100%;
        height: ${rem("270px")};
        background: radial-gradient(
          50% 50% at 50% 50%,
          ${rgba(colors.grey900, 0.4)} 0%,
          ${rgba(global.backgroundColor, 0)} 100%
        );
      }
    `}

  @media ${device.m} {
    ${(props) =>
      props.padding === "s" &&
      css`
        padding: calc(${layout.sectionTopBottomPadding} / 2) var(--sidePadding);
      `}

    ${(props) =>
      props.padding === "xl" &&
      css`
        padding: calc(${layout.sectionTopBottomPadding} * 2) var(--sidePadding);
      `}
  }
`;

export const Container = styled.div<WrapperProps>`
  margin: 0 auto;
  max-width: ${(props) => (props.fullWidth ? "100%" : layout.contentMaxWidth)};
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
