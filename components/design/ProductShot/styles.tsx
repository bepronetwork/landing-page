import styled from "styled-components";
import { rem } from "polished";
import { global, colors, typography, layout, device } from "@/styles/variables";
import { WrapperProps } from "./types";

export const Wrapper = styled.div<WrapperProps>`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: calc(${layout.productShotGridGap} / 2);

  &:not(:last-child) {
    margin-bottom: ${rem("112px")};
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;

    &:first-child {
      order: 1;
    }

    &:last-child {
      order: 2;
    }
  }

  @media ${device.m} {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: ${layout.productShotGridGap};

    > div {
      &:first-child {
        order: ${(props) => (props.invert ? 2 : 1)};
      }

      &:last-child {
        order: ${(props) => (props.invert ? 1 : 2)};
      }
    }
  }
`;

export const Content = styled.div`
  > span {
    margin-bottom: ${layout.productShotSubHeadingMarginButton};
    font-size: ${layout.productShotSubHeadingFontSize};
    color: ${layout.productShotSubHeadingColor};
    text-transform: uppercase;
    letter-spacing: ${rem("1px")};
  }

  h2 {
    margin-bottom: ${layout.productShotHeadingMarginBottom};
  }

  p:not(:last-child) {
    margin-bottom: ${rem("16px")};
  }

  a {
    margin: 0 auto;

    &.minimal {
      display: flex;
      justify-content: center;
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
  }

  @media ${device.m} {
    text-align: left;

    a {
      margin: 0;

      &.minimal {
        justify-content: flex-start;
      }
    }
  }
`;

export const Image = styled.div`
  img {
    margin: 0 auto;
    width: 100%;
    max-width: ${layout.productShotImageMaxWidth};
    max-height: ${layout.productShotImageMaxHeight};
  }

  @media ${device.m} {
    margin: 0;
  }
`;
