import React from 'react';
import html from "../images/icons/html.svg";
import css from "../images/icons/css.svg";
import javascript from "../images/icons/javascript.svg";
import reactjs from "../images/icons/react.svg";
import firebase from "../images/icons/firebase.svg";
import node from "../images/icons/node.svg";
import git from "../images/icons/git.svg";
import mySQL from "../images/icons/mySQL.svg"
import typeScript from "../images/icons/typescript.svg"
import strapi from "../images/icons/strapi.svg"
import gatsby from "../images/icons/gatsby.svg"
import sass from "../images/icons/sass.svg"
import figma from"../images/icons/figma.svg"
import redux from "../images/icons/redux.svg"

import "../css/techIcons.scss";

const icons = [
    {
        name: "HTML 5",
        src: html,
    },
    {
        name: "CSS",
        src: css
    },
    {
        name: "Javascript",
        src: javascript
    },
    {
        name: "React.js | Native",
        src: reactjs
    },
    {
        name: "Firebase",
        src: firebase
    },
    {
        name: "Node.js",
        src: node
    },
    {
        name: "GIT",
        src: git
    },
    {
        name: "MySQL",
        src: mySQL,
    },
    {
        name: "Typescript",
        src: typeScript,
    },
    {
        name: "Strapi",
        src: strapi,
    },
    {
        name: "Gatsby",
        src: gatsby,
    },
    {
        name: "Sass",
        src: sass,
    },
    {
        name: "Figma",
        src: figma,
    },
    {
        name: "Redux",
        src: redux,
    }
];

const TechIcon = ({src, name}) => {
    return(
        <div className = "techIcon">
            <img src = {src} alt = {`${name}Icon`} loading = "lazy"/>
            <p>{name}</p>
        </div>
    )
}

export default TechIcon;
export {icons};