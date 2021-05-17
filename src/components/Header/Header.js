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
import { colors } from "../../lib/style/theme";

const links = {
  home: "Home",
  events: "Events",
  login: "Login",
  register: "Register",
  admin: "Admin",
  logout: "Logout",
};

const Header = ({ userLoggedIn, userIsAdmin }) => {
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
          <NavItem to="/" exact activeStyle={{ color: colors.red }}>
            {links.home}
          </NavItem>
          <NavItem to="/events" exact activeStyle={{ color: colors.red }}>
            {links.events}
          </NavItem>
          {userLoggedIn == "false" ? (
            <NavItem to="/register" exact activeStyle={{ color: colors.red }}>
              {links.register}
            </NavItem>
          ) : null}
          {userLoggedIn == "false" ? (
            <NavItem to="/login" exact activeStyle={{ color: colors.red }}>
              {links.login}
            </NavItem>
          ) : null}
          {userIsAdmin === "true" && (
            <NavItem to="/admin" exact activeStyle={{ color: colors.red }}>
              {links.admin}
            </NavItem>
          )}
          {userLoggedIn == "true" ? (
            <NavItem onClick={() => localStorage.clear()} to="/">
              Logout
            </NavItem>
          ) : null}
        </Nav>
      </Inner>
    </HeaderWrapper>
  );
};

export default Header;
