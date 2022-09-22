import styled from "styled-components";
import { layout } from "@/styles/variables";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: calc(${layout.sectionTopBottomPadding} / 2);
`;
