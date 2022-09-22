import styled from "styled-components";
import { rem } from "polished";
import { global, typography, colors, pills } from "@/styles/variables";

export const Wrapper = styled.div`
  display: inline-block;
  border-radius: 999px;
  background-color: ${pills.backgroundColor};
`;

export const Button = styled.button`
  margin: ${pills.padding};
  border: 0;
  height: ${pills.buttonHeight};
  border-radius: 999px;
  background-color: transparent;
  padding: 0 ${pills.buttonSidePadding};
  color: ${pills.buttonColor};
  font-weight: ${typography.fontWeigthSemiBold};
  text-transform: uppercase;
  transition-duration: ${global.hoverTransitionDuration};

  &:last-child {
    margin-left: calc(${pills.padding} / 2 * -1);
  }

  &:hover {
    cursor: pointer;
    color: ${colors.grey100};
  }

  &.active {
    pointer-events: none;
    background-color: ${pills.activeButtonBackgroundColor};
    color: ${pills.activeButtonColor};
  }
`;
