import styled from "styled-components";
import { colors, typography } from "@/styles/variables";;

export const Wrapper = styled.div`
  .CookieConsent {
    background-color: ${colors.grey900};
    border-top: 1px solid ${colors.grey850};
    font-weight: ${typography.fontWeigthMedium};
    font-size: ${typography.fontSize};
    bottom: 0px;
    align-items: baseline;
    color: white;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    left: 0px;
    position: fixed;
    width: 100%;
    z-index: 1040;
    padding: 5px 20px;
  }
`;