import styled from "styled-components";
import { layout, device } from "@/styles/variables";

export const Wrapper = styled.div`
  > div:not(:last-child) {
    margin-bottom: ${layout.sidePadding};
  }

  @media ${device.m} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: ${layout.sidePadding};

    > div:not(:last-child) {
      margin-bottom: 0;
    }
  }

  @media ${device.l} {
    grid-gap: calc(${layout.sectionTopBottomPadding} / 2);
  }
`;
