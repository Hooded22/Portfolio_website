import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

import "css/socialIcons.scss";


const SocialIcons = (props) => {
    const icons = [
        {
            name: "GitHub",
            link: "https://github.com/Hooded22",
            icon: <AiFillGithub name="GitHub" title="GitHub" size={props.size || 36} color={props.color || "black"} />
        },
        {
            name: "LinkedIn",
            link: "https://www.linkedin.com/in/przemyslaw-sipta/",
            icon: <AiFillLinkedin name="Linkedin" title="Linkedin" size={props.size || 36} color={props.color || "black"} />
        },
        {
            name: "Instagram",
            link: "https://www.instagram.com/hooded_alberchi/",
            icon: <AiFillInstagram name="Instagram" title="Instagram" size={props.size || 36} color={props.color || "black"} />
        }
    ]

    const data = props.data || icons;

    return (
        <div style={{ width: props.width || "100%" }} className="socialIconsContainer">
            <ul>
                {data.map(({ name, link, icon }) => {
                    return (
                        <li key={name}>

                            <Icon
                                name={name}
                                link={link}
                                icon={icon}
                            />
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

const Icon = (props) => {
    return (
        <a href = {props.link} to={props.link} title={props.name} target = "blank">
            {props.icon}
        </a>
    )
}

export default SocialIcons;