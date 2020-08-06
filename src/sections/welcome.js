import React, { useContext } from "react"
import Image from '../components/image';
import scrollTo from 'gatsby-plugin-smoothscroll';
import { MyContext } from "../components/contexts";


const WelcomeSection = () => {
    const language = useContext(MyContext).language[0];
    const button_CV_content = language == "PL" ? "Pobierz CV" : "CV download";
    const button_projects_content = language == "PL" ? "Zobacz projekty" : "Projects";

    return (
        <div className="welcomeSection" id="welcomeSection">
            <div className="left">
                <h1>Przemysław Sipta</h1>
                <h2>Frontend developer</h2>
                <div className="buttonWrapper">
                    <a
                        className="button full"
                        href={`Przemyslaw_Sipta_CV.pdf`}
                        target="blank"
                        title={button_CV_content}
                    >
                        {button_CV_content}
                    </a>
                    <button title={button_projects_content} className="button bordered" onClick={() => scrollTo("#Projects")}>{button_projects_content}</button>
                </div>
            </div>
            <div className="rigth">
                <Image imageStyle={{ objectFit: "contain" }} imageName="mobileDesktopImage" className="image" />
            </div>
        </div>
    )
}

export default WelcomeSection