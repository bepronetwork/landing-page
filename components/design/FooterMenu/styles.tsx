import styled from "styled-components";
import { rem } from "polished";
import { colors, typography, global } from "@/styles/variables";

export const Menu = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  text-align: left;
  font-size: ${rem("14px")};
  text-transform: uppercase;
  letter-spacing: ${rem("1px")};

  > div {
    h2 {
      font-size: ${rem("14px")};
      font-weight: ${typography.fontWeigthSemiBold};
    }

    ul {
      margin: ${rem("20px")} 0 0 0;
      padding: 0;

      li {
        list-style: none;

        &:not(:last-child) {
          margin-bottom: ${rem("16px")};
        }

        a {
          color: ${colors.grey500};
          text-decoration: none;
          transition-duration: ${global.hoverTransitionDuration};

          &:hover {
            color: ${colors.grey600};
          }
        }
      }
    }
  }
`;

export const Copyright = styled.div`
  margin-top: ${rem("56px")};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${rem("32px")} 0 ${rem("8px")} 0;

  svg {
    width: auto;
    height: ${rem("40px")};
  }

  span {
    font-size: ${rem("12px")};
    color: ${colors.grey700};
    text-transform: uppercase;
  }
`;
