import styled from "styled-components";
import { breakpoints, colors } from "../../lib/style/theme";

export const SearchBar = styled.input`
  padding: 0px 15px;
  margin-bottom: 40px;
  text-indent: 10px;

  @media screen and (${breakpoints.mobileLarge}) {
    width: 400px;
    padding: 0px;
  }

  @media screen and (${breakpoints.desktop}) {
    border: 1px solid ${colors.lightGrey};
    border-radius: 6px;
    line-height: 40px;
    outline: none;
    font-size: 14px;

    &:focus {
      border: 1px solid ${colors.yellow};
    }
  }

  @media screen and (${breakpoints.desktopLarge}) {
    font-size: 16px;
  }
`;
