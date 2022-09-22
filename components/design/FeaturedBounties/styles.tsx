import styled, { css } from "styled-components";
import { rem } from "polished";
import {
  layout,
  global,
  bounties,
  device,
  colors,
  typography,
} from "@/styles/variables";
import { BountyStatusProps } from "./types";

export const Bounties = styled.div`
  margin-bottom: calc(${layout.sectionTopBottomPadding} / 2);
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  grid-gap: ${rem("16px")};

  @media ${device.m} {
    margin-bottom: ${layout.sectionTopBottomPadding};
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-gap: calc(${layout.sectionTopBottomPadding} / 2);
  }

  + a {
    margin: 0 auto;

    span {
      color: ${colors.white};
    }

    svg {
      fill: ${colors.white};
    }

    &:hover {
      span {
        color: ${colors.grey100};
      }

      svg {
        fill: ${colors.grey100};
      }
    }
  }
`;

export const Bounty = styled.div<BountyStatusProps>`
  a {
    display: block;
    border: ${rem("1px")} solid ${bounties.cardBorderColor};
    border-radius: ${bounties.cardBorderRadius};
    background-color: ${bounties.cardBackgroundColor};
    padding: ${bounties.cardPadding};
    text-decoration: none;
    transition-duration: ${global.hoverTransitionDuration};

    &:hover {
      border-color: ${bounties.cardBorderColorHover};
    }

    > div {
      display: flex;
      justify-content: space-between;

      &:first-child {
        margin-bottom: ${rem("32px")};
      }

      > div {
        display: flex;
        align-items: center;
        overflow: hidden;

        span {
          font-size: ${rem("12px")};
          line-height: 1;
          letter-spacing: ${rem("1px")};
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        &.network {
          flex: 1;
          max-width: min-content;
          margin-right: ${rem("30px")};
          border-radius: ${rem("999px")};
          background-color: ${bounties.networkBackgroundColor};
          padding: ${rem("7px")} ${rem("8px")};
          color: ${colors.white};

          img {
            margin-right: ${rem("6px")};
            width: auto;
            height: ${rem("14px")};
          }
        }

        &.status {
          --statusBg: ${bounties.statusDefaultBackgroundColor};
          --status: ${bounties.statusDefaultColor};

          position: relative;
          background-color: var(--statusBg);
          border-radius: 999px;
          padding: ${rem("7px")} ${rem("14px")} ${rem("7px")} ${rem("28px")};

          &:before {
            content: "";
            position: absolute;
            left: ${rem("12px")};
            border-radius: 999px;
            background-color: var(--status);
            width: ${rem("6px")};
            height: ${rem("6px")};
          }

          span {
            color: var(--status);
            text-transform: uppercase;
          }

          ${(props) =>
            props.status === "open" &&
            css`
              --statusBg: ${bounties.statusOpenBackgroundColor};
              --status: ${bounties.statusOpenColor};
            `}

          ${(props) =>
            props.status === "funding" &&
            css`
              --statusBg: ${bounties.statusFundingBackgroundColor};
              --status: ${bounties.statusFundingColor};
            `}

        ${(props) =>
            props.status === "proposal" &&
            css`
              --statusBg: ${bounties.statusProposalBackgroundColor};
              --status: ${bounties.statusProposalColor};
            `}
        }

        &.description {
          flex: 1;
          margin-right: ${rem("30px")};
          padding: ${rem("7px")} 0;

          span {
            font-size: ${rem("14px")};
            font-weight: ${typography.fontWeigthSemiBold};
            color: ${colors.white};
            text-transform: none;
          }
        }

        &.prize {
          border-radius: ${bounties.prizeBorderRadius};
          background-color: ${bounties.networkBackgroundColor};
          padding: ${rem("9px")} ${rem("12px")};

          span {
            &.value {
              margin-right: ${rem("8px")};
              color: ${colors.white};
            }

            &.currency {
              color: ${colors.grey600};
              text-transform: uppercase;
            }
          }
        }
      }
    }
  }

  @media ${device.m} {
    a {
      padding: calc(${bounties.cardPadding} * 2);

      > div {
        > div {
          span {
            font-size: ${rem("14px")};
          }

          &.description {
            span {
              font-size: ${rem("20px")};
            }
          }

          &.prize {
            span {
              font-size: ${rem("16px")};
            }
          }
        }
      }
    }
  }
`;
