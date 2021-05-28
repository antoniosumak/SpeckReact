import React from "react";
import { Main as MainWrapper } from "../../lib/style/generalStyles";

const Main = (props) => {
  return <MainWrapper>{props.children}</MainWrapper>;
};

export default Main;
