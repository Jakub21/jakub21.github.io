
let getBadgeDescs = () => { return {
  js: 'Written in Javascript',
  py: 'Written in Python',
  app: 'This is an Application',
  util: 'This is an utility package',
  algo: 'Features algorithms',
  prog: 'Work in progress',
  net: 'Networking project',
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
    highlight: true,
    links: {
      repo: 'https://github.com/Jakub21/Disk-Chat',
      host: 'https://disken-chat.herokuapp.com/',
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
    highlight: true,
    links: {
      repo: 'https://github.com/Jakub21/Walking-Blobs',
      host: 'https://jakub21.github.io/Walking-Blobs/',
    },
    timeline: {
      start: '2020 Q2',
    },
    screenshots: [
      { file: 'sim_landing.png',
        title:'Application just after being loaded.'
      },
      { file: 'sim_herbi_chase.png',
        title:'Herbivore moving to randomly spawned food.'
      },
      { file: 'sim_scared.png',
        title:'Herbivore escaping a predator.'
      },
      { file: 'sim_scared_multiple.png',
        title:'Herbivore escaping multiple predators at once.'
      },
      { file: 'sim_carni_chase.png',
        title:'Carnivore chasing a herbivore.'
      },
    ],
    desc: 'Showcase of state-machine based algorithm. Blobs search for food and escape predators.',
  },
  domi: {
    name: 'Domi.js Package',
    section: $id('Domi'),
    badges: ['util', 'js'],
    highlight: true,
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
    highlight: true,
    links: {
      repo: 'https://github.com/Jakub21/Static-Html-Preprocessor',
    },
    timeline: {
      start: '2020 Q4',
      latest: '+'
    },
    desc: 'HTML Preprocessor for static pages. Javascript version allows dynamic creation of  DOM elements.',
  },
  cis: {
    name: 'CIS Protocol',
    section: $id('CIS'),
    badges: ['util', 'net', 'py'],
    highlight: true,
    links: {
      repo: 'https://github.com/Jakub21/Cis-Protocol',
    },
    timeline: {
      start: '2019 Q4'
    },
    desc: 'Communication protocol. Primarily designed for the rover project.',
  },
  roverSoft: {
    name: 'The Rover Software',
    section: $id('RoverSoft'),
    badges: ['app', 'prog', 'net', 'py'],
    highlight: false,
    links: {
      repo: 'https://github.com/Jakub21/Rover-Soft',
    },
    timeline: {
      start: '2020 Q1',
      latest: '2020 Q2'
    },
    screenshots: [
      { file: 'landing.png',
        title: 'Application just after being loaded.'
      },
      { file: 'terminals.png',
        title:'Terminals running two programs on the same machine and controller GUI with hidden sidebar.'
      },
      { file: 'pad1.png',
        title:'Correct readout of the gamepad state (hat)'
      },
      { file: 'pad2.png',
        title:'Correct readout of the gamepad state (button and axis)'
      },
    ],
    desc: 'GUI app made to control a Raspberry Pi powered rover.',
  },
  pluginable: {
    name: 'Pluginable Package',
    section: $id('Pluginable'),
    badges: ['util', 'py'],
    highlight: false,
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
    highlight: false,
    links: {
      repo: 'https://github.com/Jakub21/Tki-Wrapper',
    },
    timeline: {
      start: '2019 Q2',
      latest: '+'
    },
    desc: 'TkInter wrapper package. Used to build GUI for desktop apps.',
  },
  pathfinder: {
    name: 'Maze Pathfinder',
    section: $id('Pathfinder'),
    badges: ['algo', 'py'],
    highlight: false,
    links: {
      repo: 'https://github.com/Jakub21/Maze-Path-Finder',
    },
    timeline: {
      start: '2018 Q2'
    },
    screenshots: [
      { file: 'path_rand.png',
        title: 'Random 70x70 maze with a path from (10,10) to (60,60). It took 53s to complete.'
      },
    ],
    desc: 'Showcase of a pathfinding algorithm.',
  },
};};
