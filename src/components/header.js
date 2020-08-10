import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useContext } from "react"
import Image from "./image";
import scrollTo from 'gatsby-plugin-smoothscroll';
import { MyContext } from "./contexts"

import "css/header.scss";
import {DesktopMenu, MobileMenu} from "../components/navigations";


const Header = ({ siteTitle }) => {

  const [mobileMenuDisplay, setMobileMenuDisplay] = useState("none");
  const [mobileMenuContentClass, setMobileMenuContentClass] = useState("");

  const openMenu = () => {
    setMobileMenuDisplay("flex");
    setTimeout(() => {
      setMobileMenuContentClass("show");
    }, 100)

  }

  const closeMenu = () => {
    setMobileMenuContentClass("");
    setTimeout(() => {
      setMobileMenuDisplay("none");
    }, 340)
  }

  const goToSection = (event, link) => {
    if (checkMobileMode())
      closeMenu();
    event.preventDefault();
    scrollTo(`#${link}`);
  }

  const checkMobileMode = () => window.innerWidth <= 755;
  const language = useContext(MyContext).language[0];



  return (
    <header className="header" id="Header">
      <div className="leftSide">
        <Link to="/" title="Strona główna">
          <Image imageName="websiteLogo" className="logoImage" imageStyle={{ objectFit: "contain" }} />
        </Link>
      </div>
      <div className="rightSide">
        <DesktopMenu
          language={language}
          goToSection={goToSection}
          openMenu={openMenu}
        />
      </div>
      <MobileMenu
        language={language}
        goToSection={goToSection}
        openMenu={openMenu}
        closeMenu={closeMenu}
        mobileMenuDisplay={mobileMenuDisplay}
        mobileMenuContentClass={mobileMenuContentClass}
      />
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
