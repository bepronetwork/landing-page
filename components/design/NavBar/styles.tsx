import styled from "styled-components";
import { rem } from "polished";
import { colors, typography, global, nav } from "@/styles/variables";

export const Wrapper = styled.div`
  border-bottom: ${rem("1px")} solid ${nav.borderBottomColor};
  background-color: ${nav.backgroundColor};
  height: ${rem("72px")};
  padding: 0 ${rem("24px")};
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    width: auto;
    height: ${rem("40px")};
  }
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;

  ul {
    margin-right: ${rem("48px")};
    display: flex;

    li {
      a {
        font-size: ${nav.fontSize};
        font-weight: ${nav.fontWeight};
        text-transform: uppercase;
        text-decoration: none;
        letter-spacing: ${rem("1px")};
        color: ${nav.color};
        transition-duration: ${global.hoverTransitionDuration};

        &:hover {
          color: ${nav.colorHover};
        }
      }

      &:not(:last-child) {
        margin-right: ${rem("48px")};
      }
    }
  }

  > a {
    height: ${rem("38px")};
    border-radius: 999px;
    padding: 0 ${rem("20px")};

    span {
      margin-top: ${rem("1px")};
      font-size: ${nav.fontSize};
      line-height: 1;
    }

    svg {
      width: ${rem("16px")};
      height: auto;
    }
  }
`;
