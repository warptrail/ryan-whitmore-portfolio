import profilePic from './images/new-profile.jpg';
import uSLogo from './images/us-geography.png';
import currencyLogo from './images/currency.png';
import trackerLogo from './images/tracker.png';
import randomNeonLogo from './images/random-neon.png';

import project1Screenshot1 from './images/project-1-screenshot-1.png';
import project1Screenshot2 from './images/project-1-screenshot-2.png';
import project2Screenshot1 from './images/project-2-screenshot-1.png';
import project2Screenshot2 from './images/project-2-screenshot-2.png';
import project3Screenshot1 from './images/project-3-screenshot-1.png';
import project3Screenshot2 from './images/project-3-screenshot-2.png';
import project4Screenshot1 from './images/project-4-screenshot-1.jpeg';
import project4Screenshot2 from './images/project-4-screenshot-2.jpeg';
import project4Screenshot3 from './images/project-4-screenshot-3.jpeg';

export const aboutObject = {
  id: 'about',
  menuName: 'About',
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: 'About Me',
  headline: 'Your humble internet enthusiast',
  description1: `Residing in Oakland, CA and trained in the ways of full-stack web development by the good people at `,
  link: ['Thinkful.', 'https://www.thinkful.com/'],
  description2: `I am a driven developer / designer experienced in using React, Node, Express and Postgres to build modern, full-stack web apps. On a mission to seek out new ways of growth and improvement, to boldly expand the frontiers of cyberspace.`,
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
    param: 'us-geography',
    description:
      'An information reference interface for each of the 50 states of the USA. Featured is the custom API made with Express to pull up the routes to specified data. Also some of my digital artwork in the fossil sections.',
    icon: uSLogo,
    detail: [
      `This project is a lightweight full-stack application complete with a front-end client hosted on Vercel and a back-end server hosted on Heroku.`,
      `The purpose of building this project was to refine my Express.js boilerplate application and put it to use in a real live app. The database is not a real database per-say, but a hardcoded JSON object that contains content and links to assets. It takes a few moments for the app to “wake up” when loading it for the first time due to a delay communicating with the Heroku service.`,
      `For the frontend, this is the result of learning Styled-Components.  I emphasized using loading bars and even applied a timeout function to mimic a short loading period to highlight that they are there.`,
      `Most of the images and all of the information is derived from Wikipedia. The images in the fossil sections are my own creations, as I enjoy working with vector graphics and developing icons and stickers for assets. `
    ],
    repoLink: 'https://github.com/warptrail/us-geography-frontend',
    demoLink: 'https://usa-geography.vercel.app/',
    screenshots: [project1Screenshot1, project1Screenshot2]
  },
  {
    id: 'project-2',
    name: 'Currency Toolkit',
    link: '/projects/currency-toolkit',
    param: 'currency-toolkit',
    description:
      'This React App makes fetch requests to stocks and currency converter APIs as well as serves as a situational calculator for various monetary needs. ',
    icon: currencyLogo,
    detail: [
      `This web application was created with the intention to refine my front-end development skills and experiment with React. The primary focus is to utilize forms to do basic calculations one might require for several monetary-related situations. Made with React and React Router.`,
      `Bookmark this app and keep it on your phone so when you are out shopping, you can quickly calculate your financial decisions!`,
      `There are four main apps: The Currency Converter, Percentages, Salary to Hourly, and the Tip Calculator. The Currency Converter uses a third-party API called exchangeratesapi.io.`,
      `The Stock Ticker on top is fetched from polygon.io api and made with the Slick Carousel plugin. Data is stored in your browsers local storage to prevent over-calling the api. The free version is limited to five calls per certain amount of time, so I picked my favorite stocks / commodities to share: Apple, Tesla, Starbucks, Bitcoin and Gold`
    ],
    repoLink: 'https://github.com/warptrail/currency-toolkit',
    demoLink: 'https://currency-toolkit-warptrail.vercel.app/',
    screenshots: [project2Screenshot1, project2Screenshot2]
  },
  {
    id: 'project-3',
    name: 'Tracker-350',
    link: '/projects/tracker-350',
    param: 'tracker-350',
    description:
      'A time and habit tracker. Currently still in development. Uses dayjs to create an interactive calendar to visualize when a reoccurring event happens. Analyzes the count, frequency across time-spans.',
    icon: trackerLogo,
    detail: [
      `This project is designed to help you visualize the constant passage of time and track the activities you do along your timeline.`,
      `The goal of this app is to become a full habit tracker app. The user will have a list of habits and record a timestamp of when that habit was committed. The app will visualized the habits on a calendar, display a daily dashboard and a statistics dashboard.`,
      `Primary utility will be counters since the last time the habit was committed. Habits can be classified by their value judgment and goals can be set and broken by relapsing in a bad habit.`,
      `All time tracking and calculating components are made using the dayjs JavaScript library.`,
      `The landing page is the universal dashboard for tracking time. Break down large units of time into their smaller components to track when you are along the year, month, week and day progress bars.`,
      `There is a calendar highlighting the current day. There is a live clock ticking the seconds. At the bottom of the page the user can copy either the ISO8601 Format of the current moment or the seconds elapsed since the Epoch.`
    ],
    repoLink: 'https://github.com/warptrail/tracker-350',
    demoLink: 'https://tracker-350.vercel.app/',
    screenshots: [project3Screenshot1, project3Screenshot2]
  },

  {
    id: 'project-4',
    name: 'Random Neon Machine',
    link: '/projects/random-neon',
    param: 'random-neon',
    description:
      'This app is more of an art project. Made with vanilla JS and HTML canvas to draw random shapes rapidly throughout the screen.',
    icon: randomNeonLogo,
    detail: [
      `In my early days of learning JavaScript I experimented with the HTML canvas element and generating SVG. This app is basically a screensaver and is the result of what Bob Ross would call a “happy accident”.`,
      `I was originally intending on building an app where a ball icon would bounce around the boundaries of the canvas like the Brick game using the requestAnimationFrame. Due to an error in my code, the ball was not erasing itself after every frame re-render. It left this trail that began to fill up the screen.`,
      `I decided to roll with it and experiment. Basically at every re-render a random number is generated. There are several functions that tell what shape and where on the canvas it will be drawn dependent on what that wildcard number is. The repeats recursively until the window is closed. To avoid the screen getting all the way saturated, there is an eraser function that sets blocks of random sizes and positions to the background color of the canvas.`
    ],
    screenshots: [
      project4Screenshot1,
      project4Screenshot2,
      project4Screenshot3
    ],
    repoLink: 'https://github.com/warptrail/random-neon-machine',
    demoLink: 'https://warptrail.github.io/random-neon-machine/'
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
