
export default class Outline {
  constructor(style, lineWidth, lineCap, lineJoin) {
    this.style = style;
    this.lineWidth = lineWidth || 1;
    this.lineCap = lineCap || 'butt';
    this.lineJoin = lineJoin || 'miter';
  }
  draw(ctx, path) {
    this.style.apply(this.constructor.name, ctx);
    ctx.lineWidth = this.lineWidth;
    ctx.lineCap = this.lineCap;
    ctx.lineJoin = this.lineJoin;
    ctx.stroke(path);
  }
}
