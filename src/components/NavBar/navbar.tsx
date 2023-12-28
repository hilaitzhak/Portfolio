import { BrowserView, MobileView } from 'react-device-detect';
import './navbar.scss';
import React, { useState } from 'react';
import { Link } from 'react-scroll';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';

function AppNavbar() {
  const [mobileMenuAnchorEl, setMobileMenuAnchorEl] = useState<null | HTMLElement>(null);

  const handleMobileMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMenuAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMenuAnchorEl(null);
  };

  return (
    <nav className='navbar'>
      <BrowserView>
        <div className='menu-items'>
            <Link isDynamic={true} activeClass='active' containerId="app-menu" className='menu-list-item' to='home' spy={true} hashSpy={false} spyThrottle={0} offset={0} duration={500}>Home</Link>
            <Link isDynamic={true} activeClass='active' containerId="app-menu" className='menu-list-item' to='about' spy={true} hashSpy={false} spyThrottle={0} offset={0} duration={500}>About</Link>
            <Link isDynamic={true} activeClass='active' containerId="app-menu" className='menu-list-item' to='skills' spy={true} hashSpy={false} spyThrottle={0} offset={0} duration={500}>Skills</Link>
            <Link isDynamic={true} activeClass='active' containerId="app-menu" className='menu-list-item' to='projects' spy={true} hashSpy={false} spyThrottle={0} offset={0} duration={500}>Projects</Link>
            <Link isDynamic={true} activeClass='active'  containerId="app-menu" className='menu-list-item' to='contact' spy={true} hashSpy={false} spyThrottle={0} offset={0} duration={500}>Contact</Link>
        </div>
      </BrowserView>
      <MobileView>
        <IconButton
          className='menu-icon'
          edge='end'
          color='inherit'
          aria-label='menu'
          onClick={handleMobileMenuClick}
        >
          <MenuIcon fontSize="large"/>
        </IconButton>
        <Menu
          anchorEl={mobileMenuAnchorEl}
          open={Boolean(mobileMenuAnchorEl)}
          onClose={handleMobileMenuClose}
        >
          <MenuItem onClick={handleMobileMenuClose}>
            <Link
              activeClass='active-menu-icon'
              containerId="app-menu" 
              to='home'
              spy={true}
              hashSpy={false}
              spyThrottle={0}
              offset={0}
              duration={500}
            >
              Home
            </Link>
          </MenuItem>
          <MenuItem onClick={handleMobileMenuClose}>
            <Link
              activeClass='active-menu-icon'
              containerId="app-menu" 
              to='about'
              spy={true}
              hashSpy={false}
              spyThrottle={0}
              offset={0}
              duration={500}
            >
              About
            </Link>
          </MenuItem>
          <MenuItem onClick={handleMobileMenuClose}>
            <Link
              activeClass='active-menu-icon'
              containerId="app-menu" 
              to='skills'
              spy={true}
              hashSpy={false}
              spyThrottle={0}
              offset={0}
              duration={500}
            >
              Skills
            </Link>
          </MenuItem>
          <MenuItem onClick={handleMobileMenuClose}>
            <Link
              activeClass='active-menu-icon'
              containerId="app-menu" 
              to='projects'
              spy={true}
              hashSpy={false}
              spyThrottle={0}
              offset={0}
              duration={500}
            >
              Projects
            </Link>
          </MenuItem>
          <MenuItem onClick={handleMobileMenuClose}>
            <Link
              activeClass='active-menu-icon'
              containerId="app-menu" 
              to='contact'
              spy={true}
              hashSpy={false}
              spyThrottle={0}
              offset={0}
              duration={500}
            >
              Contact
            </Link>
          </MenuItem>
        </Menu>
      </MobileView>
    </nav>
  );
}

export default AppNavbar;
