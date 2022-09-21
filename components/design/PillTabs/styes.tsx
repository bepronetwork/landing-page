import { global, typography, colors } from "@/styles/variables";
import styled from "styled-components";
import { rem } from "polished";

export const Wrapper = styled.div`
  display: inline-block;
  border-radius: 999px;
  background-color: ${colors.grey900};
`;

export const Button = styled.button`
  margin: ${rem("4px")};
  border: 0;
  height: ${rem("32px")};
  border-radius: 999px;
  background-color: transparent;
  padding: 0 ${rem("24px")};
  color: ${colors.grey50};
  font-weight: ${typography.fontWeigthSemiBold};
  text-transform: uppercase;
  transition-duration: ${global.hoverTransitionDuration};

  &:last-child {
    margin-left: ${rem("-2px")};
  }

  &:hover {
    cursor: pointer;
    color: ${colors.grey100};
  }

  &.active {
    pointer-events: none;
    background-color: ${colors.grey950};
    color: ${colors.blue500};
  }
`;
