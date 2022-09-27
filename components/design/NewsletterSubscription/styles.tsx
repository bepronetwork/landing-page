import styled from "styled-components";
import { rem } from "polished";
import { layout, colors, newsletter, device } from "@/styles/variables";

export const Container = styled.div`
  @media ${device.m} {
    display: flex;
  }
`;

export const Description = styled.div`
  text-align: left;
  margin-right: calc(${layout.sectionTopBottomPadding} / 2);

  @media ${device.m} {
    width: 50%;
  }

  @media ${device.l} {
    width: 60%;
  }

  span {
    margin-bottom: ${layout.sectionSubHeadingMarginBottom};
    font-size: ${layout.sectionSubHeadingFontSize};
    color: ${layout.sectionSubHeadingColor};
    text-transform: uppercase;
    letter-spacing: ${rem("1px")};
  }

  p {
    margin-top: ${layout.sectionSubHeadingMarginBottom};
  }
`;

export const Field = styled.div`
  margin-top: calc(${layout.sidePadding} * 2);
  display: flex;
  align-items: center;

  @media ${device.m} {
    margin-top: 0;
    width: 50%;
  }

  @media ${device.l} {
    width: 40%;
  }
`;

export const Input = styled.div`
  display: flex;
  width: 100%;

  input {
    --placeholder: ${newsletter.placeholderColor};

    flex: 1;
    margin-right: ${rem("12px")};
    border: 1px solid ${newsletter.borderColor};
    border-radius: ${newsletter.borderRadius};
    background-color: ${newsletter.backgroundColor};
    height: ${newsletter.height};
    padding: 0 ${newsletter.padding};
    font-family: inherit;
    font-size: ${newsletter.fontSize};
    letter-spacing: ${rem("1px")};
    color: ${newsletter.color};
    transition-duration: 0.3s;

    &:focus {
      outline: none;
      border-color: ${newsletter.borderColorActive};
    }

    &:disabled {
      border-color: ${colors.grey800};
      background-color: ${newsletter.disabledBackgroundColor};
      color: var(--placeholder);
    }

    &::placeholder {
      color: var(--placeholder);
      text-transform: uppercase;
      opacity: 1;
    }

    &:-ms-input-placeholder {
      color: var(--placeholder);
      text-transform: uppercase;
      opacity: 1;
    }

    &::-ms-input-placeholder {
      color: var(--placeholder);
      text-transform: uppercase;
      opacity: 1;
    }
  }

  button {
    height: ${newsletter.height};
  }
`;
