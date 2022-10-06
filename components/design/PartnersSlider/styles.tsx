import styled from "styled-components";
import { rem } from "polished";
import { device } from "@/styles/variables";
import { PartnersSliderProps } from "./types";

export const Slider = styled.div<PartnersSliderProps>`
  width: 100vw;
  height: ${rem("80px")};

  ul {
    height: ${rem("80px")};
    margin: 0;
    padding: 0;
    display: flex;

    li {
      list-style: none;
      margin: 0 ${rem("30px")};
      display: flex;
      justify-content: center;
      align-items: center;

      svg {
        width: auto;
        max-width: ${rem("150px")};
        height: ${rem("60px")};
      }

      img {
        max-width: ${rem("200px")};
        height: auto;
      }

      @media ${device.m} {
        margin: 0 ${rem("30px")};

        svg {
          max-width: ${rem("200px")};
          height: ${rem("80px")};
        }
      }
    }
  }
`;
