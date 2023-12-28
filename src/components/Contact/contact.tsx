import React from "react";
import './contact.scss';
import '../../styles/global.scss';
import linkedin from '../../assets/linkedin.png';
import github from '../../assets/github.png';
import mail from '../../assets/mail.png';
import '../content/content.scss';

function AppContact() {

    const linkedInProfileUrl = 'https://www.linkedin.com/in/hila-itzhak-b85118233/';
    const githubProfileUrl = 'https://github.com/hilaitzhak';
    const yourEmailAddress = 'hila87219@gmail.com';

    return (
    <section id="contact">
      <div className="contact-wrapper section-container">
          <h1 className="section-title">Contact<span className="pink-title section-title">Me</span></h1>
          <div className="links-container">
            <a href={linkedInProfileUrl} target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt="linkedin" className="link-image" />
            </a>
            <a href={githubProfileUrl} target="_blank" rel="noopener noreferrer">
              <img src={github} alt="github" className="link-image" />
            </a>
            <a href={`mailto:${yourEmailAddress}`}>
                        <img src={mail} alt="email" className="link-image" />
            </a>
          </div>
      </div>
    </section>
  );
}

export default AppContact;