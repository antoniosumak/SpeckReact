import styled from "styled-components";
import {
  colors,
  breakpoints,
  transitionEase,
  boxShadow,
} from "../../lib/style/theme";

export const Event = styled.div`
  ${(props) => props.withoutShadow && "box-shadow: none !important;"}
  ${(props) => props.withoutBorder && "border: none !important;"}

  border: 1px solid ${colors.lightGrey};
  box-shadow: ${boxShadow};
  transition: ${transitionEase};
  border-radius: 6px;
  padding: 10px;
  height: min-content;
  @media screen and (${breakpoints.desktopLarge}) {
    width: 400px;
  }
`;

export const Title = styled.h2`
  ${(props) => props.withoutTitle && "display:none;"}

  font-size: 18px;
  padding: 10px 0px 20px;
  border-bottom: 1px solid ${colors.lightGrey};
  text-align: center;
  margin-bottom: 15px;
`;

export const Content = styled.div`
  margin-bottom: 15px;
`;

export const Item = styled.div`
  &:last-child {
    text-align: right;
  }
`;

export const ItemTitle = styled.h3`
  ${(props) => props.px16 && "font-size: 16px"}
  font-size: 12px;
  margin-bottom: 4px;
`;

export const ItemValue = styled.p`
  font-size: 12px;
  ${(props) => props.px16 && "font-size:16px, margin-bottom:4px"}
`;
