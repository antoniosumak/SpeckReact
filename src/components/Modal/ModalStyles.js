import styled from "styled-components";
import { colors, boxShadow, transitionEase } from "../../lib/style/theme";

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
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  padding: 20px;
  border-radius: 6px;
  background-color: ${colors.white};
  box-shadow: ${boxShadow};
`;

export const IconWrapp = styled.div`
  font-size: 24px;
  cursor: pointer;
  transition: ${transitionEase};

  &:hover {
    color: ${colors.red};
  }
`;
