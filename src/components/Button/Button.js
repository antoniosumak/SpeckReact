import React from "react";
import { ButtonStyle } from "../../lib/style/generalStyles";
const Button = ({ text, onPress }) => {
  return (
    <ButtonStyle type="submit" onClick={onPress}>
      {text}
    </ButtonStyle>
  );
};
export default Button;
