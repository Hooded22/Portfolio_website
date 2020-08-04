import React from 'react';
import TechIcon, { icons } from "../components/TechIcons";



const SkillsSection = () => {
    return (
        <div className="skills" id = "Skills">
            <div className="header">
                <h3>Umiejętności</h3>
                <p>Znane technologie, języki i narzędzia</p>
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