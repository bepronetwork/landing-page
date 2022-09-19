import styled from "styled-components";
import { rem } from "polished";

export const Wrapper = styled.div`
  margin-top: ${rem("40px")};
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: ${rem("40px")};
`;
