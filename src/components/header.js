import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "./image";
import {RiMenu5Line} from "react-icons/ri"

import "../css/header.scss";

const PageSections = [
  {
    name: "Umiejętnośći",
    link: ""
  },
  {
    name: "Projekty",
    link: ""
  },
  {
    name: "O mnie",
    link: ""
  },
  {
    name: "Kontakt",
    link: ""
  }
]

const Header = ({ siteTitle }) => (
  <header className="header">
    <div className = "leftSide">
      <Link to="/">
          <Image imageName="websiteLogo" className="logoImage" imageStyle={{ objectFit: "contain" }} />
      </Link>
    </div>
    <div className = "rightSide">
      <nav className="navbarTop">
        <ul>
          {
            PageSections.map(item => (
              <li key={item.name}><Link className="link" to={item.link}>{item.name}</Link></li>
            ))
          }
        </ul>
      </nav>
      <div className = "mobileIconWrapper">
          <RiMenu5Line 
            size = {24}
            className = "mobileMenuIcon"
          
          />
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
