import React from "react";
import { ModalOverlay, ModalWrapper } from "./ModalStyles";
import { FlexRow, Center, IconWrapp } from "../../lib/style/generalStyles";
import { FiX } from "react-icons/fi";
const Modal = ({ children, title, hidePopup }) => {
  return (
    <>
      <ModalOverlay>
        <Center>
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
        </Center>
      </ModalOverlay>
    </>
  );
};

export default Modal;
