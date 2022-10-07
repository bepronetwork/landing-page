import styled from "styled-components";
import { rem } from "polished";
import { layout, device, card, typography, global } from "@/styles/variables";

export const Wrapper = styled.div`
  width: 100%;
  text-align: left;

  a {
    display: flex;
    flex-direction: column;
    height: 100%;
    color: ${card.color};
    text-decoration: none;
  }
`;

export const CoverWrapper = styled.div`
  position: relative;
  border: ${rem("1px")} solid ${card.borderColor};
  border-radius: ${card.borderRadius};
  background-color: ${card.coverBackgroundColor};
  width: 100%;
  overflow: hidden;
  padding-top: 56.25%;
`;

export const Cover = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Container = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const Content = styled.div`
  flex: 1;

  ul {
    margin: ${rem("7px")} ${rem("-5px")} ${rem("19px")} ${rem("-5px")};
    padding: 0;
    display: flex;
    flex-wrap: wrap;

    li {
      list-style: none;
      margin: calc(${rem("5px")} / 2) ${rem("5px")};

      .tag {
        max-width: calc(100vw - calc(${layout.sidePadding} * 2));
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;

        @media ${device.s} {
          max-width: calc((100vw - var(--sidePadding) * 3) / 2);
        }

        @media ${device.l} {
          max-width: calc(
            (100vw - ${layout.sectionTopBottomPadding} * 3) / 4 -
              var(--sidePadding) * 2
          );
        }

        @media (min-width: ${layout.contentMaxWidth}) {
          max-width: calc(
            (${layout.contentMaxWidth} - ${layout.sectionTopBottomPadding} * 2) /
              4 - var(--sidePadding) * 2
          );
        }
      }
    }
  }

  h3 {
    margin-bottom: ${rem("10px")};
    color: ${card.color};

    & + div {
      position: relative;

      &:after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: ${rem("30px")};
        background-image: linear-gradient(
          to bottom,
          transparent,
          ${global.backgroundColor} 90%
        );
      }

      span {
        font-size: ${rem("16px")};
        color: ${card.descriptionColor};
      }
    }
  }

  @media ${device.m} {
    h3 {
      font-size: ${rem("24px")};
    }
  }
`;

export const Footer = styled.div`
  margin-top: ${rem("20px")};
  width: 100%;
`;

export const Author = styled.div`
  display: flex;
  align-items: center;

  .avatar-img {
    margin-right: ${rem("10px")};
    width: ${rem("32px")};
    height: ${rem("32px")};
    border: ${rem("2px")} solid ${card.avatarBorderColor};
    padding: ${rem("2px")};

    img {
      border-radius: 50%;
    }
  }

  span {
    display: block;
    line-height: 1.1;
    font-weight: ${typography.fontWeigthMedium};

    &:first-child {
      font-size: ${rem("14px")};
      color: ${card.authorColor};
    }

    &:last-child {
      font-size: ${rem("12px")};
      color: ${card.dateColor};
    }
  }
`;
