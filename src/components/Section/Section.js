import React from "react";

import { Section as SectionWrapper, SectionTitle } from "./SectionStyles";

const Section = ({ children, title, withoutTopPadding, gridSize }) => {
  return (
    <SectionWrapper gridSize={gridSize}>
      {title && <SectionTitle>{title}</SectionTitle>}
      {children}
    </SectionWrapper>
  );
};

export default Section;
