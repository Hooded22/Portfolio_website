import React from 'react';
import SocialIcons from "./socialIcons";

import "css/footer.scss";


const Footer = () => {
    return(
      <footer>
        <h4>Przemysław Sipta © {new Date().getFullYear()}</h4>
        <SocialIcons width = "40%" size = {24} color = "#FAFAFA"/>
      </footer>
    );
  }

export default Footer;