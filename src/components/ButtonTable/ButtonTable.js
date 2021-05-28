import React from "react";
import { ButtonTable as Button } from "../../lib/style/generalStyles";

const ButtonTable = ({ text, showPopUp }) => {
  return (
    <div>
      <Button onClick={showPopUp}>{text}</Button>
    </div>
  );
};

export default ButtonTable;
