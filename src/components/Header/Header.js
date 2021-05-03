import React from "react";
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
  login: "Login",
  register: "Register",
  admin: "Admin",
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
          <NavItem to="/" exact activeStyle={{ color: "#d33e3e" }}>
            {links.home}
          </NavItem>
          <NavItem to="/events" exact activeStyle={{ color: "#d33e3e" }}>
            {links.events}
          </NavItem>
          <NavItem to="/register" exact activeStyle={{ color: "#d33e3e" }}>
            {links.register}
          </NavItem>
          <NavItem to="/login" exact activeStyle={{ color: "#d33e3e" }}>
            {links.login}
          </NavItem>
          <NavItem to="/admin" exact activeStyle={{ color: "#d33e3e" }}>
            {links.admin}
          </NavItem>
        </Nav>
      </Inner>
    </HeaderWrapper>
  );
};

export default Header;
