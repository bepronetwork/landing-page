import { createGlobalStyle } from 'styled-components';
import { rem } from 'polished';
import { layout, colors, typography, device, global } from './variables';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
  }

  :root {
    --fontSize: ${typography.fontSize};
    --sidePadding: ${layout.sidePadding};

    @media ${device.s} {
      --fontSize: ${rem("20px")};
      --sidePadding: calc(${layout.sidePadding} * 3);
    }
  }

  html {
    font-size: 16px;
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    background-color: ${global.backgroundColor};
    font-family: ${typography.fontFamily};
    font-size: var(--fontSize);
    font-weight: ${typography.fontWeigthRegular};
    font-feature-settings: 'ss04' on;
    color: ${colors.grey400};
    overflow-x: hidden;
  }

  h1, h2, h3, h4 {
    margin: 0;
    font-weight: ${typography.fontWeigthSemiBold};
    color: ${colors.white};
  }

  h1 {
    font-size: ${rem('44px')};
    line-height: 1.1;
  }

  h2 {
    font-size: ${rem('32px')};
    /* line-height: 1.3; */
  }

  h3, h4 {
    font-size: var(--fontSize);
    /* line-height: 1.2; */
  }

  span {
    font-size: var(--fontSize);
    /* line-height: 1.3; */
  }

  p {
    margin: 0;
    font-size: var(--fontSize);
    /* line-height: 1.3; */

    /* &:not(:last-child) {
      margin-bottom: ${rem('10px')};
    } */
  }

  ul {
    margin: 0;
    padding: 0;

    li {
      list-style: none;
    }
  }

  button {
    font-family: ${typography.fontFamily};
    font-feature-settings: 'ss04' on;
  }

  .sr-only {
    position: absolute !important;
    margin: 0;
    border: 0;
    width: ${rem('1px')};
    height: auto;
    padding: 0;
    white-space: nowrap;
    overflow: hidden;
    clip: rect(0 0 0 0);
  }

  @media ${device.m} {
    h1 {
      font-size: ${rem('72px')};
    }

    h2 {
      font-size: ${rem('36px')};
    }
  }

  @media screen and (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: auto;
    }
  }
`;

export default GlobalStyle;
