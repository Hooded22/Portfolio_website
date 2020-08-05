import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, {useState} from "react"
import Image from "./image";
import {RiMenu5Line, RiCloseCircleLine} from "react-icons/ri"
import scrollTo from 'gatsby-plugin-smoothscroll';

import "../css/header.scss";

const PageSections = [
  {
    name: "Umiejętnośći",
    link: "Skills"
  },
  {
    name: "Projekty",
    link: "Projects"
  },
  {
    name: "O mnie",
    link: "AboutMe"
  },
  {
    name: "Kontakt",
    link: "Contact"
  }
]

const Header = ({ siteTitle }) => {

  const [mobileMenuDisplay, setMobileMenuDisplay] = useState("none");
  const [mobileMenuContentClass, setMobileMenuContentClass] = useState("");

  const openMenu = () => {
    setMobileMenuDisplay("flex");
    setTimeout(() => {
      setMobileMenuContentClass("show");
    },100)
    
  }

  const closeMenu = () => {
    setMobileMenuContentClass("");
    setTimeout(() => {
      setMobileMenuDisplay("none");
    },340)
  }

  const goToSection = (event, link) => {
    
    if(checkMobileMode())
    {
      closeMenu();
    }

    event.preventDefault();
    scrollTo(`#${link}`);
  }

  const checkMobileMode = () => window.innerWidth <= 755;



  return(
  <header className="header" id = "Header">
    <div className = "leftSide">
      <Link to="/" title = "Strona główna">
          <Image imageName="websiteLogo" className="logoImage" imageStyle={{ objectFit: "contain" }} />
      </Link>
    </div>
    <div className = "rightSide">
      <nav className="navbarTop">
        <ul>
          {
            PageSections.map(item => (
              <li key={item.name}><Link className="link" to={`#${item.link}`} onClick = {(event) => goToSection(event, item.link)}>{item.name}</Link></li>
            ))
          }
        </ul>
      </nav>
      <div className = "mobileIconWrapper">
          <RiMenu5Line 
            size = {24}
            className = "mobileMenuIcon"
            title = "Open menu"
            onClick = {() => openMenu()}
          
          />
      </div>
    </div>
    <div className = "mobileMenuOverlay" style = {{display: mobileMenuDisplay}}>
      <div className = {`mobileMenuWrapper ${mobileMenuContentClass}`}>
            <div className = "header">
              <RiCloseCircleLine 
                size = {34} 
                color = "#FAFAFA"
                title = "Close menu"
                onClick = {() => closeMenu()}
              />
            </div>
            <div className = "content">
              <ul>
                {PageSections.map(item => {
                  return(
                    <li key = {item.name}>
                      <Link to = {`#${item.link}`} className="mobileMenuItem" onClick = {(event) => goToSection(event, item.link)}>
                        {item.name}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
      </div>
    </div>
  </header>
  )}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
