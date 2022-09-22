import styled, { css } from "styled-components";
import { rem } from "polished";
import { panel } from "@/styles/variables";

export const Wrapper = styled.div`
  height: 100%;
  border: ${rem("1px")} solid ${panel.defaultBorderColor};
  border-radius: ${panel.borderRadius};
  background-color: ${panel.backgroundColor};
  padding: ${panel.padding};
  text-align: left;

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
