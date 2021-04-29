import React from "react";
import { Link } from "react-router-dom";
import LogoImg from "../../assets/images/logo.png";
import {
  HeaderWrapper,
  Inner,
  LogoContainer,
  Logo,
  Nav,
  NavItem,
  Hamburger,
  NavHamburgerLine,
} from "./HeaderStyle";

const links = {
  home: "Home",
  events: "Events",
};

const Header = () => {
  function HamburgerClick(e) {
    e.preventDefault();
    console.log("Habmurger je kliknut!");
  }

  return (
    <HeaderWrapper>
      <Inner>
        <LogoContainer to="/">
          <Logo src={LogoImg} alt="Logo fakulteta" />
        </LogoContainer>
        <Hamburger onClick={HamburgerClick}>
          <NavHamburgerLine></NavHamburgerLine>
          <NavHamburgerLine></NavHamburgerLine>
          <NavHamburgerLine></NavHamburgerLine>
        </Hamburger>
        <Nav>
          <NavItem to="/">{links.home}</NavItem>
          <NavItem to="/events">{links.events}</NavItem>
        </Nav>
      </Inner>
    </HeaderWrapper>
  );
};

export default Header;
