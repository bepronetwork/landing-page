import styled from "styled-components";
import { rem } from "polished";
import { layout, global, colors, typography } from "@/styles/variables";

interface WrapperProps {
  hasHeading: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
  border-bottom: ${rem("1px")} solid ${global.sectionBorderBottom};
  padding: ${(props) =>
    props.hasHeading
      ? `${layout.sectionTopBottomPadding} var(--sidePadding)`
      : `calc(${layout.sectionTopBottomPadding} * 2) var(--sidePadding)`};
`;

export const Container = styled.div`
  margin: 0 auto;
  max-width: ${layout.contentMaxWidth};
  text-align: center;

  h4 {
    margin-top: ${rem("30px")};
    font-size: ${rem("16px")};
    font-weight: ${typography.fontWeigthRegular};
    color: ${colors.grey600};
    text-transform: uppercase;
  }
`;

export const Header = styled.div`
  margin-bottom: ${rem("40px")};

  span {
    margin-bottom: ${rem("12px")};
    font-size: ${rem("16px")};
    color: ${colors.blue500};
    text-transform: uppercase;
  }
`;
