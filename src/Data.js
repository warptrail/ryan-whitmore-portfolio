import profilePic from './images/new-profile.jpg';
import uSLogo from './images/us-geography.png';
import currencyLogo from './images/currency.png';
import trackerLogo from './images/tracker.png';
import randomNeonLogo from './images/random-neon.png';

import project1Screenshot1 from './images/project-1-screenshot-1.png';
import project1Screenshot2 from './images/project-1-screenshot-2.png';

export const aboutObject = {
  id: 'about',
  menuName: 'About',
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: 'About Me',
  headline: 'Your humble internet enthusiast',
  description1: `Residing in Oakland, CA and trained in the ways of full-stack web development (with a keen interest in frontend) by the fine folks at `,
  link: ['Thinkful', 'https://www.thinkful.com/'],
  description2: `I am a driven developer / designer experienced in using React, Node, Express and Postgres to build modern, full-stack web apps. On a mission to seek out new ways of growth and improvement, to boldly code and expand the frontiers of cyberspace.`,
  description3: `I studied Geography `,
  buttonLabel: 'Contact Me',
  imgStart: false,
  img: profilePic,
  alt: 'Car',
  dark: true,
  primary: true,
  darkText: false
};

export const projectData = [
  {
    id: 'project-1',
    name: 'US Geography Reference',
    link: '/projects/us-geography',
    description:
      'An information reference interface for each of the 50 states of the USA. Featured is the custom API made with Express to pull up the routes to specified data. Also some of my digital artwork in the fossil sections.',
    icon: uSLogo,
    repoLink: 'https://github.com/warptrail/us-geography-frontend',
    demoLink: 'https://usa-geography.vercel.app/',
    screenshots: [project1Screenshot1, project1Screenshot2]
  },
  {
    id: 'project-2',
    name: 'Currency Toolkit',
    link: '/projects/currency-toolkit',
    description:
      'This React App makes fetch requests to stocks and currency converter APIs as well as serves as a situational calculator for various monetary needs. ',
    icon: currencyLogo,
    repoLink: 'https://github.com/warptrail/currency-toolkit',
    demoLink: 'https://currency-toolkit-warptrail.vercel.app/'
  },
  {
    id: 'project-3',
    name: 'Tracker-400',
    link: '/projects/tracker-400',
    description:
      'A time and habit tracker. Currently still in development. Uses dayjs to create an interactive calendar to visualize when a reoccurring event happens. Analyzes the count, frequency across time-spans.',
    icon: trackerLogo
  },
  {
    id: 'project-4',
    name: 'Random Neon Machine',
    link: '/projects/random-neon',
    description:
      'This app is more of an art project. Made with vanilla JS and HTML canvas to draw random shapes rapidly throughout the screen.',
    icon: randomNeonLogo
  }
];

export const mainMenuData = [
  {
    id: 'about',
    name: 'About',
    toScroll: 'about',
    toRoute: '/#about',
    linkStyle: 'home-scroll'
  },
  {
    id: 'discover',
    name: 'Discover',
    toScroll: 'discover',
    toRoute: '/#discover',
    linkStyle: 'home-scroll'
  },
  {
    id: 'services',
    name: 'Services',
    toScroll: 'services',
    toRoute: '/#services',
    linkStyle: 'home-scroll'
  }
];
