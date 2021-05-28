import styled, { css } from "styled-components";
import { colors, breakpoints, transitionEase } from "../../lib/style/theme";
import { Link, NavLink } from "react-router-dom";

export const Grid = styled.div`
  display: grid;
  row-gap: 32px;

  @media screen and (${breakpoints.mobileLarge}) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 32px;
  }
  @media screen and (${breakpoints.desktop}) {
    grid-template-columns: repeat(3, 1fr);
    ${(props) => props.columns === 3 && "padding: 0 32px; "}
  }
  @media screen and (${breakpoints.desktopLarge}) {
    ${(props) => props.columns === 3 && "padding: 0 86px; "}

    ${(props) =>
      props.columns === 4 && `grid-template-columns: repeat(4, 1fr); `}
  }
`;

export const Main = styled.main``;

export const FlexRow = styled.div`
  position: relative;
  @media screen and (${breakpoints.tablet}) {
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
  }

  @media screen and (${breakpoints.desktop}) {
    display: flex;
    justify-content: center;
    margin-bottom: 16px;
  }

  @media screen and (${breakpoints.desktopLarge}) {
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
  }
`;

export const ButtonStyle = styled.button`
  display: block;
  text-decoration: none;
  width: 100%;
  line-height: 40px;
  text-align: center;
  border: 1px solid ${colors.red};
  border-radius: 6px;
  background: ${colors.red};
  color: ${colors.white};
  transition: ${transitionEase};
  font-size: 16px;
  font-family: "Montserrat", sans-serif;

  &:hover {
    cursor: pointer;
    border-color: ${colors.yellow};
    background: ${colors.yellow};
  }

  &:focus {
    outline: none;
  }
`;

export const Center = styled.div`
  display: grid;
  place-items: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;

  @media screen and (${breakpoints.tablet}) {
    width: 400px;
  }
`;

export const FormRow = styled.div`
  ${(props) => props.marginBottom === true && "margin-bottom: 32px;"}
  &::last-child {
    margin-bottom: 0px;
  }
`;

export const CheckBoxWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const InputLabel = styled.label`
  display: block;
  font-size: 14px;
  font-weight: 600px;
  margin-bottom: 4px;

  ${(props) => props.isCheckBox && `margin-bottom: 0px;`}

  @media screen and (${breakpoints.desktop}) {
    font-size: 16px;
  }
`;

export const InputText = styled.input`
  border: 1px solid ${colors.lightGrey};
  border-radius: 6px;
  width: 100%;
  line-height: 40px;
  padding: 0 10px;
  outline: none;
  font-size: 14px;
  font-family: "Montserrat", sans-serif;

  &:focus {
    border-color: ${colors.yellow};
  }

  @media screen and (${breakpoints.desktop}) {
    font-size: 16px;
  }
`;

export const TextArea = styled.textarea`
  border: 1px solid ${colors.lightGrey};
  border-radius: 6px;
  width: 100%;
  line-height: 150%;
  padding: 10px;
  outline: none;
  font-size: 14px;
  font-family: "Montserrat", sans-serif;
  min-width: 100%;

  &:focus {
    border-color: ${colors.yellow};
  }

  @media screen and (${breakpoints.desktop}) {
    font-size: 16px;
  }
`;

export const InputCheckbox = styled.input`
  margin-right: 12px;
  width: 18px;
  height: 18px;
`;

export const InputError = styled.p`
  font-size: 14px;
  color: ${colors.red};
  padding-top: 8px;
`;

export const Select = styled.select`
  border: 1px solid ${colors.lightGrey};
  border-radius: 6px;
  width: 100%;
  height: 40px;
  padding: 0 10px;
  outline: none;
  font-size: 14px;
  font-family: "Montserrat", sans-serif;
  appearance: none;

  &:focus {
    border-color: ${colors.yellow};
  }

  @media screen and (${breakpoints.desktop}) {
    font-size: 16px;
  }
`;

export const Option = styled.option`
  color: ${colors.red};
`;

export const FormTwoColums = styled.div`
  @media screen and (${breakpoints.mobileLarge}) {
    display: grid;
    grid-gap: 12px;
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const ButtonTable = styled.button`
  display: block;
  text-decoration: none;
  width: 150px;
  line-height: 40px;
  text-align: center;
  border: 1px solid ${colors.black};
  border-radius: 6px;
  background: ${colors.white};
  color: ${colors.black};
  transition: ${transitionEase};
  font-size: 16px;
  font-family: "Montserrat", sans-serif;

  &:hover {
    cursor: pointer;
    border-color: ${colors.red};
    color: ${colors.red};
  }
`;

export const IconWrapp = styled.div`
  font-size: 24px;
  cursor: pointer;
  transition: ${transitionEase};

  &:hover {
    color: ${colors.red};
  }
`;

export const SuccessMessage = styled.p`
  margin: 0 auto;
  padding: 15px;
  margin-bottom: 32px;
  border-radius: 6px;
  background: ${colors.successBackground};
  color: ${colors.success};
  ${(props) =>
    props.isError &&
    `
        background: ${colors.errorBackground};
        color: ${colors.error};
    `};
  @media screen and (${breakpoints.mobileLarge}) {
    max-width: 400px;
  }
`;
