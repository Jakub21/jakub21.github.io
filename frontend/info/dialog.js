import data from "./data.js";

export default class Dialog {
  constructor() {
    this.element = $.make('div #dialog');
    $.get('body').append(this.element);
    this.element.appendShp('$div[.topbar] {$span[.title] $span[.close] $div[.clear]} $div[.content]');
    this.title = $.get('.title', this.element.elm);
    this.content = $.get('.content', this.element.elm);
    $.get('.close', this.element.elm)
      .prop({innerText: '[x]'})
      .on('click', evt => {this.close()});
  }
  open() {
    this.element.prop({hidden: false});
  }
  close() {
    this.element.prop({hidden: true});
  }
  load(id) {
    let {title, content} = data[id];
    this.title.prop({innerHTML: `[${title}]`});
    this.content.prop({innerHTML: content});
    // this.content.empty().appendShp(content);
    this.open();
  }
}
