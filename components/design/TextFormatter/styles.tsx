import styled from "styled-components";
import { rem } from "polished";
import {
  colors,
  layout,
  typography,
  device,
  textFormatter,
} from "@/styles/variables";

export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: ${textFormatter.maxWidth};
  text-align: left;
  color: ${textFormatter.color};
  line-height: 1.3;

  h1 {
    margin: calc(${layout.sectionTopBottomPadding} / 2) 0;
    font-size: ${textFormatter.headingFontSize};
  }

  h2 {
    margin: calc(${layout.sectionTopBottomPadding} / 2) 0 ${rem("20px")} 0;
    font-weight: ${typography.fontWeigthRegular};
    text-transform: uppercase;
  }

  p:not(:last-child) {
    margin-bottom: ${rem("20px")};
  }

  h2,
  p,
  li {
    font-size: ${textFormatter.fontSize};
  }

  ol {
    margin: ${rem("20px")} 0;
    padding: 0;
    list-style-type: lower-roman;
    list-style-position: inside;

    li {
      margin: 0;
    }
  }

  .caps {
    font-size: ${rem("14px")};
    line-height: 1.5;
    text-transform: uppercase;
  }

  .grey {
    color: ${colors.grey500};
  }

  @media ${device.s} {
    h1 {
      margin: ${layout.sectionTopBottomPadding} 0
        calc(${layout.sectionTopBottomPadding} / 2) 0;
    }
  }
`;
