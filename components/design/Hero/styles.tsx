import styled from "styled-components";
import { rem } from "polished";
import { nav, global, colors } from "@/styles/variables";

export const Wrapper = styled.div`
  border-bottom: ${rem("1px")} solid ${global.sectionBorderBottom};
  padding: calc(${nav.height} + ${rem("80px")}) var(--sidePadding) 0
    var(--sidePadding);
  text-align: center;
`;

export const Container = styled.div`
  margin: 0 auto;
  max-width: ${rem("900px")};

  h1 {
    margin-bottom: ${rem("24px")};
  }

  p {
    margin: 0 auto;
    max-width: 75%;
  }

  div {
    margin-top: ${rem("36px")};
    display: flex;
    justify-content: center;

    a {
      margin: ${rem("12px")};
      border-radius: 999px;

      &:last-child {
        span {
          color: ${colors.white};
        }

        svg {
          fill: ${colors.white};
        }
      }
    }
  }

  + img {
    margin: ${rem("143px")} auto ${rem("-5px")} auto;
    max-width: ${rem("900px")};
    width: 100%;
  }
`;
