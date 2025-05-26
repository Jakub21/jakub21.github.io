
export default class Texture {
  constructor(components=[]) {
    this.components = components;
    this.hidden = false;
  }
  hide(flag=true) {
    this.hidden = flag;
  }
  reset() {
    this.components = [];
  }
  draw(ctx, path) {
    if (this.hidden) return;
    for (let comp of this.components) {
      comp.draw(ctx, path)
    }
  }
}
