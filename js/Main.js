let mainSwitcher, projectsSwitcher;
let list;

let badgeDescriptions = {
  js: 'Written in Javascript',
  py: 'Written in Python',
  app: 'This is an Application',
  util: 'This is an utility package',
  algo: 'This project features algorithms',
  prog: 'This project is in progress',
  old: 'This project is old'
};

let main = () => {
  mainSwitcher = new Switcher();
  mainSwitcher.addSection(new Section('landing', $id('Landing')));
  mainSwitcher.addSection(new Section('projects', $id('Projects')));
  mainSwitcher.goto('landing');

  list = $id('IndexListing');
  projectsSwitcher = new Switcher();
  projectsSwitcher.addSection(new Section('index', $id('Index')));
  addProject('Walking Blobs', 'walkers', $id('Walkers'), ['app', 'algo', 'js']);
  addProject('Rover Soft', 'roverSoft', $id('RoverSoft'), ['app', 'prog', 'py']);
  addProject('Domi.js library', 'domi', $id('Domi'), ['util', 'js']);
  addProject('Static HTML Preprocessor', 'shp', $id('SHP'), ['util', 'py']);
  addProject('Pluginable', 'pluginable', $id('Pluginable'), ['util', 'py']);
  addProject('TkInter Wrapper', 'tkiw', $id('TkInterWrapper'), ['util', 'py']);
  addProject('CIS Protocol', 'cis', $id('CIS'), ['util', 'py']);
  addProject('Maze Pathfinder', 'pathfinder', $id('Pathfinder'), ['algo', 'old', 'py']);
  addProject('TCP Communicator', 'pyComm', $id('PyComm'), ['app', 'old', 'py']);

  let clear = $create('div');
  clear.classList.add('Clear');
  list.appendChild(clear);
  projectsSwitcher.goto('index');
};

let addProject = (name, id, element, badges=[]) => {
  projectsSwitcher.addSection(new Section(id, element));

  let container = $create('div');
  container.classList.add('Element');
  container.onclick = () => {gotoProject(id);}
  list.appendChild(container);

  let nameElement = $create('div');
  nameElement.classList.add('Name');
  nameElement.innerText = name;
  container.appendChild(nameElement);

  let badgesElement = $create('div');
  badgesElement.classList.add('Badges');
  for (let badgeName of badges) {
    let badge = $create('img');
    badge.classList.add('Badge');
    badge.src = `img/badges/${badgeName}.png`;
    badge.title = badgeDescriptions[badgeName];
    badgesElement.appendChild(badge);
  }
  container.appendChild(badgesElement);

  let clear = $create('div');
  clear.classList.add('Clear');
  container.appendChild(clear);

  let back = $create('button');
  back.classList.add('Back');
  element.querySelector('.Content').appendChild(back);
  back.onclick = () => {gotoProject('index');}
  back.innerText = 'X';
}

let gotoProject = (id) => {
  let next = projectsSwitcher.sections[id].section;
  if (window.current != undefined) {
    window.current.classList.add('Hidden');
  }
  next.classList.add('Hidden');
  setTimeout((id) => {
    projectsSwitcher.goto(id);
  }, 500, id);
  setTimeout((next) => {
    if (window.current != undefined) window.current.classList.remove('Hidden');
    next.classList.remove('Hidden');
    window.current = next;
  }, 550, next);
}

let goto = (to) => {
  if (to != 'Landing' && to != 'Projects') {
    console.log('Error');
    return;
  }
  let from = (to == 'Landing') ? 'Projects' : 'Landing';
  $id(from).classList.add('SlideOut');
  $id(to).classList.add('Hidden');
  setTimeout(() => {
    mainSwitcher.goto(to.toLowerCase());
  }, 450);
  setTimeout(() => {
    $id(to).classList.remove('Hidden');
    $id(from).classList.remove('SlideOut');
  }, 550);
};
