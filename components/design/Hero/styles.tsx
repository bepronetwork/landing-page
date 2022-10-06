import styled from "styled-components";
import { rem } from "polished";
import {
  nav,
  hero,
  global,
  colors,
  device,
  typography,
} from "@/styles/variables";

export const Wrapper = styled.div`
  position: relative;
  border-bottom: ${rem("1px")} solid ${global.sectionBorderBottom};
  background-image: url("pattern.svg");
  background-position: center;
  padding: calc(${nav.height} + ${rem("80px")}) var(--sidePadding) 0
    var(--sidePadding);
  text-align: center;
  overflow: hidden;

  &:before {
    content: "";
    position: absolute;
    top: ${rem("-135px")};
    left: 0;
    margin-top: ${nav.height};
    width: 100%;
    height: ${rem("270px")};
    background: radial-gradient(
      50% 50% at 50% 50%,
      rgba(55, 66, 185, 0.18) 0%,
      rgba(55, 66, 185, 0) 100%
    );
    z-index: 1;
  }
`;

export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: ${hero.maxWidth};
  z-index: 2;

  > a {
    margin: 0 auto;
    max-width: max-content;
    border-radius: 999px;
    background-color: ${colors.orange850};
    display: flex;
    align-items: center;
    padding: ${rem("4px")} ${rem("16px")} ${rem("4px")} ${rem("4px")};
    color: ${colors.orange50};
    text-decoration: none;
    transition-duration: ${global.hoverTransitionDuration};

    span {
      font-size: ${rem("14px")};
      transition-duration: ${global.hoverTransitionDuration};

      &.status {
        border-radius: 999px;
        background-color: ${colors.orange500};
        padding: ${rem("3px")} ${rem("10px")};
        font-weight: ${typography.fontWeigthMedium};
        color: ${colors.white};
      }

      &.version {
        margin: 0 ${rem("12px")};
      }
    }

    svg {
      width: auto;
      height: ${rem("20px")};
      fill: ${colors.orange50};
    }

    &:hover {
      background-color: ${colors.orange900};

      span.status {
        background-color: ${colors.orange600};
      }
    }
  }

  h1 {
    margin: ${rem("24px")} 0;
  }

  p {
    margin: 0 auto;
    max-width: ${hero.subHeadingMaxWidth};
  }

  div {
    margin-top: ${rem("36px")};

    a {
      margin-bottom: ${rem("12px")};
      border-radius: 999px;
      width: 100%;

      &:last-child {
        span {
          color: ${colors.white};
        }

        svg {
          fill: ${colors.white};
        }
      }
    }
  }

  @media ${device.s} {
    div {
      display: flex;
      justify-content: center;

      a {
        margin: ${rem("12px")};
        width: inherit;
      }
    }
  }
`;

export const Image = styled.div`
  margin: ${rem("36px")} auto ${rem("-5px")} auto;
  max-width: ${hero.maxWidth};
  width: 100%;

  @media ${device.s} {
    margin-top: ${rem("143px")};
  }
`;
