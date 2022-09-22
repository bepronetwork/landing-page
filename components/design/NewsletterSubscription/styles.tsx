import styled from "styled-components";
import { rem } from "polished";
import { layout, colors, newsletter } from "@/styles/variables";

export const Container = styled.div`
  display: flex;
`;

export const Description = styled.div`
  width: 60%;
  text-align: left;
  margin-right: calc(${layout.sectionTopBottomPadding} / 2);

  span {
    margin-bottom: ${layout.sectionSubHeadingMarginBottom};
    font-size: ${layout.sectionSubHeadingFontSize};
    color: ${layout.sectionSubHeadingColor};
    text-transform: uppercase;
  }

  p {
    margin-top: ${layout.sectionSubHeadingMarginBottom};
  }
`;

export const Field = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
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
