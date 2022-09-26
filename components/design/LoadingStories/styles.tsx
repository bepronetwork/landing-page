import styled from "styled-components";
import { rem } from "polished";
import { colors } from "@/styles/variables";

export const Wrapper = styled.div`
  .card {
    border-color: ${colors.grey850};
    background-color: ${colors.grey900};

    > div {
      background: ${colors.grey800};
      background-image: -webkit-linear-gradient(
        left,
        ${colors.grey800} 0%,
        ${colors.grey900} 20%,
        ${colors.grey800} 40%,
        ${colors.grey800} 100%
      );
      background-repeat: no-repeat;
      background-size: ${rem("800px")} 100%;
      animation-fill-mode: forwards;
      animation-name: placeholderSkeleton;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
      animation-duration: 1.5s;

      &.avatar {
        border-color: ${colors.grey800};
      }
    }
  }

  .title,
  .subtitle,
  .paragraph {
    background: ${colors.grey900};
    background-image: -webkit-linear-gradient(
      left,
      ${colors.grey900} 0%,
      ${colors.grey800} 20%,
      ${colors.grey900} 40%,
      ${colors.grey900} 100%
    );
    background-repeat: no-repeat;
    background-size: ${rem("800px")} 100%;
    animation-fill-mode: forwards;
    animation-name: placeholderSkeleton;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-duration: 1.5s;

    &.avatar {
      border-color: ${colors.grey800};
    }
  }
`;
