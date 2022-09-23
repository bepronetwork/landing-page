import styled from "styled-components";
import { rem } from "polished";
import { nav, hero, global, colors, device } from "@/styles/variables";

export const Wrapper = styled.div`
  position: relative;
  border-bottom: ${rem("1px")} solid ${global.sectionBorderBottom};
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
  }
`;

export const Container = styled.div`
  margin: 0 auto;
  max-width: ${hero.maxWidth};

  h1 {
    margin-bottom: ${rem("24px")};
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

  + img {
    margin: ${rem("5px")} auto ${rem("-5px")} auto;
    max-width: ${hero.maxWidth};
    width: 100%;
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

    + img {
      margin-top: ${rem("143px")};
    }
  }
`;
