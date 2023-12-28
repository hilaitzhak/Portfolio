// import React from 'react';
// import AppHome from "../Home/home";
// import AppAbout from "..//About/about";
// import AppSkills from "..//Skills/skills";
// import AppProjects from "../Projects/projects";
// import AppContact from "../Contact/contact";
// import './content.scss';

// function AppContent() {
//     return (
//         <div className="menu-content" id="app-menu">
//             <AppHome/>
//             <AppAbout/>
//             <AppSkills/>
//             <AppProjects/>
//             <AppContact/>
//         </div>
//     );
// }

// export default AppContent;

import React from 'react';
import AppHome from '../Home/home';
import AppAbout from '../About/about';
import AppSkills from '../Skills/skills';
import AppProjects from '../Projects/projects';
import AppContact from '../Contact/contact';
import './content.scss';

function AppContent() {
    return (
        <div className="menu-content" id="app-menu">
            <AppHome />
            <AppAbout />
            <AppSkills />
            <AppProjects />
            <AppContact />
        </div>
    );
}

export default AppContent;
