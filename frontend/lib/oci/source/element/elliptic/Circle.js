import Ellipse from "./Ellipse.js";
import Vector from "../../geometry/Vector.js";

export default class Circle extends Ellipse {
  initialize(params) {
    params.radius = new Vector(params.radius || 1, params.radius || 1);
    super.initialize(params);
  }
  
  intersects(vector) {
    // TODO
    // console.log(vector.mag() <= this.radius.x);
    return vector.mag() <= this.radius.x;
  }
}
