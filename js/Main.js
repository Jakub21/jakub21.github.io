let mainSwitcher, projectsSwitcher;
let list;

let main = () => {
  mainSwitcher = new Switcher();
  mainSwitcher.addSection(new Section('landing', $id('Landing')));
  mainSwitcher.addSection(new Section('projects', $id('Projects')));
  mainSwitcher.goto('landing');

  list = $id('IndexListing');
  projectsSwitcher = new Switcher();
  projectsSwitcher.addSection(new Section('index', $id('Index')));
  addProject('Walkers', 'walkers', $id('Walkers'));
  addProject('Pluginable', 'pluginable', $id('Pluginable'));

  let clear = $create('div');
  clear.classList.add('Clear');
  list.appendChild(clear);
  projectsSwitcher.goto('index');
};

let addProject = (name, id, element) => {
  projectsSwitcher.addSection(new Section(id, element));

  let container = $create('div');
  container.classList.add('Element');
  container.onclick = () => {gotoProject(id);}
  list.appendChild(container);

  let nameElement = $create('div');
  nameElement.classList.add('Name');
  nameElement.innerText = name;
  container.appendChild(nameElement);

  let badges = $create('div');
  badges.classList.add('Badges');
  badges.innerText = '<badges go here>';
  container.appendChild(badges);

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
