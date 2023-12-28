import React from "react";
import './skills.scss';
import '../../styles/global.scss';
import html from '../../assets/html.png';
import javascript from '../../assets/javascript.png';
import react from '../../assets/react.png';
import git from '../../assets/git.png';
import nodejs from '../../assets/node.png';
import c from '../../assets/c.png';
import cplusplus from '../../assets/c++.png';
import selenium from '../../assets/selenium.png';
import python from '../../assets/python.png';
import css from '../../assets/css.png';
import '../content/content.scss';

interface CustomIcon {
    src: any;
    alt: string;
    paragraph: string;
}

const icons: CustomIcon[] = [
    {
        src: html,
        alt: "html icon",
        paragraph: "HTML"
    },
    {
        src: javascript,
        alt: "javaScript icon",
        paragraph: "JAVASCRIPT"
    },
    {
        src: react,
        alt: "react icon",
        paragraph: "REACT"
    },
    {
        src: git,
        alt: "git icon",
        paragraph: "GIT"
    },
    {
        src: nodejs,
        alt: "nodejs icon",
        paragraph: "NODE.JS"
    },
    {
        src: css,
        alt: "css icon",
        paragraph: "CSS"
    },
    {
        src: c,
        alt: "c icon",
        paragraph: "C"
    },
    {
        src: cplusplus,
        alt: "c++ icon",
        paragraph: "C++"
    },
    {
        src: selenium,
        alt: "selenium icon",
        paragraph: "SELENIUM"
    },
    {
        src: python,
        alt: "python icon",
        paragraph: "PYTHON"
    },
];

function AppSkills() {
    return (
        <section id="skills">
            <div className="skills-wrapper section-container">
                <p className="section-title">Skill<span className="pink-title section-title">s</span></p>
                <div className="skills-icons">
                    {icons.map((icon: CustomIcon, index: number) => (
                        <div key={index} className="icon-and-text">
                            <img className="icon" src={icon.src} alt={icon.alt} />
                            <p className="icon-para">{icon.paragraph}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default AppSkills;
