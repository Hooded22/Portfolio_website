import React from 'react';
import {AiFillGithub, AiFillFacebook, AiFillInstagram} from "react-icons/ai";
import {Link} from 'gatsby';

import "../css/socialIcons.scss";


const SocialIcons = (props) => {
    const icons = [
        {
            name: "GitHub",
            link: "",
            icon: <AiFillGithub name = "GitHub" title = "GitHub" size = {props.size || 36} color = {props.color || "black"}/>
        },
        {
            name: "GitHub",
            link: "",
            icon: <AiFillFacebook name = "GitHub" title = "GitHub" size = {props.size || 36} color = {props.color || "black"}/>
        },
        {
            name: "GitHub",
            link: "",
            icon: <AiFillInstagram name = "GitHub" title = "GitHub" size = {props.size || 36} color = {props.color || "black"}/>
        }
    ]

    const data = props.data || icons;

    return(
        <div style = {{width: props.width || "100%"}} className = "socialIconsContainer">
            <ul>
                { data.map(({name, link, icon}) => {
                    return(
                        <Icon
                        name = {name}
                        link = {link}
                        icon = {icon}
                    />
                    )
                })}
            </ul>
        </div>
    )
}

const Icon = (props) => {
    return(
        <Link to = {props.link} title = {props.name}>
            {props.icon}
        </Link>
    )
}

export default SocialIcons;