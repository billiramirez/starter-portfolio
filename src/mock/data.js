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
  paragraphTwo: `The time of the clients is the most valuable assets they have, let's get the most out of the agile principles and avoid unnecessary processes. The software industry is constantly changing and it's our duty as a software developer to keep updated on the standards, and good practices.`,
  paragraphThree: `I'm really passionate about Javascript ecosystem, I have been doing some work with Nodejs, GraphQL, Reactjs, React Native, Redux, Gatsby and Nextjs.`,
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'typescript-todo-app.png',
    title: 'Projects Managment with Typescript',
    info:
      'This app was made with a OOP approach using typescript, this app is not using any UI framework that all, is only Vanilla JS',
    info2:
      'This app goal is to create new projects with the description and people on them, I am not persisting data though',
    url: 'https://drag-drop-typescript-oop.netlify.app/',
    repo: 'https://github.com/billiramirez/drag-drop-typescript', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'todo-jam-stack.png',
    title: 'Todo App with JAMStack',
    info:
      'This app was created using the JAMStack, which I found pretty amazing, this get along pretty well with and Static Site Generator, Gatsby.js.',
    info2:
      'One of the benefits using JAMStack approach is using serverless functions, this project is using Netlify Serverless Functions, and for persistant data I am using FaunaDB, a GraphlQL Based Database',
    url: 'https://todo-jamstack-with-faunadb.netlify.app/',
    repo: 'https://github.com/billiramirez/todo-jamstack-with-faunadb', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'wimix-dashboard.png',
    title: 'CMS Portal for Wifi Connections',
    info:
      'This was able to Create New Pages, Surveys, Sign In Forms, customized from a backend built with Nodejs and GraphQL, then you had access to a dashboard for displaying all the collected data',
    info2:
      'The data was persistant through MongoDB, for the Client Side I made use of Reactjs and Apollo Client. This app runs in a intranet for the company that was built for',
    url: '',
    repo: 'https://github.com/billiramirez/wi-dash-v2/tree/no-apollo-server', // if no repo, the button will not show up
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
