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
  description1: `Residing in Oakland, CA and trained in the ways of full-stack web development by the good people at `,
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

export const bioData = {
  paragraph1:
    'I love all things development and user interface design. My main focus, however, is on front-end web development. The ability to create whatever I can think of and challenge myself while doing it never gets old for me. Outside of development, I love traveling, cooking, and making electronic music.',
  paragraph2:
    'If you like what you see here, I would love to connect with you about an open position in your organization, a chance to partner with you on an open-source project, or just talk about development in general. I always enjoy talking about the industry and new technologies. Drop me a line at any of the contact links at the bottom of the page.',
  backgroundP1: `I work hard and smart. Why not both? I know what it’s like working a 14-hour day between two food service jobs. In order to thrive in that environment it requires endurance, grit, perseverance, and patience. These are qualities I have carried over on my journey to become a developer.`,
  backgroundP2: `My whole drive is simple: I like making things. I look at web development as a craft. Working on the front-end especially, it feels like I am painting with code as I adjust and experiment with CSS. As I dive deeper into coding I feel as if I am unlocking the true power of these incredible computers,`,
  backgroundP3: `Here is my 6 step process for coding a project:`,
  backgroundList: [
    'I envision the thing I want to make',
    'I run into all sorts of problems',
    'I learn how to solve those problems',
    'I make the thing I envisioned',
    'I am generally faster at solving similar problems in the future',
    'It feels nice to have made a thing'
  ],
  backgroundP4:
    'Programming and creating digital products is both a science and an art. I can implement and deploy a mockup from another designer. I can also design and implement UI elements all the way through. The mentality of being a constant learner and a collector of good technique has gotten me far.',
  backgroundP5: 'Happy Coding!'
};
