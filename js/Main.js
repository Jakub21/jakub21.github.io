let switchers = {}, detailToggles = {};
let indexListing;

let main = () => {
  indexListing = $id('IndexListing');

  switchers.main = new AnimatedSwitcher();
  switchers.main.setAnimationData({
    leavingCn:'SlideOut', enteringCn:'Hidden', lDelay:500, eDelay:100});
  switchers.main.addSection(new Section('landing', $id('Landing')));
  switchers.main.addSection(new Section('about', $id('About')));
  switchers.main.addSection(new Section('projects', $id('Projects')));
  switchers.main.goto('landing');

  switchers.project = new AnimatedSwitcher();
  switchers.project.setAnimationData({
    leavingCn:'Hidden', enteringCn:'Hidden', lDelay:350, eDelay:50});
  switchers.project.addSection(new Section('index', $id('Index')));
  switchers.project.goto('index');

  let projects = getProjectsData();
  let compiler = new ShpCompiler();
  for (let [id, project] of Object.entries(projects)) {
    let badgesShp = getProjectBadgesShp(id, project);
    buildProjectHeader(compiler, id, project, badgesShp);
    buildProjectEntry(compiler, id, project, badgesShp);
  }
  indexListing.appendChild(compiler.compile('$div[.Clear]')[0]);
};

let getProjectBadgesShp = (id, project) => {
  let badgeDescs = getBadgeDescs();
  let badgesShp = ``;
  for (let badgeID of project.badges) {
    let desc = badgeDescs[badgeID];
    badgesShp += `$div[.Badge title '${desc}'] {
      $img[src img/badges/${badgeID}.png alt '${desc}']} `;
  }
  return badgesShp;
};

let buildProjectEntry = (compiler, id, project, badgesShp) => {
  let entryShp = `
  $div[.Element onclick 'openDetails("${id}");'] {
    $div[.Left] {
      $div[.Name] {${project.name}}
      $div[.Description] {
        $div{${project.desc}}
        $button[onclick 'goto("project", "${id}")'] {Read more}}}
    $div[.Badges] {${badgesShp}}
    $div[.Clear]}`;
  let entry = compiler.compile(entryShp)[0];
  indexListing.appendChild(entry);

  let toggle = new DomStateToggle(entry, false, {
    trueClass: 'DetailsOn', falseClass: 'DetailsOff'});
  detailToggles[id] = toggle;
};

let buildProjectHeader = (compiler, id, project, badgesShp) => {
  switchers.project.addSection(new Section(id, project.section));

  let linksShp = ``;
  let linksData = getLinksData();
  for (let [type, href] of Object.entries(project.links)) {
    linksShp += `$a[.${type} target _blank title '${linksData[type].name}'
    href '${href}'] {$img[src '${linksData[type].icon}']
    $span {${linksData[type].name}}}`;
  }

  let headerShp = `
  $button[.Back .SquareButton onclick 'goto("project", "index")']
  $h2 {${project.name}}
  $div[.Badges] {${badgesShp}}
  $div[.Links] {${linksShp}}
  $div[.Description] {${project.desc}}`;

  let header = compiler.compile(headerShp);
  for (let child of header) {
    project.section.querySelector('.ProjectHeader').appendChild(child);
  }
};

let goto = (switcherID, to) => {
  switchers[switcherID].goto(to);
}

let openDetails = (id) => {
  for (let toggle of Object.values(detailToggles)) {
    toggle.off();
  }
  if (id != undefined) detailToggles[id].on();
};
