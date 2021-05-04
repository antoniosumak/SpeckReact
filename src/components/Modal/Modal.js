import React from "react";
import { Section } from "../Section/SectionStyles";

const Modal = ({ children, title }) => {
  return (
    <>
      <Section>
        {title && <h1>{title}</h1>}
        {children}
      </Section>
    </>
  );
};

export default Modal;
