import React from "react";
import { ButtonStyle } from "../../lib/style/generalStyles";
const Button = ({ text, onPress }) => {
  return <ButtonStyle onClick={onPress}>{text}</ButtonStyle>;
};
export default Button;
