import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';

import { IconContext } from 'react-icons';
import { SidebarData } from './SidebarData';

import './NavBar.css';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <header>
      <IconContext.Provider value={{ color: '#E9EAFF' }}>
        <div className="Navbar">
          <Link to="/" className="mobile-logo">
            <span>Ryan Whitmore</span>
          </Link>
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
            <span className="hidden">0</span>
          </Link>
        </div>
        <nav
          id="navbar-desktop"
          className={sidebar ? 'nav-menu active' : 'nav-menu'}
        >
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
                <span className="hidden">o</span>
              </Link>
            </li>
            <li className="logo">
              <Link to="/">
                <span>Ryan Whitmore</span>
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.className}>
                  <div>
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </div>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </header>
  );
}

export default Navbar;
