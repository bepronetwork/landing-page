import styled, { css } from "styled-components";
import { rem } from "polished";
import { global, panel } from "@/styles/variables";

export const Wrapper = styled.div`
  position: relative;
  height: 100%;
  border: ${rem("1px")} solid transparent;
  border-radius: ${panel.borderRadius};
  padding: ${panel.padding};
  text-align: left;
  background-color: ${panel.backgroundColor};
  background-clip: padding-box;
  -webkit-background-clip: padding-box;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: ${rem("-1px")};
    border-radius: inherit;
    background: ${global.gradientBorderColor};
    z-index: -1;
  }

  h3,
  p,
  span {
    font-size: ${rem("18px")};
  }

  h3 {
    margin: ${rem("64px")} 0 ${rem("12px")} 0;
    text-transform: uppercase;
    letter-spacing: ${rem("1px")};

    span {
      color: ${panel.color};
    }
  }

  p {
    color: ${panel.color};
  }

  > div {
    border: ${rem("1px")} solid ${panel.defaultBorderColor};
    border-radius: 999px;
    background-color: ${panel.iconDefaultBackgroundColor};
    width: ${panel.iconSize};
    height: ${panel.iconSize};
    overflow: hidden;

    ${(props) =>
      props.color === "blue" &&
      css`
        border: ${rem("1px")} solid ${panel.iconAlternativeBorderColor};
        background-color: ${panel.iconAlternativeBackgroundColor};
      `}
  }
`;
