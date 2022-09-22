import styled from "styled-components";
import { layout, device } from "@/styles/variables";

export const Wrapper = styled.div`
  margin: calc(${layout.sectionTopBottomPadding} / 2) 0;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: ${layout.sectionTopBottomPadding};

  @media ${device.s} {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: ${layout.sidePadding};
  }

  @media ${device.l} {
    grid-template-columns: repeat(4, 1fr);
    grid-gap: calc(${layout.sectionTopBottomPadding} / 2);
  }
`;
