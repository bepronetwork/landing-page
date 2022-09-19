import styled from "styled-components";
import { rem } from "polished";
import { colors } from "@/styles/variables";
import { WrapperProps } from "./types";

export const Wrapper = styled.div<WrapperProps>`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: ${rem("84px")};

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;

    &:first-child {
      order: ${(props) => (props.invert ? 2 : 1)};
    }

    &:last-child {
      order: ${(props) => (props.invert ? 1 : 2)};
    }
  }
`;

export const Content = styled.div`
  text-align: left;

  span {
    margin-bottom: ${rem("12px")};
    font-size: ${rem("16px")};
    color: ${colors.blue500};
    text-transform: uppercase;
  }

  h2 {
    margin-bottom: ${rem("40px")};
  }

  p:not(:last-child) {
    margin-bottom: ${rem("16px")};
  }
`;

export const Image = styled.div`
  img {
    width: 100%;
  }
`;
