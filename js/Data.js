
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
    timeline: {
      start: '2020 Q1',
      latest: '+'
    },
    screenshots: [
      { file: 'chat_landing.png',
        title:'Landing page with login and signup forms.'
      },
      { file: 'chat_list.png',
        title:'Logged in. User can see list of their rooms. In the right-top there is pop-up notification visible.'
      },
      { file: 'chat_text_wide.png',
        title: 'Example chat room on standard screen. Perspective of user "Disk"'
      },
      { file: 'chat_text_narrow.png',
        title: 'Example chat room on narrow screen. Perspective of user "Person3"'
      },
      { file : 'chat_join.png',
        title: 'Join room form.'
      },
      { file : 'chat_create.png',
        title: 'Create room form.'
      }
    ],
    desc: 'Room based chat application for browsers. Users can send text, images and react to messages. Rooms can be either opened to public or kept private.',
  },
  walkers: {
    name: 'Walking Blobs',
    section: $id('Walkers'),
    badges: ['app', 'algo', 'js'],
    links: {},
    timeline: {
      start: '2020 Q2',
    },
    desc: 'Showcase of state-machine based algorithm. Blobs search for food and escape predators.',
  },
  domi: {
    name: 'Domi.js Package',
    section: $id('Domi'),
    badges: ['util', 'js'],
    links: {
      repo: 'https://github.com/Jakub21/Domi.js',
    },
    timeline: {
      start: '2020 Q2',
      latest: '+'
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
    timeline: {
      start: '2020 Q4',
      latest: '+'
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
    timeline: {
      start: '2020 Q1',
      latest: '2020 Q2'
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
    timeline: {
      start: '2019 Q3',
      latest: '2020 Q1'
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
    timeline: {
      start: '2019 Q2',
      latest: '2020 Q3'
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
    timeline: {
      start: '2019 Q4'
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
    timeline: {
      start: '2018 Q2'
    },
    desc: 'Showcase of a pathfinding algorithm.',
  },
};};
