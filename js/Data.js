
let getBadgeDescs = () => { return {
  js: 'Written in Javascript',
  py: 'Written in Python',
  app: 'This is an Application',
  util: 'This is an utility package',
  algo: 'Features algorithms',
  prog: 'Work in progress',
  net: 'Networking project',
  old: 'This project is old',
};};

let getLinksData = () => { return {
  repo: {name:'Repository', icon:'img/buttons/github.png'},
  host: {name:'Hosted project', icon:'img/buttons/hosted.png'},
  docs: {name:'Documentation', icon:'img/buttons/docs.png'},
};};

let getProjectsData = () => { return {
  chat: {
    name: 'Web Chat',
    section: $id('Chat'),
    badges: ['app', 'net', 'js'],
    links: {
      repo: 'https://github.com/Jakub21/Disk-Chat',
    },
    desc: 'Room based chat application for browsers. Users can send text, images and react to messages. Rooms can be either opened to public or kept private.',
  },
  walkers: {
    name: 'Walking Blobs',
    section: $id('Walkers'),
    badges: ['app', 'algo', 'js'],
    links: {},
    desc: 'Showcase of state-machine based algorithm. Blobs search for food and escape predators.',
  },
  domi: {
    name: 'Domi.js Package',
    section: $id('Domi'),
    badges: ['util', 'js'],
    links: {
      repo: 'https://github.com/Jakub21/Domi.js',
    },
    desc: 'Set of classes and aliases for building single page web applications.',
  },
  shp: {
    name: 'Static HTML Preprocessor',
    section: $id('SHP'),
    badges: ['util', 'py', 'js'],
    links: {
      repo: 'https://github.com/Jakub21/Static-Html-Preprocessor',
    },
    desc: 'HTML Preprocessor for static pages. Javascript version allows dynamic creation of  DOM elements.',
  },
  roverSoft: {
    name: 'The Rover Software',
    section: $id('RoverSoft'),
    badges: ['app', 'prog', 'net', 'py'],
    links: {
      repo: 'https://github.com/Jakub21/Rover-Soft',
    },
    desc: 'GUI app made to control a Raspberry Pi powered rover.',
  },
  pluginable: {
    name: 'Pluginable Package',
    section: $id('Pluginable'),
    badges: ['util', 'py'],
    links: {
      repo: 'https://github.com/Jakub21/Pluginable',
      docs: 'https://jakub21.github.io/Pluginable/',
    },
    desc: 'Framework for creating modular applications. Utilizes multiprocessing and features event based inter-plugin communication. Primarily designed for the rover project.',
  },
  tkiw: {
    name: 'TkInter Wrapper Package',
    section: $id('TkInterWrapper'),
    badges: ['util', 'prog', 'py'],
    links: {
      repo: 'https://github.com/Jakub21/Tki-Wrapper',
    },
    desc: 'TkInter wrapper package. Used to build GUI for desktop apps.',
  },
  cis: {
    name: 'CIS Protocol',
    section: $id('CIS'),
    badges: ['util', 'net', 'py'],
    links: {
      repo: 'https://github.com/Jakub21/Cis-Protocol',
    },
    desc: 'TCP Communication protocol. Primarily designed for the rover project.',
  },
  pathfinder: {
    name: 'Maze Pathfinder',
    section: $id('Pathfinder'),
    badges: ['algo', 'old', 'py'],
    links: {
      repo: 'https://github.com/Jakub21/Maze-Path-Finder',
    },
    desc: 'Showcase of a pathfinding algorithm.',
  },
};};
