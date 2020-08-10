import React from "react"
import PageSections from "data/pageSectionData";
import LanguageSelector from "./languageSelector";
import { RiMenu5Line, RiCloseCircleLine } from "react-icons/ri"
import { Link } from "gatsby"

const DesktopMenu = ({ language, goToSection, openMenu }) => {
  return (
    <>
      <nav className="navbarTop">
        <ul>
          {
            PageSections.map(item => (
              <li key={item.name}>
                <Link className="link" to={`#${item.link}`} onClick={(event) => goToSection(event, item.link)}>
                  {language == "PL" ? item.name : item.link}
                </Link>
              </li>
            ))
          }
          <li>
            <LanguageSelector />
          </li>
        </ul>
      </nav>
      <div className="mobileIconWrapper">
        <RiMenu5Line
          size={24}
          className="mobileMenuIcon"
          title="Open menu"
          onClick={() => openMenu()}
        />
      </div>
    </>
  );
}

const MobileMenu = ({ mobileMenuDisplay, mobileMenuContentClass, closeMenu, goToSection, language }) => {
  return (
    <div className="mobileMenuOverlay" style={{ display: mobileMenuDisplay }}>
      <div className={`mobileMenuWrapper ${mobileMenuContentClass}`}>
        <div className="header">
          <RiCloseCircleLine
            size={34}
            color="#FAFAFA"
            title="Close menu"
            onClick={() => closeMenu()}
          />
        </div>
        <div className="content">
          <ul>
            {PageSections.map(item => {
              return (
                <li key={item.name}>
                  <Link to={`#${item.link}`} className="mobileMenuItem" onClick={(event) => goToSection(event, item.link)}>
                    {language == "PL" ? item.name : item.link}
                  </Link>
                </li>
              )
            })}
            <li>
              <LanguageSelector />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export { DesktopMenu, MobileMenu }