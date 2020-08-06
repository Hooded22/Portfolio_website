import React, { useContext } from 'react';
import TechIcon, { icons } from "../components/TechIcons";
import { MyContext } from "../components/contexts"



const SkillsSection = () => {
    const language = useContext(MyContext).language[0];
    const title = language == "PL" ? "Umiejętności" : "Skills";
    const headerContent = language == "PL" ? "Znane technologie, języki i narzędzia" : "Technologies, languages, and tools which I know."
    return (
        <div className="skills" id="Skills">
            <div className="header">
                <h3>{title}</h3>
                <p>{headerContent}</p>
            </div>
            <div className="content">
                <div className="column">
                    <ul>
                        {icons.slice(0, 7).map(({ src, name }, index) => {
                            return (
                                <li key={index}>
                                    <TechIcon
                                        src={src}
                                        name={name}
                                    />
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className="column">
                    <ul>
                        {icons.slice(7).map(({ src, name }, index) => {
                            return (
                                <li key={index}>
                                    <TechIcon
                                        src={src}
                                        name={name}
                                    />
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SkillsSection;