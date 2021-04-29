import React from "react";

import { Section as SectionWrapper, SectionTitle } from "./SectionStyles";

const Section = ({ children, title, withoutTopPadding }) => {
  return (
    <SectionWrapper>
      {title && <SectionTitle>{title}</SectionTitle>}
      {children}
    </SectionWrapper>
  );
};

export default Section;
