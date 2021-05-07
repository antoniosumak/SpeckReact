import styled from "styled-components";
import { colors, boxShadow, breakpoints } from "../../lib/style/theme";

export const TableWrapper = styled.table`
  border: none;
  margin-top: 30px;
  width: 100%;
  box-shadow: ${boxShadow};
`;

export const TableHeader = styled.thead`
  background-color: ${colors.red};
  color: ${colors.white};
  text-align: left;
  border: none;
`;

export const TableContent = styled.tbody`
  color: ${colors.black};

  :nth-child(odd) {
    background-color: ${colors.lightGrey};
  }
`;

export const Tr = styled.tr``;

export const Th = styled.th`
  padding: 10px;
  :nth-child(3) {
    display: none;
  }
  :nth-child(4) {
    display: none;
  }
  :nth-child(5) {
    display: none;
  }
  :nth-child(6) {
    display: none;
  }
  :nth-child(7) {
    display: none;
  }

  @media screen and (${breakpoints.mobileLarge}) {
    :nth-child(3) {
      display: table-cell;
    }
    :nth-child(7) {
      display: table-cell;
    }
  }

  @media screen and (${breakpoints.tablet}) {
    :nth-child(4) {
      display: table-cell;
    }
    :nth-child(5) {
      display: table-cell;
    }
    :nth-child(6) {
      display: table-cell;
    }
  }
`;

export const Td = styled.td`
  border: none;
  padding: 10px;
  :last-of-type {
    text-align: center;
  }

  :nth-child(3) {
    display: none;
  }
  :nth-child(4) {
    display: none;
  }
  :nth-child(5) {
    display: none;
  }
  :nth-child(6) {
    display: none;
  }
  :nth-child(7) {
    display: none;
  }

  @media screen and (${breakpoints.mobileLarge}) {
    :nth-child(3) {
      display: table-cell;
    }
    :nth-child(7) {
      display: table-cell;
    }
  }
  @media screen and (${breakpoints.tablet}) {
    :nth-child(4) {
      display: table-cell;
    }
    :nth-child(5) {
      display: table-cell;
    }
    :nth-child(6) {
      display: table-cell;
    }
  }
`;

export const EmptyTable = styled.div`
  margin-top: 25px;
  text-align: center;
`;

export const EmptyTableText = styled.h3`
  font-weight: 400;
`;
