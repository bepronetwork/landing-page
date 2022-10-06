import styled from "styled-components";
import { rem } from "polished";
import { global, colors, typography, forWhomItem } from "@/styles/variables";

export const Wrapper = styled.div`
  position: relative;
  border-radius: ${forWhomItem.borderRadius};
  display: flex;
  flex-direction: column;
  text-align: left;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: auto 100%;
    background-position: right;
    background-repeat: no-repeat;
    mix-blend-mode: screen;
    opacity: ${forWhomItem.backgroundOpacity};
    z-index: 1;
  }

  > div {
    padding: ${forWhomItem.padding};

    div {
      flex: 1;

      svg {
        width: ${forWhomItem.iconSize};
        height: ${forWhomItem.iconSize};
      }

      > span {
        display: block;
        margin: ${rem("12px")} 0;
        font-size: ${forWhomItem.subHeadingFontSize};
        font-weight: ${typography.fontWeigthMedium};
        text-transform: uppercase;
        letter-spacing: ${rem("1px")};
      }

      h2 {
        position: relative;
        margin-bottom: ${rem("40px")};
        font-size: ${forWhomItem.titleFontSize};
        line-height: 1.1;
        z-index: 2;

        + p {
          margin-bottom: ${rem("30px")};
        }
      }

      p {
        position: relative;
        z-index: 2;
      }
    }
  }

  a {
    position: relative;
    margin-top: ${rem("40px")};
    z-index: 2;
  }

  &.for-developers {
    border: ${rem("1px")} solid ${colors.blue400};
    background-color: ${colors.blue500};

    &:before {
      background-image: url("for-developers--coins.png");
    }

    div {
      > span {
        color: ${colors.blue200};
      }

      p {
        color: ${colors.blue150};
      }
    }
  }

  &.for-contributors {
    background-color: ${colors.grey900};

    > div {
      position: relative;
      border: ${rem("1px")} solid transparent;
      border-radius: ${forWhomItem.borderRadius};
      background-clip: padding-box;
      -webkit-background-clip: padding-box;

      &:before {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        margin: ${rem("-2px")};
        border-radius: inherit;
        background: ${global.gradientBorderColor};
        z-index: -1;
      }
    }

    &:before {
      background-image: url("for-contributors--coins.png");
    }

    div {
      > span {
        color: ${colors.blue500};
      }

      p {
        color: ${colors.grey500};
      }
    }
  }
`;
