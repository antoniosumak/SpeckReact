import React from "react";
import {Link} from "react-router-dom";
import "./Header.scss";
import Logo from "../../assets/images/logo.png";

const links = {
    home: "Home",
    events: "Events",
}

const Header = () => {
    return ( 
        <header className="Header">
        <div className="Header-Inner">
           <Link to ="/" className="Header-LogoContainer">
                <img src={Logo} className="Header-Logo" alt = "Logo fakulteta"/>
            </Link>
            <div className="Header-NavHamburger">
                <div className="Header-NavHamburgerLine"></div>
                <div className="Header-NavHamburgerLine"></div>
                <div className="Header-NavHamburgerLine"></div>
            </div>
            <nav className="Header-Nav">
                <Link className="Header-NavItem" to="/">{links.home}</Link>
                <Link className="Header-NavItem" to="/events">{links.events}</Link>
            </nav>
        </div>

    </header>
     );
}
 
export default Header;