import styled from "styled-components";
import {
colors, 
breakpoints, 
transitionEase
} from "../../lib/style/theme";

export const EventDescription = styled.p `

font-size: 14px;

@media screen and (${breakpoints.tablet}) {
      font-size: 14px;
      width: 400px;
    }

@media screen and (${breakpoints.desktop}) {
      font-size: 16px;
      width: 600px;
    }

@media screen and (${breakpoints.desktopLarge}) {
      font-size: 16px;
      width: 800px;
    }    
`;

