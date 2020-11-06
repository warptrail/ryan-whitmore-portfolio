/* eslint-disable import/prefer-default-export */
import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
// import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    className: 'nav-text'
  },
  {
    title: 'About',
    path: '#about',
    icon: <FaIcons.FaCoffee />,
    className: 'nav-text'
  },
  {
    title: 'Projects',
    path: '#projects',
    icon: <AiIcons.AiOutlineCode />,
    className: 'nav-text'
  },
  {
    title: 'Contact',
    path: '#contact',
    icon: <FaIcons.FaMailBulk />,
    className: 'nav-text'
  }
];
