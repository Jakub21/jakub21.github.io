import * as oci from '../lib/oci/oci.js';


class AstronautModel extends oci.elm.Element {
  constructor(parent, data) {
    super(parent, {
      shape: new oci.elm.polygon.Rectangle({x: 50, y: 50}),
      texture: new oci.tex.Texture([
        // new oci.tex.components.Outline(new oci.tex.styles.Color(0, 255, 255, 100)),
        new oci.tex.components.Fill(new oci.tex.styles.Image(data.image)),
      ]),
    });
    this.trnf.rotate(Math.random() * 2 * Math.PI);
    this.data = data;
    this.name = data.name;
  }
  draw(ctx) {
    this.trnf.rotate(-0.00075);
    super.draw(ctx);
  }
}


class AstronautRoot extends oci.elm.Element {
  constructor(parent, data) {
    super(parent, {
      transform: new oci.geo.Transform({ox: data.orbitRadius}),
      shape: new oci.elm.polygon.Rectangle({x: 50, y: 50}),
      // texture: new oci.tex.Texture([
      //   new oci.tex.components.Outline(new oci.tex.styles.Color(255, 0, 0, 100)),
      // ]),
      joint: new oci.kine.Joint({enabled: true, target: 4.2725, damp: {freq: 0.3, zeta: 1.5, init: 0}}),
    });
    this.rootJoint = parent.parent.joint;
    this.data = data;
    this.name = data.name;
    new AstronautModel(this, data);
  }
  draw(ctx) {
    this.joint.set(-this.rootJoint.target + (Math.PI * 1.36));
    super.draw(ctx);
  }
}


export default class AstronautAnchor extends oci.elm.Element {
    constructor(parent, data={}) {
      super(parent, {
        shape: new oci.elm.elliptic.Circle({radius: 1}),
        // texture: new oci.tex.Texture([
        //   new oci.tex.components.Outline(new oci.tex.styles.Color(60, 60, 60, 100)),
        // ]),
        kinetics: new oci.kine.Kinetics({enabled: true})
      });
      new AstronautRoot(this, data);
      this.x = false;
    }
  }
  