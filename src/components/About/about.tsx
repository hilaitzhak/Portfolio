import React from "react";
import './about.scss';
import '../../styles/global.scss';
import '../content/content.scss';

function AppAbout() {
    return (
        <section id="about">
            <div className="about-wrapper section-container">
                <span className="section-title">About <span className="pink-title section-title">Me</span></span>
                <span className="aboutPara">I am Hila Itzhak, a software engineer with a background in programming languages, algorithms, and software development methods. I learned independently JavaScript, Node.js, React, and more.
                I have analytical thinking, problem-solving abilities, and effective communication skills, which enable me to work effectively both independently and as part of a team.
                I enjoy learning new things, new technologies and continuously seek opportunities to enhance my skills in the ever-evolving field of technology.</span>
            </div>
        </section>
    );
}

export default AppAbout;