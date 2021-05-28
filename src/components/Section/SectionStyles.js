import styled from "styled-components";
import { colors, breakpoints, transitionEase } from "../../lib/style/theme";

export const Section = styled.section`
  ${(props) => props.withoutTopPadding && "padding-top: none !important;"}

  padding: 60px 15px;

  @media screen and (${breakpoints.tablet}) {
    padding: 80px 25px;
    margin: 0 auto;
  }

  @media screen and (${breakpoints.desktop}) {
    padding: 80px 0;
    max-width: 960px;
    margin: 0 auto;
    ${(props) => props.gridSize === true && "max-width: 1280px !important;"}
  }

  @media screen and (${breakpoints.desktopLarge}) {
    padding: 100px 0;
    max-width: 1280px;
    margin: 0 auto;
    ${(props) => props.gridSize === true && "max-width: 1700px !important;"}
  }
`;

export const SectionTitle = styled.h2`
  text-align: center;
  font-size: 20px;
  margin-bottom: 32px;

  @media screen and (${breakpoints.mobileLarge}) {
    font-size: 24px;
  }

  @media screen and (${breakpoints.tablet}) {
    margin-bottom: 48px;
  }

  @media screen and (${breakpoints.desktop}) {
    font-size: 28px;
  }

  @media screen and (${breakpoints.desktopLarge}) {
    font-size: 32px;
  }
`;
