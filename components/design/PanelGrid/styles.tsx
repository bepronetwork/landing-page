import styled from "styled-components";
import { rem } from "polished";
import { device, layout } from "@/styles/variables";

export const Wrapper = styled.div`
  margin-top: ${rem("40px")};

  > div:not(:last-child) {
    margin-bottom: ${layout.sidePadding};
  }

  @media ${device.m} {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: ${layout.sidePadding};

    > div {
      margin-bottom: 0;
    }
  }

  @media ${device.l} {
    grid-gap: ${rem("40px")};
  }
`;
