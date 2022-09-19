import styled, { css } from "styled-components";
import { rem } from "polished";
import { colors } from "@/styles/variables";

export const Wrapper = styled.div`
  border: ${rem("1px")} solid ${colors.grey700};
  border-radius: ${rem("8px")};
  background-color: ${colors.grey900};
  padding: ${rem("24px")};
  text-align: left;

  h3,
  p {
    font-size: ${rem("18px")};
  }

  h3 {
    margin: ${rem("64px")} 0 ${rem("12px")} 0;
    text-transform: uppercase;
    letter-spacing: ${rem("1px")};
  }

  > div {
    border: ${rem("1px")} solid ${colors.grey700};
    border-radius: 999px;
    background-color: ${colors.grey800};
    width: ${rem("52px")};
    height: ${rem("52px")};

    ${(props) =>
      props.color === "blue" &&
      css`
        border: ${rem("1px")} solid ${colors.blue400};
        background-color: ${colors.blue500};
      `}

    svg {
      width: 100%;
      height: 100%;
    }
  }
`;
