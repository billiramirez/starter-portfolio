import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Billi Ramirez', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: `Hi, I'm a Software Developer `, // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi! My name is',
  name: 'Billi Ramirez',
  subtitle: `I'm a Software Developer`,
  cta: `Let's get to know us better`,
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: `I believe in giving the customer what exactly needs. Constantly meetings make more accurate software and more valuables features are delivered first. Let's build the right solution.`,
  paragraphTwo: `Iteration and incremental processes.`,
  paragraphThree: `The time of the stakeholders is the most valuable assets they have, let's get the most out of the agile principles and avoid unnecessary processes. The software industry is constantly changing and it's our duty as a software developer to keep updated on the standards, and good practices.`,
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: `Let's make your ideas alive`,
  btn: 'Contact Me',
  email: 'ramirezbilly42@outlook.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/billiramirezdev',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://codepen.io/billiramirez',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/billiramirez/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/billiramirez',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
