let switchers = {}, detailToggles = {};
let indexListing, indexListingOld;
let projects, compiler;

let main = () => {
  indexListing = $id('IndexListing');
  indexListingOld = $id('IndexListingOld');

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

  projects = getProjectsData();
  compiler = new ShpCompiler();
  for (let [id, project] of Object.entries(projects)) {
    let listingParent = project.highlight ? indexListing : indexListingOld;
    let badgesShp = getBadgesShp(id, project);
    buildHeader(id, project, badgesShp);
    buildEntry(id, project, badgesShp, listingParent);
    buildLoadScreenshots(id, project);
  }
  indexListing.appendChild(compiler.compile('$div[.Clear]')[0]);
};

let getBadgesShp = (id, project) => {
  let badgeDescs = getBadgeDescs();
  let badgesShp = ``;
  for (let badgeID of project.badges) {
    let desc = badgeDescs[badgeID];
    badgesShp += `$div[.Badge title '${desc}'] {
      $img[src img/badges/${badgeID}.png alt '${desc}']} `;
  }
  return badgesShp;
};

let buildEntry = (id, project, badgesShp, parent) => {
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
  parent.appendChild(entry);

  let toggle = new DomStateToggle(entry, false, {
    trueClass: 'DetailsOn', falseClass: 'DetailsOff'});
  detailToggles[id] = toggle;
};

let buildHeader = (id, project, badgesShp) => {
  switchers.project.addSection(new Section(id, project.section));

  let timelineShp = ``;
  let timeline = project.timeline;
  if (timeline.latest == undefined) {
    timelineShp = `Developed in ${timeline.start}`;
  } else if (timeline.latest == '+') {
    timelineShp = `Started in ${timeline.start}`;
  } else {
    timelineShp = `Started in ${timeline.start}, finished in ${timeline.latest}`;
  }

  let linksShp = ``;
  let linksData = getLinksData();
  for (let [type, href] of Object.entries(project.links)) {
    linksShp += `$a[.${type} target _blank title '${linksData[type].name}'
    href '${href}'] {$img[src '${linksData[type].icon}']
    $span {${linksData[type].name}}}`;
  }

  let olderShp = ``;
  if (!project.highlight) {
    olderShp = `
    $div[.BadgeProperty title 'This project is old'] {
      $img[src img/old.png]
    }
    `;
  }

  let headerShp = `
  $button[.Back .SquareButton onclick 'goto("project", "index")']
  $h2 {${project.name}}
  $div[.BadgeProperty title '${timelineShp}'] {
    $img[src img/date.png] }
  ${olderShp}
  $div[.Badges] {${badgesShp}}
  $div[.Links] {${linksShp}}
  $div[.Description] {${project.desc}}`;

  let header = compiler.compile(headerShp);
  for (let child of header) {
    project.section.querySelector('.Header').appendChild(child);
  }
};

let buildLoadScreenshots = (id, project) => {
  let parent = project.section.querySelector('.Screenshots');
  if (parent == null) return;
  let shp = `
  $h4 {Screenshots}
  $button[onclick 'buildScreenshots("${id}")'] {Load screenshots}
  `;
  let dom = compiler.compile(shp);
  for (let child of dom) {
    parent.appendChild(child);
  }
};

let buildScreenshots = (id) => {
  let project = projects[id];
  let parent = project.section.querySelector('.Screenshots');
  let button = parent.querySelector('button');
  button.parentNode.removeChild(button);
  let shp = '';
  for (let data of project.screenshots) {
    let {file, title} = data;
    let domID = `Ss_${id}_${file}`;
    shp += `$div[#${domID} .Screenshot
      onclick 'toggleZoom("${domID}")' title '${title}'] {
        $img[src 'img/screenshots/${id}/${file}']}`;
  }
  let dom = compiler.compile(shp);
  for (let child of dom) {
    parent.appendChild(child);
  }
}

let goto = (switcherID, to) => {
  switchers[switcherID].goto(to);
}

let openDetails = (id) => {
  for (let toggle of Object.values(detailToggles)) {
    toggle.off();
  }
  if (id != undefined) detailToggles[id].on();
};

let toggleZoom = (domID) => {
  let elm = $id(domID);
  elm.classList.toggle('Active');
}
