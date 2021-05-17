import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
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

const Header = () => {
  function HamburgerClick(e) {
    e.preventDefault();
    console.log("Habmurger je kliknut!");
  }
  const { isLoggedIn, isAdmin } = useContext(AuthContext);

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
          {!isLoggedIn ? (
            <NavItem to="/register" exact activeStyle={{ color: colors.red }}>
              {links.register}
            </NavItem>
          ) : null}
          {!isLoggedIn ? (
            <NavItem to="/login" exact activeStyle={{ color: colors.red }}>
              {links.login}
            </NavItem>
          ) : null}
          {isAdmin && (
            <NavItem to="/admin" exact activeStyle={{ color: colors.red }}>
              {links.admin}
            </NavItem>
          )}
          {isLoggedIn ? (
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
