import Polygon from './Polygon.js';

export default class MirroredPolygon extends Polygon {
  constructor(ci, axis='y', sverts, zIndex) {
    let vertices = MirroredPolygon.generateVertices(axis, sverts);
    super(ci, vertices, zIndex);
    this.axis = axis;
    this.sectionVertices = sverts;
  }
  static generateVertices(axis, sverts) {
    const VERT = axis.toLowerCase() == 'y';
    let mod = VERT?
      (v) => {v=v.copy(); v.y = -v.y; return v;} :
      (v) => {v=v.copy(); v.x = -v.x; return v;};
    return [...sverts, ...sverts.map(mod).reverse()];
  }
}
