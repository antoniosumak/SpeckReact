import React from "react";
import { Figure as FigureWrapper, Image } from "./FigureStyle";

const Figure = ({ image }) => {
  return (
    <FigureWrapper>
      <Image src={image} alt="UX/UI design workshop" />
    </FigureWrapper>
  );
};

export default Figure;
