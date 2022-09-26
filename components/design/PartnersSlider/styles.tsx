import styled, { keyframes } from "styled-components";
import { rem } from "polished";
import { PartnersSliderProps } from "./types";

const marquee = keyframes`
  0% {
    transform: translateX(0%);
  }

  100% {
    transform: translateX(-100%);
  }
`;

export const Slider = styled.div<PartnersSliderProps>`
  position: relative;
  overflow: hidden;
  width: 200%;
  height: ${rem("80px")};

  ul {
    position: absolute;
    width: 200%;
    height: ${rem("80px")};
    margin: 0;
    padding: 0;
    display: flex;
    animation: ${marquee} ${(props) => props.speed}s linear infinite;

    li {
      list-style: none;
      margin: 0 ${rem("30px")};
      display: flex;
      justify-content: center;
      align-items: center;

      svg {
        width: auto;
        max-width: ${rem("200px")};
        height: ${rem("80px")};
      }

      img {
        max-width: ${rem("200px")};
        height: auto;
      }
    }
  }

  &:hover {
    ul {
      animation-play-state: paused;
    }
  }
`;
