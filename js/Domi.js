// Domi.js v0.1.1
// Github https://github.com/Jakub21/Domi.js
// MIT License

let $id = (id) => { return document.getElementById(id); }
let $cn = (cn) => { return document.getElementsByClassName(cn); }
let $tag = (tag) => { return document.getElementsByTagName(tag); }
let $qr = (query) => { return document.querySelector(query); }
let $create = (tag, id=undefined) => { let elm = document.createElement(tag); if (id != undefined) elm.id = id; return elm;}
let $on = (elm, key, cb) => { elm.addEventListener(key, cb); }
let $empty = (elm) => { while (elm.lastChild) { elm.removeChild(elm.lastChild); }}
class Keyboard { constructor(element) { this.element = element; } bind(key, callback) { $on(this.element, 'keydown', (evt) => { if (evt.key == key) callback(evt); }); }}
class Switcher { constructor() { this.current = ''; this.previous = ''; this.sections = {}; this.toggles = {}; } addToggle(name, toggle) { this.toggles[name] = toggle; toggle.off(); } addSection(section) { section.switcher = this; section.hide(true); this.sections[section.id] = section; } goto(id) { if (this.sections[id] == undefined) { console.error(`Can not switch to section "${id}", it does not exist`); return; } if (this.current != '') this.sections[this.current].hide(); this.sections[id].show(); this.previous = this.current; this.current = id; } back() { if (this.previous == '') return; this.goto(this.previous); }}
class Section { constructor(id, element, toggles=[], onEnter=undefined, onLeave=undefined) { this.id = id; this.section = element; this.toggles = toggles; this.onEnter = onEnter; this.onLeave = onLeave; } show() { this.section.hidden = false; if (this.onEnter != undefined) this.onEnter(); for (var toggle of this.toggles) { toggle.on(); } } hide(auto=false) { this.section.hidden = true; for (var toggle of this.toggles) { toggle.off(); } if (this.onLeave != undefined && !auto) this.onLeave(); }}
class DomStateToggle { constructor(element, state=true, options={}) { this.element = element; this.state = true; this.trueClass = options.trueClass; this.falseClass = options.falseClass; this.hide = options.hide; this.enabled = true; if (state) this.toggle(); } static placeholder() { let element = $create('p'); element.innerText = 'placeholder'; element.hidden = true; return new DomStateToggle(element, false); } bind(domi, key) { domi.kb.bind(key, (evt) => {this.toggle();}); } enable() { this.enabled = true; } disable() { this.enabled = false; } toggle() { if (!this.enabled) return; this.state = !this.state; this.element.classList.toggle(this.trueClass); this.element.classList.toggle(this.falseClass); if (this.hide) this.element.hidden = !this.state; } on() { if (!this.enabled) return; if (this.state) return; this.state = true; this.element.classList.add(this.trueClass); this.element.classList.remove(this.falseClass); if (this.hide) this.element.hidden = false; } off() { if (!this.enabled) return; if (!this.state) return; this.state = false; this.element.classList.remove(this.trueClass); this.element.classList.add(this.falseClass); if (this.hide) this.element.hidden = true; }}
