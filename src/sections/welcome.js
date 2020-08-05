import React from "react"
import Image from '../components/image';
import {Link} from 'gatsby'
import scrollTo from 'gatsby-plugin-smoothscroll';


const WelcomeSection = () => {
    return(
        <div className = "welcomeSection" id = "welcomeSection">
            <div className = "left">
                <h1>Przemysław Sipta</h1>
                <h2>Frontend developer</h2>
                <div className = "buttonWrapper">
                    <a className = "button full" href = {`Przemyslaw_Sipta_CV.pdf`} target = "blank">Pobierz CV</a>
                    <button className = "button bordered" onClick = {() => scrollTo("#Projects")}>Zobacz projekty</button>
                </div>
            </div>
            <div className = "rigth">
                <Image imageStyle = {{objectFit: "contain"}} imageName = "mobileDesktopImage" className = "image"/>
            </div>
        </div>
    )
}

export default WelcomeSection