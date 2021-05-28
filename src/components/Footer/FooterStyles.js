import styled from "styled-components";
import {
colors, 
breakpoints, 
transitionEase
} from "../../lib/style/theme";



export const Footer = styled.footer `

background-color: ${colors.darkGrey};
padding: 20px;

@media screen and (${breakpoints.tablet})
{
    padding: 30px;
}
`;

export const Text = styled.p `

color: ${colors.lightGrey};
font-size: 12px;
text-align: center;

@media screen and (${breakpoints.tablet})
{
    font-size: 14px;
}

`;


