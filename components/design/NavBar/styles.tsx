import styled from "styled-components";
import { rem } from "polished";
import { global, nav, colors, typography } from "@/styles/variables";

export const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  border-bottom: ${rem("1px")} solid ${global.sectionBorderBottom};
  background-color: ${nav.backgroundColor};
  height: ${nav.height};
  padding: 0 ${nav.sidePadding};
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 3;

  svg {
    width: auto;
    height: ${rem("40px")};
  }
`;

export const Menu = styled.div`
  display: none;

  @media ${nav.breakpoint} {
    display: flex;
    align-items: center;
  }

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

export const HamburgerButton = styled.button`
  border: 0;
  display: block;
  background-color: transparent;
  width: ${nav.hamburgerWidth};
  padding: 0;
  cursor: pointer;

  &:before,
  &:after {
    content: "";
    display: block;
    border-radius: 999px;
    background-color: ${colors.white};
    height: ${nav.hamburgerLineHeight};
    transition: all 200ms ease-in-out;
  }

  &:before {
    box-shadow: 0 calc(${nav.hamburgerLineHeight} * 2) 0 ${colors.white};
    margin-bottom: calc(${nav.hamburgerLineHeight} * 3);
  }

  &.opened:before {
    box-shadow: 0 0 0 ${colors.white};
    transform: translateY(${rem("10px")}) rotate(45deg);
  }

  &.opened:after {
    transform: translateY(${rem("-6px")}) rotate(-45deg);
  }

  @media ${nav.breakpoint} {
    display: none;
  }
`;

export const Drawer = styled.div`
  background-color: ${nav.backgroundColor};
  position: fixed;
  width: 100vw;
  height: 0;
  padding: 0 ${nav.sidePadding};
  overflow-y: hidden;
  z-index: 1;
  transition: all ${nav.drawerTransitionDuration} ease-in-out;

  ul {
    margin: 0;
    padding: 0;

    li {
      list-style: none;
      border-bottom: ${rem("1px")} solid ${global.sectionBorderBottom};
      padding-bottom: ${rem("10px")};
      white-space: nowrap;

      &:not(:last-child) {
        margin-bottom: ${rem("40px")};
      }

      a {
        color: ${colors.white};
        font-weight: ${typography.fontWeigthRegular};
        text-decoration: none;
      }
    }
  }

  &.opened {
    height: 100vh;
    padding: calc(${nav.height} + ${rem("40px")}) ${nav.sidePadding};
    overflow-y: auto;
    scrollbar-width: none;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: -ms-autohiding-scrollbar;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  @media ${nav.breakpoint} {
    display: none;
  }
`;
