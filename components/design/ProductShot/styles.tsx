import styled from "styled-components";
import { rem } from "polished";
import { global, colors, typography, layout } from "@/styles/variables";
import { WrapperProps } from "./types";

export const Wrapper = styled.div<WrapperProps>`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: ${layout.productShotGridGap};

  &:not(:last-child) {
    margin-bottom: ${rem("112px")};
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;

    &:first-child {
      order: ${(props) => (props.invert ? 2 : 1)};
    }

    &:last-child {
      order: ${(props) => (props.invert ? 1 : 2)};
    }
  }
`;

export const Content = styled.div`
  text-align: left;

  > span {
    margin-bottom: ${layout.productShotSubHeadingMarginButton};
    font-size: ${layout.productShotSubHeadingFontSize};
    color: ${layout.productShotSubHeadingColor};
    text-transform: uppercase;
  }

  h2 {
    margin-bottom: ${layout.productShotHeadingMarginButton};
  }

  p:not(:last-child) {
    margin-bottom: ${rem("16px")};
  }

  a {
    display: flex;
    align-items: center;
    letter-spacing: ${rem("1px")};
    text-transform: uppercase;
    text-decoration: none;

    span {
      font-size: ${rem("14px")};
      font-weight: ${typography.fontWeigthMedium};
      color: ${colors.blue500};
      line-height: 1;
      transition-duration: ${global.hoverTransitionDuration};
    }

    svg {
      margin-left: ${rem("8px")};
      width: auto;
      height: ${rem("20px")};
      fill: ${colors.blue500};
      transition-duration: ${global.hoverTransitionDuration};
    }

    &:hover {
      span {
        color: ${colors.blue600};
      }

      svg {
        fill: ${colors.blue600};
      }
    }
  }
`;

export const Image = styled.div`
  img {
    width: 100%;
    max-width: ${layout.productShotImageMaxWidth};
    max-height: ${layout.productShotImageMaxHeight};
  }
`;
