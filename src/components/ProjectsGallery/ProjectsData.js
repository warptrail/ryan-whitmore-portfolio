import neonDemo from '../../img/neon-demo.png';
import chargenDemo from '../../img/chargen-demo.png';
import zippalDemo from '../../img/zippal-demo.png';
import spacedDemo from '../../img/spaced-demo.png';

import chargen1 from '../../img/screenshots-chargen/chargen-1.png';
import chargen2 from '../../img/screenshots-chargen/chargen-2.png';
import chargen3 from '../../img/screenshots-chargen/chargen-3.png';

import zippal1 from '../../img/screenshots-zippal/zippal-1.png';
import zippal2 from '../../img/screenshots-zippal/zippal-2.png';
import zippal3 from '../../img/screenshots-zippal/zippal-3.png';

import spaced1 from '../../img/screenshots-spaced/spaced-1.png';
import spaced2 from '../../img/screenshots-spaced/spaced-2.png';
import spaced3 from '../../img/screenshots-spaced/spaced-3.png';

import neon1 from '../../img/neon1.png';

const projectsData = [
  {
    title: 'Chargen',
    stack: 'PostgreSQL / Express / React / Node',
    demoLink: 'https://chargen-client.vercel.app',
    description: 'A Dungeons and Dragons character sheet manager',
    githubLink: 'https://github.com/warptrail/chargen-client',
    demoImg: chargenDemo,
    screenshots: [chargen1, chargen2, chargen3]
  },
  {
    title: 'Zip Pal',
    demoLink: 'https://zippals.vercel.app/',
    stack: 'PostgreSQL / Express / React / Node',
    description:
      'A pen-pal app for meeting and messaging new people around the globe',
    githubLink: 'https://github.com/warptrail/zippal-client',
    demoImg: zippalDemo,
    screenshots: [zippal1, zippal2, zippal3]
  },
  {
    title: 'Spaced',
    demoLink: 'https://spaced-client.vercel.app/',
    stack: 'PostgreSQL / Express / React / Node',
    description:
      'An app for learning a new language using the spaced-repetition technique. Utilizes a linked-list for traversing the sequence of questions',
    githubLink:
      'https://github.com/warptrail/spaced-repetition-johna-ryanw-client',
    demoImg: spacedDemo,
    screenshots: [spaced1, spaced2, spaced3]
  },
  {
    title: 'Random Neon Machine',
    demoLink: 'https://warptrail.github.io/random-neon-machine/',
    stack: 'HTML / CSS / JavaScript',
    description:
      'A piece of generative code art. A screensaver of neon shapes endlessly changing on a canvas',
    githubLink: 'https://thinkful-ei-quail.github.io/bookmark-app-ryan/',
    demoImg: neonDemo,
    screenshots: [neon1]
  }
];

export default projectsData;
