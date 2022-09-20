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
  p,
  span {
    font-size: ${rem("18px")};
  }

  h3 {
    margin: ${rem("64px")} 0 ${rem("12px")} 0;
    text-transform: uppercase;
    letter-spacing: ${rem("1px")};

    span {
      color: ${colors.grey500};
    }
  }

  p {
    color: ${colors.grey500};
  }

  > div {
    border: ${rem("1px")} solid ${colors.grey700};
    border-radius: 999px;
    background-color: ${colors.grey800};
    width: ${rem("52px")};
    height: ${rem("52px")};
    overflow: hidden;

    ${(props) =>
      props.color === "blue" &&
      css`
        border: ${rem("1px")} solid ${colors.blue400};
        background-color: ${colors.blue500};
      `}
  }
`;
