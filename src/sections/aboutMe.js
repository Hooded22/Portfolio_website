import React, { useContext } from "react";
import profileImage from "../images/profileImage.svg";
import { MyContext } from "src/components/contexts";

const AboutMeSection = () => {
    const language = useContext(MyContext).language[0];
    const content = language === "PL"
        ? {
            paragraph_1: "Aktualnie student, w przyszłości frontend developer. Cześć, nazywam się Przemek. Od kilku lat starannie rozwijam się na obranej ścieżce kariery. Tworząc kolejne własne projekty szlifuje nowe umiejętności. Jestem perfekcjonistą, lubię rzeczy estetyczne i  dopracowane dlatego dbam o elegancję swojego kodu i piękno wizualnej strony aplikacji.",
            paragraph_2: "W wolnym czasie jestem miłośnikiem muzyki i słowa pisanego. Staram się rozwijać swoje pozostałe pasje takie jak zdrowy tryb życia,  pisanie, kalistenika. Uwielbiam piesze wycieczki, wiejskie oraz górskie krajobrazy i cieszące oko dopieszczone interfejsy aplikacji internetowych."
        }
        : {
            paragraph_1: "Currently student, in the future frontend developer. Hi, I am Przemek. For few years I have developed myself with diligence on chosen career path. I creates new projects polish my skills in this way. I am a perfectionst, like estetic things and refine in every detail. That`s why I care of beautifull of my code and visual aspects of apps.",
            paragraph_2: "In free time, I am a lovers of music and written word. I am still developing my other passions like healthy lifestyle, story writings and calisthenics. I love walks, mountain and village landscapes as also eye pleasing, caressed out interfaces of web apps."
        }
    const title = language === "PL" ? "Kilka słów o mnie" : "Few words about me";
    return (
        <div className="aboutMe" id="About">
            <h3>{title}</h3>
            <div className="container">
                <div className="contentWrapper">
                    <p>{content.paragraph_1}</p>
                    <p>{content.paragraph_2}</p>
                </div>
                <div className="imageWrapper">
                    <img src={profileImage} alt="Content is loading" />
                </div>
            </div>
        </div>
    );
}

export default AboutMeSection;