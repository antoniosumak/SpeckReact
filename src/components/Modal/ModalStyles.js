import styled from "styled-components";
import { colors, boxShadow } from "../../lib/style/theme";

export const ModalOverlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  bottom: 0px;
  top: 0px;
  background-color: ${colors.blackOverlay};
  z-index: 5;
`;

export const ModalWrapper = styled.div`
  margin-top: 50px;
  padding: 20px;
  border-radius: 6px;
  background-color: ${colors.white};
  box-shadow: ${boxShadow};
  width: fit-content;
`;
