import styled from "styled-components";
import {
  colors,
  breakpoints,
  transitionEase,
  boxShadow,
} from "../../lib/style/theme";

export const Event = styled.div`
  transition: ${transitionEase};
  border-radius: 6px;
  padding: 10px;
  height: min-content;
  @media screen and (${breakpoints.desktopLarge}) {
    width: 400px;
  }
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
