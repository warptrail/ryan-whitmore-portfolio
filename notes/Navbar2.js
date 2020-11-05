/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import './NavBar.css';
import Dropdown from '../Dropdown/Dropdown';

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const renderMenuIcon = () => {
    if (click) {
      return <FaIcons.FaBars />;
    }
    return <FaIcons.FaTimes />;
  };

  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="Navbar">
        <Link to="/" className="navbar-logo">
          Warptrail
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          {renderMenuIcon()}
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
              About
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
