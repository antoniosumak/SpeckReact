import React from "react";
import { ModalOverlay, ModalWrapper, IconWrapp } from "./ModalStyles";
import { FlexRow } from "../../lib/style/generalStyles";
import { FiX } from "react-icons/fi";
const Modal = ({ children, title, hidePopup }) => {
  return (
    <>
      <ModalOverlay>
        <ModalWrapper>
          <FlexRow>
            {" "}
            {title && <h1>{title}</h1>}
            <IconWrapp>
              <FiX onClick={hidePopup} />
            </IconWrapp>
          </FlexRow>
          {children}
        </ModalWrapper>
      </ModalOverlay>
    </>
  );
};

export default Modal;
