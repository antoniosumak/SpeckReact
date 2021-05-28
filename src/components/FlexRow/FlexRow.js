import React from "react";
import { FlexRow as FlexRowWrapper } from "../../lib/style/generalStyles";

const FlexRow = (props) => {
  return <FlexRowWrapper>{props.children}</FlexRowWrapper>;
};

export default FlexRow;
